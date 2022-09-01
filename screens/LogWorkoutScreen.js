import { useState } from "react";
import { StyleSheet } from "react-native";
import CheckIllustration from "../assets/illustrations/CheckIllustration";
import HelloIllustration from "../assets/illustrations/HelloIllustration";
import { logWorkout } from "../firebase";
import ButtonAccent from "../themedComponents/ButtonAccent";
import ButtonCTA from "../themedComponents/ButtonCTA";
import Text from "../themedComponents/Text";
import View from "../themedComponents/View";

const LogWorkoutScreen = ({navigation}) => {
    const [logged, setLogged] = useState(false)

    function handleLogWorkout() {
        setLogged(true);
        const date = new Date();
        logWorkout(1, "beie2665", date)
    }

    return (
        <View style={styles.container}>
            {!logged && <Text style={styles.container.headerText}>You haven't logged your workout today</Text>}
            {logged && <Text style={styles.container.headerText}> Hurray! Congrats for logging your workout! 🎉 🥳</Text>}            
            
            {!logged && <View style={styles.footerContainer}>
                <HelloIllustration/>
                <ButtonAccent style={styles.container.button} onPress={handleLogWorkout}>
                    <Text style={styles.container.button.text}>
                        +
                    </Text>
                </ButtonAccent>
            </View>}

            {logged && <CheckIllustration style={styles.container.illustration}/>}
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


    footerContainer:{
        alignItems: "center",
        width: "100%",
    }

})

export default LogWorkoutScreen;

