import * as React from "react"
import { useColorScheme } from "react-native"
import useThemeColor from "../../hooks/useThemeColor";
import Svg, { Path } from "react-native-svg"

const GoogleIcon = (props) => {
  const { style, lightColor, darkColor, title, ...otherProps } = props;

  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'logo');


  return (<Svg
    width={24}
    height={24}
    fill={backgroundColor}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12Z"
      fill={backgroundColor}
    />
  </Svg>)
}

export default GoogleIcon
