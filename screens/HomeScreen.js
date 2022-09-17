import { useEffect } from "react"
import { Button, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import LogoComponent from "../assets/logo/LogoComponent"
import { auth } from "../firebase"
import { setLoggedIn } from "../redux/actions/auth"
import ButtonCTA from "../themedComponents/ButtonCTA"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.auth.loggedIn);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                dispatch(setLoggedIn(true));
            }
        })
        return unsubscribe;
    }, [])


    return (
        <View style={styles.homeScreen}>
            <View style={styles.logo}>
                <LogoComponent/>
            </View>
            <ButtonCTA style={styles.button} title="Start now!" onPress={() => navigation.navigate('Content', { screen: 'SignInScreen' })}/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', 
    },
    logo: {
        marginTop: -50
    },
    button: {
        marginTop: 30
    }
})

export default HomeScreen