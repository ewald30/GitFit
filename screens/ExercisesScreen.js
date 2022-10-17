import { useFocusEffect } from "@react-navigation/native"
import React, { useEffect, useRef, useState } from "react"
import { Animated, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { auth, deleteExercise, getExercises } from "../firebase"
import useColorScheme from "../hooks/useColorScheme"
import ButtonAccent from "../themedComponents/ButtonAccent"
import ExerciseComponent from "../themedComponents/ExerciseComponent"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"


const ExercisesScreen = ({navigation}) => {
    const colorScheme = useColorScheme();
    const [userId, setUserId] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [refreshFlatlist, setRefreshFlatList] = useState(false);  // used to refresh FlatList after delete
    const scale = useRef(new Animated.Value(1)).current;


    useFocusEffect(
        React.useCallback(() => {
            async function fetchExercises() {
                const exercises = await getExercises(userId);
                setExercises(exercises);
    
            }
            fetchExercises()

            scale.setValue(0.5)
            Animated.spring(scale, {toValue: 1, useNativeDriver: true}).start();

        }, [userId])
    );

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user){
                setUserId(user.uid);
            }
        })
    }, [])
    
    const renderItem = ({item}) => {
        return (
            <ExerciseComponent eid={item.eid} title={item.name} notes={item.notes} navigation={navigation} handleDelete={handleDeleteExercise}/>
        )
    }

    const handleDeleteExercise = (eid) => {
        const indexOfObject = exercises.findIndex(object => {
            return object.eid === eid;
          });
        
        exercises.splice(indexOfObject, 1);
        deleteExercise(eid)
        setRefreshFlatList(!refreshFlatlist)

    }

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list} 
                contentContainerStyle={styles.listContainer} 
                data={exercises}
                extraData={refreshFlatlist}
                renderItem={renderItem} 
                ItemSeparatorComponent={() => <View style={[{backgroundColor: colorScheme === 'dark' ? "black" : "#ddd"}, styles.separator]} />}
                keyExtractor={item => item.eid} />

            <Animated.View style={[styles.container.buttonContainer, {transform: [{scale}]}]}>
                <ButtonAccent style={styles.container.button} onPress={() => navigation.navigate("CreateExerciseScreen")}>
                    <Text style={styles.container.button.text}>
                            +
                     </Text>
                </ButtonAccent>
            </Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        height: "100%",

        buttonContainer: {
            position: "absolute",
            bottom: -10,
            right: 30,
            width: "20%",

        },

        button: {
            height: 75,
            borderRadius: 100,
            marginBottom:50,

            text:{
                color: "#fff",
                fontSize: 60,
                textAlign: "center",
                fontWeight: "700",
                marginTop: -10

            }
        },
    },

    separator: {
        height: 1,
      },

    list: {
        width: "100%",
    },

    listContainer: {
    }
})

export default ExercisesScreen;