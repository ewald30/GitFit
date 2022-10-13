import BarChart from "@chartiful/react-native-vertical-bar-graph"
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native"
import { Calendar } from "react-native-calendars"
import { BaseButton } from "react-native-gesture-handler";
import Button from "../themedComponents/Button";
import CalendarList from "../themedComponents/CalendarList";
import CalendarThemed from "../themedComponents/CalendarThemed";
import Container from "../themedComponents/Container";
import DatePickerThemed from "../themedComponents/DatePickerThemed";
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"
import { auth, getWorkoutsForUser} from "../firebase";
import { useFocusEffect } from "@react-navigation/native";


// const config = {
//     hasXAxisBackgroundLines: false,x
//     xAxisLabelStyle: {
//       position: 'right',
//       prefix: '$'
//     }
//   };

const MARKED_DATE_COLOR = "rgba(255, 103, 143, 1)"
const MARKED_DATE_STYLE = {selected: true, selectedColor: MARKED_DATE_COLOR}

const MARKED_DATE_STYLE_FIRST = {startingDay:true, selected: true, selectedColor: MARKED_DATE_COLOR}
const MARKED_DATE_STYLE_LAST = {endingDay:true, selected: true, selectedColor: MARKED_DATE_COLOR}
const MARKED_DATE_STYLE_TODAY = {selected: true, marked:true, selectedColor: MARKED_DATE_COLOR}

const MAKED_DATES = [
    '2022-09-16', '2022-05-16', '2022-05-13', '2022-09-09','2022-09-17'
]
const borderRadiusForm = 20;

Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('');
  };

const StatsScreen = ({navigation}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [loggedDays, setLoggedDays] = useState(null);
    const [workouts, setWorkouts] = useState({});
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);

    function sameDay(d1, d2) {
        // check if two dates are in the same day
        return d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate();
    }

    function getFormattedDate(date) {
        var year = date.getFullYear();
      
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return year + '-' + month + '-' + day;
    }

    useEffect(() => {

        auth.onAuthStateChanged(async (user) => {
            if (user){
                setUserId(user.uid);
            }
        })
    }, [])


    useFocusEffect(
            React.useCallback(() => {
                console.log("CALLBACK")
                async function getDates() {
                    let dictionary = {};
                    console.log("userID: ", userId);
                    const workouts = await getWorkoutsForUser(userId);

                    if (!workouts)
                        return;

                    const firstItem = workouts[0].date.toDate();
                    const lastItem  = workouts[workouts.length - 1].date.toDate();

                    workouts.forEach(workout => {
                        if (sameDay(workout.date.toDate(), new Date()))
                            dictionary[getFormattedDate(workout.date.toDate())] = MARKED_DATE_STYLE_TODAY
                        else
                            dictionary[getFormattedDate(workout.date.toDate())] = MARKED_DATE_STYLE
                    })
                    setWorkouts(dictionary);
                    setLoading(false);
                }
            
                getDates()
          
        }, [userId])
      );


    useEffect(() => {
        let daysBetweenDates = 0;

        for (const [key, value] of Object.entries(workouts)) {
            const dateObj = new Date(key)
            if (dateObj <= endDate && dateObj >= startDate) {
                daysBetweenDates += 1;
            }
        }

        setLoggedDays(daysBetweenDates)
    }, [startDate, endDate, workouts])

    const onChangeStartDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setStartDate(currentDate);
      };

    const onChangeEndDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setEndDate(currentDate);
      };

    return (
        <View style={styles.screen}>

            <Container style={styles.bottomContainer}>
                {loggedDays ? <Text style={styles.bottomContainer.containerText}>
                    {loggedDays} days 🔥
                </Text> 
                : 
                <Text style={styles.bottomContainer.containerText}>
                    Select time period
                </Text>}
            </Container>

            <Container style={styles.calendar}>
                <CalendarThemed
                    // Collection of dates that have to be marked. Default = {}
                    // style={styles.calendar}
                    // markingType={'period'}
                    enableSwipeMonths={true}
                    hideExtraDays={true}
                    firstDay={1}
                    displayLoadingIndicator={loading}
                    // hideArrows={true}
                    // hideDayNames={true}
                    markedDates={workouts}
                    />
            </Container>

            {/* <Text>{startDate.toLocaleString()}</Text>
            <Text>{endDate.toISOString()}</Text> */}
            
            <Container style={styles.datePickerContainer}>
                <SafeAreaView style={[styles.datePickerContainer.pickerForm, styles.datePickerContainer.pickerForm.pickerFormTop]}>
                    <Text>Select start date: </Text>
                    <DatePickerThemed
                        testID="dateTimePicker"
                        value={startDate}
                        mode={"date"}
                        is24Hour={true}
                        onChange={onChangeStartDate}
                        style={styles.datePickerContainer.picker}
                        />
                </SafeAreaView>
                <SafeAreaView style={[styles.datePickerContainer.pickerForm, styles.datePickerContainer.pickerForm.pickerFormBottom]}>
                    <Text>Select end date: </Text>
                    <DatePickerThemed
                            testID="dateTimePicker"
                            value={endDate}
                            mode={"date"}
                            is24Hour={true}
                            onChange={onChangeEndDate}
                            style={styles.datePickerContainer.picker}
                            accentColor={"#"}
                        />
                </SafeAreaView>

            </Container>



        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },

    calendar:{
        borderRadius: borderRadiusForm,
        width: '80%',
        height: "60%",
        alignItems: 'center',
        justifyContent: 'center',

    },

    datePickerContainer: {
        height: '20%',
        width: '80%',
        alignItems: 'center',
        borderRadius: borderRadiusForm,
        marginBottom: 20,


        pickerForm:{
            width: '100%',
            height: '50%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',


            pickerFormTop:{
                borderTopLeftRadius: borderRadiusForm,
                borderTopRightRadius: borderRadiusForm
            },

            pickerFormBottom:{
                borderBottomLeftRadius: borderRadiusForm,
                borderBottomRightRadius: borderRadiusForm
            },

        },
    },

    bottomContainer: {
        marginTop:10,
        width: "80%",
        height: 50,
        borderRadius: borderRadiusForm,
        justifyContent: 'center',
        alignItems: 'center',
        textTransform:"wrap",
        flexShrink: 1,

        containerText: {
            fontWeight: "600",
            fontSize: 18,
            textAlign: "center",
            width: "80%",
        }
    }
})

export default StatsScreen;