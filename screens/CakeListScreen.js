import { Text, View } from "react-native"
import { Button } from "react-native"

const CakeListScreen = ({navigation}) => {
    return (
        <View>
            <Button onPress={() => {navigation.navigate("CakeDetails")}} title={"View cake"}/>
        </View>
    )
}


export default CakeListScreen;