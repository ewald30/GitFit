import { useColorScheme } from 'react-native';
import Colors from '../constants/Colors';

export default function useThemeColor(props, colorName) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];
    console.log(theme, "\n")
    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}