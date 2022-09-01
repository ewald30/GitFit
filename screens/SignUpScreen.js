import { useState } from "react"
import { StyleSheet } from "react-native"
import LogoText from "../assets/logo/LogoText"
import ButtonCTA from "../themedComponents/ButtonCTA"
import Input from "../themedComponents/Input"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"
import Button from "../themedComponents/Button"
import GoogleIcon from "../assets/icons/GoogleIcon"
import Link from "../themedComponents/Link"
import { registerWithEmailAndPassword } from "../firebase"

const State = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null
}

const SignUpScreen = ({navigation}) => {
    const [state, setState] = useState(State);

    const handleSignUp = () => {
        console.log("State",state)
        console.log("asdasdasdasd")
        const user = registerWithEmailAndPassword(state.username, state.email, state.password);

    }
    

    return (
        <View style={styles.container}>
            <LogoText style={styles.logo}/>
            <View style = {styles.container.form}>
                <Input style={styles.container.form.item} placeholder="Username" value={state.username} onChangeText={username => setState({...state, username})}/>
                <Input style={styles.container.form.item} placeholder="Email" value={state.email} onChangeText={email => setState({...state, email})}/>
                <Input style={styles.container.form.item} placeholder="Password" value={state.password} onChangeText={password => setState({...state, password})}/>
                <Input style={styles.container.form.item} placeholder="Confirm Password" value={state.confirmPassword} onChangeText={confirmPassword => setState({...state, confirmPassword})}/>

                <ButtonCTA style={styles.container.form.item} title="Sign Up" onPress={() => handleSignUp()}/>

                <Button style={styles.container.form.item} title="Sign Up with Google" onPress={() => console.log("sign up google")} icon={<GoogleIcon/>}/>
            </View>
            <View style={styles.bottomText}>
                <Text style={styles.bottomText.text}>Already a member?</Text>
                <Link style={styles.bottomText.link} title="Log in now" handleOnPress={() => console.log("register noew")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginTop: -40
    },
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: "space-between",

        form: {
            height: '70%',
            width: '100%',
            alignItems: 'center',
            justifyContent: "space-around",

            item: {
                height: '10%',
            }
        }
        
    },
    bottomText:{
        flexDirection: 'row',
        width: '52%',
        justifyContent: 'space-around',
        marginBottom: 20,

        text:{
            fontWeight: "600",
            fontSize: 16
        },
        link: {
            fontWeight: "600",
            marginLeft: 40,
            fontSize: 16
        }
    },
})

export default SignUpScreen;