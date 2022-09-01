import { Text, TouchableOpacity as DefaultButton, useColorScheme, View } from "react-native";
import {StyleSheet } from "react-native"
import GoogleIcon from "../assets/icons/GoogleIcon";
import useThemeColor from "../hooks/useThemeColor";

export default function Button(props){
    const { style, lightColor, darkColor, title, icon, ...otherProps } = props;
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonBackground');
    const color  = useThemeColor({ light: lightColor, dark: darkColor}, 'buttonForeground');

    return <DefaultButton style={[{backgroundColor}, {shadowColor: colorScheme === 'dark' ? "#000" : "#777"}, styles.button, style]} {...otherProps}>
        {icon && <View style={styles.buttonIcon}>{icon}</View>}
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
            height: 4,
        },
        shadowOpacity: .35,
        shadowRadius: 5.49,
        elevation: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    buttonIcon: {
        marginRight: 20
    },
    buttonTitle: {
        fontWeight: '600',
        fontSize: 18
    }
})