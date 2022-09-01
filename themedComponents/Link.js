import { Text, TouchableOpacity as DefaultButton } from "react-native";
import {StyleSheet } from "react-native"
import useThemeColor from "../hooks/useThemeColor";

export default function Link(props){
    const { style, lightColor, darkColor, title, ...otherProps } = props;
    // const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonBackground');
    const color  = useThemeColor({ light: lightColor, dark: darkColor}, 'link');

    return <DefaultButton {...otherProps}>
        <Text style={[{color}, style]}>
            {title}
        </Text>
    </DefaultButton>;
}

const styles = StyleSheet.create({
    buttonTitle: {

    }
})