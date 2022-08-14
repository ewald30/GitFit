
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CakeDetailsScreen from './screens/CakeDetailsScreen';
import CakeListScreen from './screens/CakeListScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function CakeListNavigator(){
	return (
		<Stack.Navigator>
			<Stack.Screen name="CakeList" component={CakeListScreen} options={{ headerShown: false,  }} />
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="CakeDetails" component={CakeDetailsScreen} options={{title: "Cake details", headerMode: 'screen' }} />
			</Stack.Group>
		</Stack.Navigator>
	)
}

export default function App() {
	const colorScheme = useColorScheme();

	return (
		<NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Drawer.Navigator initialRouteName="Home"  drawerType="front" and drawerPosition="right">
				<Drawer.Screen name="Home" component={HomeScreen} options={{title: "Welcome"}}/>
				<Drawer.Screen name="CakeList" component={CakeListNavigator}/>
				<Drawer.Screen name="SignIn" component={SignInScreen}/>
				<Drawer.Screen name="SignUp" component={SignUpScreen}/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

