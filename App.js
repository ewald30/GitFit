
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CakeDetailsScreen from './screens/CakeDetailsScreen';
import CakeListScreen from './screens/CakeListScreen';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import {DrawerActions} from '@react-navigation/native';
import LogWorkoutScreen from './screens/LogWorkoutScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function AppContentNavigator(){
	const colorScheme = useColorScheme();

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
				<Drawer.Screen name="SignUpScreen" component={SignUpScreen} options={{title: "Sign Up"}}/>
				<Drawer.Screen name="SignInScreen" component={SignInScreen} options={{title: "Sign In"}}/>
				<Drawer.Screen name="LogWorkoutScreen" component={LogWorkoutScreen} options={{title: "Log Workout"}}/>
			</Drawer.Navigator>
	);
}

export default function App() {
	const colorScheme = useColorScheme();
	return (
		<NavigationContainer theme={colorScheme === 'dark' ? NavigatorDarkTheme : NavigatorLightTheme}>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} options={{title: "Home", headerShown: false}}/>
				<Stack.Screen name="Content" component={AppContentNavigator} options={{headerShown: false }} />
				{/* <Stack.Screen name="CakeDetails" component={CakeDetailsScreen} options={{title: "Cake details", headerMode: 'screen' }} /> */}
			</Stack.Navigator>
		</NavigationContainer>

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

