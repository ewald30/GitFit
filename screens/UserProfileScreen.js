import { StyleSheet } from "react-native"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"

const UserProfileScreen = ({navigation}) => {


    return (
        <View style={styles.screen}>
            <Text>
                USER PROFILE
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
    }
})

export default UserProfileScreen;