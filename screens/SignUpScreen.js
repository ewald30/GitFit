import { Button } from "react-native"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"

const SignUpScreen = ({navigation}) => {
    return (
        <View>
            <Text>Sign in!</Text>
            <Button title="Sign up with Google" onPress={() => {
                console.log("Sign up with gogle")
            }}/>
        </View>
    )
}

export default SignUpScreen;