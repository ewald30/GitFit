import { StyleSheet } from "react-native";
import Text from "../themedComponents/Text";
import View from "../themedComponents/View";

const ExerciseDetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                TODO: Add a container with notes written by the user
            </Text>
            <Text>
                TODO: List with logged sets separated by date
            </Text>
            <Text>
                TODO: button to add a new log (LOG SET)
            </Text>
            <Text>
                Modal for new log ( weight : nbReps : logDay )
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    }
})


export default ExerciseDetailsScreen;