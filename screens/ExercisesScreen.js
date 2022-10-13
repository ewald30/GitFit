import { FlatList, StyleSheet, TouchableOpacity, useColorScheme } from "react-native"
import ButtonAccent from "../themedComponents/ButtonAccent"
import ExerciseComponent from "../themedComponents/ExerciseComponent"
import Text from "../themedComponents/Text"
import View from "../themedComponents/View"


const DATA=[
    {
        title: "Dead lift",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Squats",
        nbOfSets: 4,
        notes: "...",
    },
    {
        title: "Overhead press",
        nbOfSets: 3,
        notes: "",
    },
    {
        title: "Dips",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Biceps curl",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Biceps curl",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Overhead press",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Hammer curl with inverted grip",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Overhead press",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Biceps curl",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Overhead press",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Biceps curl",
        nbOfSets: 3,
        notes: "notes",
    },
    {
        title: "Hammer curl with normal grip",
        nbOfSets: 3,
        notes: "notes",
    },
]


const ExercisesScreen = ({navigation}) => {
    const colorScheme = useColorScheme();

    const renderItem = ({item}) => {
        return (
            <ExerciseComponent title={item.title} nbOfSets={item.nbOfSets} navigation={navigation}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
            style={styles.list} 
            contentContainerStyle={styles.listContainer} 
            data={DATA} 
            renderItem={renderItem} 
            ItemSeparatorComponent={() => <View style={[{backgroundColor: colorScheme === 'dark' ? "black" : "#ddd"}, styles.separator]} />}
            keyExtractor={item => item.id} />
            <ButtonAccent style={styles.container.button} onPress={() => console.log("ADD NEW EXERCISE")}>
                    <Text style={styles.container.button.text}>
                        +
                    </Text>
                </ButtonAccent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        height: "100%",

        button: {
            width: "20%",
            height: 75,
            borderRadius: 100,
            marginBottom:50,
            position: "absolute",
            bottom: -10,
            right: 30,

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