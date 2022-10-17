
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CakeDetailsScreen from './screens/CakeDetailsScreen';
import CakeListScreen from './screens/CakeListScreen';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import {DrawerActions} from '@react-navigation/native';
import LogWorkoutScreen from './screens/LogWorkoutScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import reducers from './redux/reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import UserProfileScreen from './screens/UserProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist';
import StatsScreen from './screens/StatsScreen';
import WorkoutPLanScreen from './screens/WorkoutPlanScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ExerciseDetailsScreen from './screens/ExerciseDetailsScreen';
import CreateExerciseScreen from './screens/CreateExerciseScreen';
import useColorScheme from './hooks/useColorScheme';

/** Redux setup */
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({
		serializableCheck: {
		  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	  }),
  })
const persistor = persistStore(store)



/** Navigation Setup */
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export function AppContentNavigator(){
	const colorScheme = useColorScheme();
	const {loggedIn, uid} = useSelector(state => state.auth)

	return (
			<Drawer.Navigator 
				initialRouteName="Home"  
				screenOptions={{
					drawerType: "front",
					drawerPosition:"right",
					headerTintColor: colorScheme === 'dark' ? "#fff" : "#555",
					headerStyle: {
					  backgroundColor: colorScheme === 'dark' ? "#151515" : "#fff"
					},
					headerLeft: false,
					headerRight: () => <DrawerToggleButton tintColor={colorScheme === 'dark' ? "#fff" : "#555"}/>,
				}}>
				{!loggedIn && <Drawer.Screen name="SignUpScreen" component={SignUpScreen} options={{title: "Sign Up"}}/>}
				{!loggedIn && <Drawer.Screen name="SignInScreen" component={SignInScreen} options={{title: "Sign In"}}/>}
				{loggedIn && <Drawer.Screen name="LogWorkoutScreen" component={LogWorkoutScreen} options={{title: "Log Workout", headerShown: true}}/>}
				{/* {loggedIn && <Drawer.Screen name="UserProfileScreen" component={UserProfileScreen} options={{title: "Profile"}}/>} */}
				{loggedIn && <Drawer.Screen name="ExercisesScreen" component={ExercisesScreen} options={{title: "Exercises", headerShown: true}}/>} 
				{loggedIn && <Drawer.Screen name="WorkoutPlanScreen" component={WorkoutPLanScreen} options={{title: "Workout Plan", headerShown: true}}/>} 
				{loggedIn && <Drawer.Screen name="StatsScreen" component={StatsScreen} options={{title: "Statistics"}}/>}
				{loggedIn && <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{title: "Settings"}}/>}


			</Drawer.Navigator>
	);
}

function AppContainer() {
	// Wrapper used in order to access color scheme
	// the implementation of useColorScheme has access to an item from redux, therefore it needs to be wrapped by a Provider
	const colorScheme = useColorScheme();

	return (
		<NavigationContainer theme={colorScheme === 'dark' ? NavigatorDarkTheme : NavigatorLightTheme}>
			<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} options={{title: "Home", headerShown: false}}/>
					<Stack.Screen name="Content" component={AppContentNavigator} options={{headerShown: false }} />
					<Stack.Screen name="ExerciseDetailsScreen" component={ExerciseDetailsScreen} options={{title: "Exercise Details"}} />
					<Stack.Group screenOptions={{ presentation: 'modal' }}>
								<Stack.Screen name="CreateExerciseScreen" component={CreateExerciseScreen} options={{title: "Create Exercise"}}/>
					</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>

	)
}

export default function App() {

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<AppContainer/>
			</PersistGate>
		</Provider>
	)
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const NavigatorLightTheme = {
	dark: false,
	colors: {
	  primary: 'rgb(255, 45, 85)',
	  background: 'rgb(242, 242, 242)',
	  card: '#fff',
	  text: 'rgb(28, 28, 30)',
	  border: '#fff',
	  notification: 'rgb(255, 69, 58)',
	},
};

const NavigatorDarkTheme = {
	dark: true,
	colors: {
	  primary: '#ff0067',
	  background: 'rgb(242, 242, 242)',
	  card: '#151515',
	  text: 'rgb(255, 255, 255)',
	  border: '#151515',
	  notification: 'rgb(255, 69, 58)',
	},
};

