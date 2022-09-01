import { Button, StyleSheet } from "react-native"
import LogoComponent from "../assets/logo/LogoComponent"
import ButtonCTA from "../themedComponents/ButtonCTA"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"

const HomeScreen = ({navigation}) => {
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