import useThemeColor from "../hooks/useThemeColor"
import { TextInput as DefaultInput, useColorScheme } from "react-native";
import {StyleSheet } from "react-native"


export default function Input(props){
    const {style, lightColor, darkColor, ...otherProps} = props 
    let colorScheme = useColorScheme();
    
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'inputBackground');
    const color = useThemeColor({ light: lightColor, dark: darkColor}, 'inputForeground');
     const placeholder = useThemeColor({ light: lightColor, dark: darkColor }, 'inputPlaceholder');
    const color2 = useThemeColor({ light: lightColor, dark: darkColor });

    return <DefaultInput placeholderTextColor={placeholder} style={[{backgroundColor}, {shadowColor: colorScheme === 'dark' ? "#000" : "#777"} ,{color}, styles.input, style]} {...otherProps}/>

}

const styles = StyleSheet.create({
    input: {
        width: '70%',
        height: '6.5%',
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: .35,
        shadowRadius: 5.49,
        elevation: 12,
        fontWeight: '600',
        fontSize: 14,
        paddingLeft: 15
    }
})