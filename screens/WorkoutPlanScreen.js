import { ImageBackground, StyleSheet, useColorScheme } from "react-native"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"

import blob_light from "../assets/illustrations/blob_light.png";
import blob_dark from "../assets/illustrations/blob_dark.png";

const WorkoutPLanScreen = ({navigation}) => {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={colorScheme === 'dark' ? blob_dark : blob_light}>
                <Text style={styles.text}>Salut</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },

    backgroundImage: {
        height: '105%',
        width: '100%',
    },
})

export default WorkoutPLanScreen;