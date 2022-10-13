import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import CheckIllustration from "../assets/illustrations/CheckIllustration";
import HelloIllustration from "../assets/illustrations/HelloIllustration";
import WorkoutIllustration from "../assets/illustrations/WorkoutIllustration";
import { auth, getUserData, getWorkoutsForUser, logWorkout } from "../firebase";
import ButtonAccent from "../themedComponents/ButtonAccent";
import ButtonCTA from "../themedComponents/ButtonCTA";
import Text from "../themedComponents/Text";
import View from "../themedComponents/View";
import ConfettiCannon from 'react-native-confetti-cannon';


const LogWorkoutScreen = ({navigation}, props) => {
    const [userId, setUserId] = useState(null);
    const [alreadyLogged,  setAlreadyLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [buttonPressed, setButtonPressed] = useState(false);

    let explosionRight, explosionLeft, explosionCenter;

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user){
                setUserId(user.uid);
            }
        })
    }, [])


    useFocusEffect(
        React.useCallback(() => {
            async function checkIfDayAlreadyLogged() {
                const workouts = await getWorkoutsForUser(userId);
                const date = new Date();
                let alreadyLogged = false;
                workouts.forEach(workout => {
                    if (sameDay(workout.date.toDate(), date)){
                        alreadyLogged = true;
                    }
                })
                
    
                if (alreadyLogged){
                    setAlreadyLogged(true);
                    setLoading(false)
                } else{
                    setAlreadyLogged(false);
                    setLoading(false)
                    
                }
    
            }
            checkIfDayAlreadyLogged() 
        }, [userId])
    );

    useEffect(() => {
        if(buttonPressed){
            explosionLeft && explosionLeft.start();
            setTimeout(function(){
                explosionRight && explosionRight.start();
                explosionCenter && explosionCenter.start();

            },0);
        }
    }, [buttonPressed])


    async function handleLogWorkout() {
        try{
        setLoading(true);

        const userData = await getUserData(userId);
        const date = new Date();
        const dayAlreadyLogged = await checkIfAlreadyLogged();

        if (dayAlreadyLogged) {
            setAlreadyLogged(true);
            return;
        }

        await logWorkout(userId, userData.username, date);

        setAlreadyLogged(true)
        setLoading(false);
        setButtonPressed(true);

        } catch(err){
            alert(err.message);
        }
    }

    async function checkIfAlreadyLogged(){
        const workouts = await getWorkoutsForUser(userId);
        const date = new Date();
        let alreadyLogged = false;
        workouts.forEach(workout => {
            if (sameDay(workout.date.toDate(), date)){
                alreadyLogged = true;
            }
        })

        return alreadyLogged;
    }

    function sameDay(d1, d2) {
        // check if two dates are in the same day
        return d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate();
      }

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#f44675" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {!alreadyLogged && <Text style={styles.container.headerText}>You haven't logged your workout today</Text>}
            {alreadyLogged  && <Text style={styles.container.headerText}>Hurrayy! Looks like you already logged your workout today 🥳🎉</Text>}
            {alreadyLogged  && <Text style={styles.container.footerText}>See you tomorrow 🔥 💪</Text>}

            
            {(!alreadyLogged) && <View style={styles.footerContainer}>
                <HelloIllustration/>
                <ButtonAccent style={styles.container.button} onPress={handleLogWorkout}>
                    {!loading && <Text style={styles.container.button.text}>
                        +
                    </Text>}
                    {/* {loading && <ActivityIndicator size="large" color="#fff" />} */}
                </ButtonAccent>
            </View>}


            {buttonPressed && <ConfettiCannon
                count={60}
                origin={{x: 0, y: 200}}
                autoStart={false}
                fadeOut={true}
                ref={ref => (explosionLeft = ref)}
                explosionSpeed={250}
                fallSpeed={2000}
                />}

            {buttonPressed && <ConfettiCannon
                count={60}
                origin={{x: +400, y: 250}}
                autoStart={false}
                fadeOut={true}
                explosionSpeed={250}
                fallSpeed={2000}
                ref={ref => (explosionRight = ref)}
                />}

            {buttonPressed && <ConfettiCannon
                count={60}
                origin={{x: 100, y: 250}}
                autoStart={false}
                fadeOut={true}
                explosionSpeed={250}
                fallSpeed={2000}
                ref={ref => (explosionCenter = ref)}
                />}

            {/* {alreadyLogged && <WorkoutIllustration style={styles.container.illustration}/>} */}
            {/* {(alreadyLogged && !logged) && <CheckIllustration style={styles.container.illustration}/>} */}


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",

        headerText: {
            fontSize: 24,
            fontWeight: "600",
            textAlign: "center",
            width: "82%",
        },

        footerText:{
            fontSize: 24,
            fontWeight: "600",
            textAlign: "center",
            width: "82%",
            marginBottom: 50
        },

        button: {
            width: "30%",
            fontSize: 30,
            height: 110,
            borderRadius: 100,
            marginBottom:50,

            text:{
                color: "#fff",
                fontSize: 80,
                textAlign: "center",
                fontWeight: "700",
                marginTop: -10

            }
        },

        illustration: {
            marginBottom: 50,
        }
    },

    loadingContainer: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },


    footerContainer:{
        alignItems: "center",
        width: "100%",
    }

})

export default LogWorkoutScreen;

