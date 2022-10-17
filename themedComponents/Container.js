import { SafeAreaView as DefaultView, StyleSheet } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import useThemeColor from "../hooks/useThemeColor";

export default function Container(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'container');
    return <DefaultView style={[{ backgroundColor }, {shadowColor: colorScheme === 'dark' ? "#000" : "#777"}, styles.container, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: .35,
        shadowRadius: 5.49,
        elevation: 12,

    }
})
