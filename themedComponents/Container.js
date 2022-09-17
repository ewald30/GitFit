import { SafeAreaView as DefaultView, StyleSheet, useColorScheme } from "react-native";
import useThemeColor from "../hooks/useThemeColor";

export default function Container(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'container');
  
    return <DefaultView style={[{ backgroundColor }, colorScheme === 'light' ? {shadowOpacity: .20} : {shadowOpacity: .35}, styles.container, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
    container: {
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 4.49, 
    }
})
