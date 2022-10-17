import * as React from "react"
import { StyleSheet } from "react-native"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import useColorScheme from "../../hooks/useColorScheme";
import useThemeColor from "../../hooks/useThemeColor";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const LogoText = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'logo');

  return( <Svg
    width={168}
    height={168}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={[{shadowColor: colorScheme === 'dark' ? "#111" : "rgba(226, 84, 110, 0.8)"}, styles.svg]}
  >
    <G clipPath="url(#a)" filter="url(#b)">
      <Path
        d="M32.617 115.271h-9.903v-6.291h-8.81v39.94h8.81v-20h-4.116v-9.139h14.02v31.75c0 1.583-.558 2.987-1.673 4.214-1.157 1.226-2.615 1.978-4.373 2.255H10.045c-1.758-.277-3.194-1.029-4.309-2.255C4.58 154.518 4 153.114 4 151.531v-45.103c0-1.622.579-3.066 1.736-4.332 1.115-1.227 2.551-1.979 4.309-2.255h16.527c1.758.276 3.216 1.028 4.373 2.255 1.115 1.266 1.672 2.71 1.672 4.332v8.843ZM48.373 158h-9.904V99.84h9.904V158Zm34.148-58.16v9.14h-8.939V158h-9.903V108.98H54.16v-9.14h28.36Zm15.755 0h15.82v9.14h-15.82v10.86h12.605v9.14H98.276V158h-9.903V99.841h9.903ZM129.852 158h-9.903V99.84h9.903V158ZM164 99.84v9.14h-8.939V158h-9.903V108.98h-9.518v-9.14H164Z"
        fill={backgroundColor}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(4)" d="M0 0h160v158H0z" />
      </ClipPath>
    </Defs>
  </Svg>)
}

const styles=StyleSheet.create({
  svg: {
    marginTop: -60,
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4.49,
    elevation: 12,
  }
})

export default LogoText
