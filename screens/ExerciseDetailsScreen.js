import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, FlatList, Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth, getExerciseProgressLogs, saveExerciseProgressLog } from "../firebase";
import ButtonAccent from "../themedComponents/ButtonAccent";
import Container from "../themedComponents/Container";
import Input from "../themedComponents/Input";
import Text from "../themedComponents/Text";
import View from "../themedComponents/View";


const ProgressLog = {
    date: new Date(Date.now()),
    weight: null,
    reps: null,
}

const ExerciseDetailsScreen = ({route, navigation}) => {
    const {eid, title, notes} = route.params;
    const [userId, setUserId] = useState(null);
    const [state, setState] = useState(ProgressLog);
    const [logs, setLogs] = useState([]);

    const {weight, reps} = state;

    const scale = useRef(new Animated.Value(1)).current;
    const scaleList = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user){
                setUserId(user.uid);
            }
        })
    }, [])


    useFocusEffect(
        React.useCallback(() => {
            async function fetchLogs() {
                const resp = await getExerciseProgressLogs(eid);
                setLogs(resp);    
            }
            fetchLogs()

            scale.setValue(0)
            Animated.spring(scale, {toValue: 1, useNativeDriver: true}).start();

        }, [userId])
    );

    function getFormattedDate(date) {
        var year = date.getFullYear();
      
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return day + '-' + month + '-' + year;
    }

    function renderListItem({item}){
        // console.log("ITEM", item);
        return (
            <Animated.View style={[styles.logContainer.container, {transform: [{scale: scaleList}]}]}>
                <Container style={styles.logContainer}>
                    {!(item.date instanceof Date) && <Text style={styles.logContainer.date}>{getFormattedDate(item.date.toDate())}</Text>}
                    {(item.date instanceof Date) && <Text style={styles.logContainer.date}>{getFormattedDate(item.date)}</Text>}
                    <SafeAreaView>
                        <Text style={styles.logContainer.reps}>{item.reps} reps</Text>
                        <Text style={styles.logContainer.weight}>{item.weight} kg</Text>
                    </SafeAreaView>
                </Container>
            </Animated.View>
        )
    }

    async function handleLogProgress(){
        Keyboard.dismiss();
        const pid = await saveExerciseProgressLog(eid, userId, state.date, weight, reps);
        const newItem = {pid, uid: userId, eid, weight, reps, date: state.date}
        const newArray = [newItem, ...logs]
        console.log("ITEM", newArray);

        setLogs(newArray);
        scaleList.setValue(0)
        Animated.spring(scaleList, {toValue: 1, useNativeDriver: true}).start();
    }

    return (
        <View style={styles.container}>
                <Container style={styles.exerciseContainer}>
                    <SafeAreaView style={styles.exerciseDetails}>
                        <Text style={styles.exerciseDetails.title}> {title} </Text>
                        <Text style={styles.exerciseDetails.notes}> {notes} </Text>
                    </SafeAreaView>
                </Container>

                <SafeAreaView style={styles.newLogContainer}>
                    <Text style={styles.listContainer.progress} >Log a new set</Text>
                    <Container style={styles.newLogContainer.content}>
                        <SafeAreaView style={styles.newLogContainer.content.form}>
                            <SafeAreaView style={styles.newLogContainer.content.form.item}>
                                <Input style={styles.newLogContainer.content.form.input} placeholder="reps" value={reps} returnKeyType={"done"} keyboardType={"numeric"} onChangeText={text => setState({...state, reps: text})}/>
                                <Text style={styles.newLogContainer.content.form.item.text}>reps</Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.newLogContainer.content.form.item}>
                                <Input style={styles.newLogContainer.content.form.input} placeholder="weight" value={weight} returnKeyType={"done"} keyboardType={"numeric"} onChangeText={text => setState({...state, weight: text})}/>
                                <Text style={styles.newLogContainer.content.form.item.text}>kg</Text>
                            </SafeAreaView>
                        </SafeAreaView>
                        <Animated.View style={[styles.container.buttonContainer, {transform: [{scale}]}]}>
                            <ButtonAccent style={styles.container.button} onPress={handleLogProgress}>
                                <Text style={styles.container.button.text}>
                                        +
                                    </Text>
                            </ButtonAccent>
                        </Animated.View>
                    </Container>
                </SafeAreaView>

                <SafeAreaView style={styles.listContainer}>
                    <TouchableOpacity>
                        <Text style={styles.listContainer.progress}>Progress history ></Text>
                    </TouchableOpacity>
                    <FlatList 
                        horizontal={true}
                        // style={styles.list} 
                        contentContainerStyle={styles.list} 
                        data={logs}
                        renderItem={renderListItem} 
                        keyExtractor={item => item.pid} />
                </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',

        buttonContainer: {
            flexDirection: 'column',
            width: 75,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        },

        button: {
            height: 75,
            borderRadius: 100,
            width: '100%',

            text:{
                color: "#fff",
                fontSize: 60,
                textAlign: "center",
                fontWeight: "700",
                marginTop: -10

            }
        },
    },

    exerciseContainer: {
        height: '30%',
        width: '85%',
        borderRadius: 20,
        paddingTop: 20
        
    },

    exerciseDetails: {
        width: "95%",
        height: "90%",
        justifyContent: 'flex-start',

        title: {
            marginTop: 10,
            marginLeft: 20,
            fontWeight: "500",
            fontSize: 20
        },

        notes: {
            marginTop: 20,
            marginLeft: 20,
            fontWeight: "500",


        }
    },

    newLogContainer: {
        width: "85%",
        height: "23%",
        flexDirection: "column", 
        marginBottom: 10,

            content: {
                height: "90%",
                borderRadius: 20,
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",

                    form: {
                        height: "80%",
                        width: "50%",
                        justifyContent: "space-around",

                            input: {
                                height: 40,
                                width: 100,
                                fontSize: 16
                            },

                            item: {
                                flexDirection: "row",
                                alignItems: "center",

                                text: {
                                    fontWeight: "500",
                                    fontSize: 16,
                                    marginLeft: 20
                                }
                            }
                    }
            }
    },

    listContainer: {
        height: "25%",
        marginLeft: 20,
        justifyContent: "center",

        progress: {
            marginLeft: 10,
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 10,
        }
    },

    list: {
        marginLeft: 10,
        height: 120,
    },

    logContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: 130,
        marginRight: 20,
        borderRadius: 20,
        marginBottom: 20,
        height: 110,



        date: {
            marginLeft: 15,
            marginTop: 10,
            fontSize: 18,
            fontWeight: "600",
        },

        reps: {
            marginLeft: 15,
            marginTop: 10,
            fontSize: 18,
        },

        weight: {
            marginLeft: 15,
            fontSize: 18,
            marginBottom: 10,
            color: "#ff0067"
        }
    }

})


export default ExerciseDetailsScreen;