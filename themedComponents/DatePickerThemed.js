import { StyleSheet } from "react-native";
import useThemeColor from "../hooks/useThemeColor";
import DateTimePicker from '@react-native-community/datetimepicker';
import View from "./View";



export default function DatePickerThemed(props){
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'datePicker');

    return (
        <DateTimePicker style={[{backgroundColor}, styles.picker, style]} {...otherProps}/>
    )

}

const styles = StyleSheet.create({
    picker: {
        height: 34,
        width: 128,
        borderRadius: 300
    }
    
})