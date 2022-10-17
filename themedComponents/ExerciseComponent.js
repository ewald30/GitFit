import { StyleSheet, TouchableOpacity } from "react-native"
import Text from "./Text"
import View from "./View"
import { View as DefaultView } from "react-native"
import useThemeColor from "../hooks/useThemeColor"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { deleteExercise } from "../firebase"
import useColorScheme from "../hooks/useColorScheme"


const ExerciseComponent = (props) => {
    const { style, lightColor, darkColor, eid, title, notes, handleDelete, navigation } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const colorScheme = useColorScheme();

    const renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 100],
          outputRange: [0, 8, 0, 0],
        });
        return (
          <RectButton style={styles.deleteAction} onPress={() => {handleDelete(eid)}}>
            <Animated.Text
              style={[
                styles.deleteAction.text,
                {
                  transform: [{ translateX: trans }],
                },
              ]}>
              Delete
            </Animated.Text>
          </RectButton>
        );
    };

    function getFirstLine(text) {
    	var index = text.indexOf("\n");
        if (index === -1) index = undefined;
        return text.substring(0, index);
    }


    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity 
                activeOpacity={1} 
                onPress={() => navigation.navigate('ExerciseDetailsScreen', {eid, title, notes})}>
                <DefaultView style={[{ backgroundColor }, styles.container, style]}>
                    <Text style={styles.title}>{title}</Text>
                    {notes.length != 0 && <Text>{getFirstLine(notes)} ...</Text>}
                </DefaultView>
            </TouchableOpacity>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowRadius: 4.49, 
        width: "100%",
        marginBottom: 1,
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        // borderRadius: 15,
    },

    title: {
        fontSize: 20
    },


    deleteAction: {
        backgroundColor: "red",
        paddingRight: 5,
        paddingLeft: 35,
        alignItems: "center",
        justifyContent: "center",
        height: "99%",


        text: {
            color: "white",
            fontWeight: "bold",
        }
    }


})

export default ExerciseComponent;