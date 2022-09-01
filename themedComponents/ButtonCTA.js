import { Text, TouchableOpacity as DefaultButton, useColorScheme } from "react-native";
import {StyleSheet } from "react-native"
import useThemeColor from "../hooks/useThemeColor";

export default function ButtonCTA(props){
    const { style, lightColor, darkColor, title, ...otherProps } = props;
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonCtaBackground');
    const color  = useThemeColor({ light: lightColor, dark: darkColor}, 'buttonCtaForeground');

    return <DefaultButton style={[{backgroundColor},{shadowColor: colorScheme === 'dark' ? "#111" : "rgba(226, 84, 110, 0.8)"}, styles.button, style]} {...otherProps}>
        <Text style={[{color}, styles.buttonTitle]}>
            {title}
        </Text>
    </DefaultButton>;
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '6.5%',
        borderRadius: '15px',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 5.49,
        elevation: 12,
    }, 
    buttonTitle: {
        fontWeight: '600',
        fontSize: 18
    }
})