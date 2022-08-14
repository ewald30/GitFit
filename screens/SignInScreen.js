import { Button } from "react-native"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"

const SignInScreen = ({navigation}) => {
    return (
        <View>
            <Text>Sign in!</Text>
            <Button title="Sign in with Google" onPress={() => {
                console.log("Sign in with gogle")
            }}/>
            
        </View>
    )
}

export default SignInScreen;