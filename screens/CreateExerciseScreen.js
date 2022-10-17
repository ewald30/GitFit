import { useEffect, useState } from "react"
import { ActivityIndicator, Keyboard, StyleSheet, TouchableOpacity } from "react-native"
import { auth, saveExercise } from "../firebase"
import useColorScheme from "../hooks/useColorScheme"
import ButtonAccent from "../themedComponents/ButtonAccent"
import ButtonCTA from "../themedComponents/ButtonCTA"
import Input from "../themedComponents/Input"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"

const Exercise = {
    name: "",
    notes: ""
}

const CreateExerciseScreen = ({navigation}) => {
    const [userId, setUserId] = useState(null)
    const [loading, setLoading] = useState(null)
    const colorScheme = useColorScheme();
    const [exercise, setExercise] = useState(Exercise)
    const {name, notes} = exercise;

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user){
                setUserId(user.uid);
            }
        })
    }, [])

    async function handleSaveExercise() {
        setLoading(true);
        await saveExercise(userId, name, notes);
        setLoading(false)
        setTimeout(() => { navigation.goBack(); }, 500);


        
    }

    return (
        <TouchableOpacity style={[{backgroundColor: colorScheme === 'dark' ? '#151515' : "#fff"}, styles.container]} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
            <Input placeholder="Exercise name" value={name} onChangeText={text => setExercise({...exercise, name: text})} />
            <Input
                multiline = {true}
                style={styles.notes}
                placeholder="Notes" 
                value={notes} 
                onChangeText={text => setExercise({...exercise, notes: text})} />
            <ButtonAccent style={styles.button} onPress={handleSaveExercise}>
                {loading === null && <Text style={styles.buttonTitle}>Save</Text>}
                {loading === false && <Text style={styles.buttonTitle}>Saved!</Text>}
                {loading === true && <ActivityIndicator size="small" color="#fff" />}
            </ButtonAccent>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
        justifyContent: "space-around",
    },

    notes: {
        height: 400,
        paddingTop: 15,
        paddingBottom: 15,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '6.5%',
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 5.49,
        elevation: 12,
    }, 
    buttonTitle: {
        fontWeight: '600',
        fontSize: 18,
        color: "white"
    }
})

export default CreateExerciseScreen;