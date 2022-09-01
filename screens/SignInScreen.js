import { useState } from "react"
import {Image, StyleSheet } from "react-native"
import LogoComponent from "../assets/logo/LogoComponent"
import { registerWithEmailAndPassword, signInWithGoogle } from "../firebase"
import ButtonCTA from "../themedComponents/ButtonCTA"
import Button from "../themedComponents/Button"
import Input from "../themedComponents/Input"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"
import Link from "../themedComponents/Link"
import GoogleIcon from "../assets/icons/GoogleIcon"

const name = "Berla Ewald"
const email = "berla.ewald30@gmail.com"
const password = "1234567"

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)

    async function signInWithGoogleAsync() {
        console.log("GOOGLE")
        try {
          const result = await Google.logInAsync({
            // androidClientId: YOUR_CLIENT_ID_HERE,
            iosClientId: 719533327711-evcr9g3bckqd16immcclbqoa159vnlu0.apps.googleusercontent.com,
            scopes: ['profile', 'email'],
          });
          console.log("Result: ", result)
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
    }

    const handleSignUp = () => {
        const user = registerWithEmailAndPassword(name, email, password)
        console.log("USER DATA: ", user)
    }
    

    return (
        <View style={styles.signUpScreen}>
            <LogoComponent/>
            <View style={styles.formContainer}>
                <Input style={styles.formContainerItem} placeholder="Email" value={email}/>
                <Input style={styles.formContainerItem} placeholder="Password" value={password}/>
                <ButtonCTA style={styles.formContainerItem} title="Sign Up" handleOnPress={handleSignUp}/>
                <Button style={styles.formContainerItem} title="Sign In with Google" onPress={signInWithGoogleAsync} icon={<GoogleIcon/>}/>
            </View>
            <View style={styles.bottomText}>
                <Text style={styles.bottomText.text}>Not a member?</Text>
                <Link style={styles.bottomText.link} title="Register now" handleOnPress={() => console.log("register noew")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signUpScreen: {
        alignItems: 'center',
        justifyContent: "space-around",
        height: '100%', 
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "space-around",
        height: '40%',
    },
    formContainerItem:{
        height: '17%',

    },
    logo: {
        color: "#555555"
    },
    bottomText:{
        flexDirection: 'row',
        width: '52%',
        justifyContent: 'space-around',
        text:{
            fontWeight: "600",
            fontSize: 16
        },
        link: {
            fontWeight: "600",
            marginLeft: 30,
            fontSize: 16
        }
    },

})
export default SignInScreen;