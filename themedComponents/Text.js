import { Text as DefaultText } from "react-native";
import useThemeColor from "../hooks/useThemeColor";


export default function Text(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  }