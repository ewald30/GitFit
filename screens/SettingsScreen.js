import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux"
import { handleSignOut } from "../firebase";
import { logOut, setLoggedIn } from "../redux/actions/auth";
import { setTheme } from "../redux/actions/theme";
import ButtonCTA from "../themedComponents/ButtonCTA"
import View from "../themedComponents/View"
import Text from "../themedComponents/Text";
import SwitchToggle from "react-native-switch-toggle";
import useColorScheme from "../hooks/useColorScheme";
import Container from "../themedComponents/Container";



const SettingsScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [themeToggle, setThemeToggle] = useState(false);
    const [systemSettingsToggle, setSystemSettingsToggle] = useState(false)
    const theme = useColorScheme();


    useEffect(() => {
        
        switch (theme) {
            case 'auto' :
                setSystemSettingsToggle(true);
                break;
            case 'dark':
                setThemeToggle(true);
        }

    }, [])


    const signOut = async() => {
        await handleSignOut();
        dispatch(setLoggedIn(false));
        navigation.replace("Home");
    }

    const handleToggle = (value) => {
        value === true ? dispatch(setTheme('dark')) : dispatch(setTheme('light'));
        setThemeToggle(value)
        setSystemSettingsToggle(false);

    }

    const handleSystemSettingsToggle = (value) => {
        value === true && dispatch(setTheme('auto'));
        setSystemSettingsToggle(value);
        setThemeToggle(false)

    }

    return (
        <View style={styles.screen}>
            <Container style={styles.themeContainer}>
                <Text style={styles.themeContainer.text}> Theme settings</Text>
                <SafeAreaView style={styles.themeContainer.themeToggleContainer}>
                    <Text style={styles.themeContainer.themeToggleContainer.text}>Dark mode</Text>
                    <SwitchToggle 
                        switchOn={themeToggle} 
                        onPress={() => handleToggle(!themeToggle)} 
                        circleColorOff='#fff'
                        circleColorOn='#fff'
                        backgroundColorOn='#fa356b'
                        backgroundColorOff='#C4C4C4'
                        containerStyle={{
                            marginTop: 0,
                            width: 65,
                            height: 35,
                            borderRadius: 25,
                            padding: 5,
                          }}
                        circleStyle={{
                            width: 28,
                            height: 28,
                            borderRadius: 20,
                          }}
                        />

                </SafeAreaView>

                <SafeAreaView style={styles.themeContainer.themeToggleContainer}>
                    <Text style={styles.themeContainer.themeToggleContainer.text}>Use system settings</Text>
                    <SwitchToggle 
                        switchOn={systemSettingsToggle} 
                        onPress={() => handleSystemSettingsToggle(!systemSettingsToggle)} 
                        circleColorOff='#fff'
                        circleColorOn='#fff'
                        backgroundColorOn='#fa356b'
                        backgroundColorOff='#c4c4c4'
                        containerStyle={{
                            marginTop: 0,
                            width: 65,
                            height: 35,
                            borderRadius: 25,
                            padding: 5,
                          }}
                        circleStyle={{
                            width: 28,
                            height: 28,
                            borderRadius: 20,
                          }}
                        />
                </SafeAreaView>

            </Container>

            <TouchableOpacity onPress={signOut} style={styles.signOutContainer}>
                <Container style={styles.signOutContainer.content}>
                    <Text style={styles.signOutContainer.text}>Sign out</Text>
                </Container>      
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    themeContainer: {
        width: "90%",
        alignItems: "center",
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        height: 200,
        justifyContent: "center",


        text: {
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 20,
        },

        themeToggleContainer: {
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:10,
            marginBottom: 10,

            text: {
                fontSize: 16,
                fontWeight: "500",
            }
        }
    },

    signOutContainer : {
        width: "90%",
        height: 60,

        content: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
        },


        text: {
            fontSize: 18,
            fontWeight: "500"
        }

    }
})

export default SettingsScreen;