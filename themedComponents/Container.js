import { SafeAreaView as DefaultView } from "react-native";
import useThemeColor from "../hooks/useThemeColor";

export default function View(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'container');
  
    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

