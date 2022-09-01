import { Text, TouchableOpacity as DefaultButton, useColorScheme } from "react-native";
import {StyleSheet } from "react-native"
import useThemeColor from "../hooks/useThemeColor";

export default function ButtonAccent(props){
    const {style, lightColor, darkColor, ...otherProps } = props;
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonCtaBackground');

    return <DefaultButton style={[{backgroundColor},{shadowColor: colorScheme === 'dark' ? "#111" : "rgba(226, 84, 110, 0.8)"}, styles.button, style]} {...otherProps}/>
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 5.49,
        elevation: 12,
    }, 
})