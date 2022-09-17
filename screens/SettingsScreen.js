import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux"
import { handleSignOut } from "../firebase";
import { logOut, setLoggedIn } from "../redux/actions/auth";
import ButtonCTA from "../themedComponents/ButtonCTA"
import View from "../themedComponents/View"

const SettingsScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const signOut = async() => {
        await handleSignOut();
        dispatch(setLoggedIn(false));
        navigation.replace("Home");
    }

    return (
        <View style={styles.screen}>
            <ButtonCTA title="Sign Out" onPress={signOut}/>          
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    }
})

export default SettingsScreen;