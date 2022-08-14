import { Button } from "react-native"
import { registerWithEmailAndPassword, signInWithGoogle } from "../firebase"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"

const name = "Berla Ewald"
const email = "berla.ewald30@gmail.com"
const password = "1234567"

const SignUpScreen = ({navigation}) => {

    const handleSignUp = () => {
        registerWithEmailAndPassword(name, email, password)
    }
    

    return (
        <View>
            <Text>Sign in!</Text>
            <Button title="Sign up" onPress={handleSignUp}/>
            <Button title="Sign up Google" onPress={signInWithGoogle}/>
        </View>
    )
}

export default SignUpScreen;