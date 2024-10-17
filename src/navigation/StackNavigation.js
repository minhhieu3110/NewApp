import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../components/user/login";
import Register from '../components/user/register';
import AccountNoSignIn from "../components/user/accountNoSignIn";
const Stack = createNativeStackNavigator();
import Toast from "react-native-toast-message";
import BottomTabNavigator from "./BottomTabContainer";
export default function StackNavigation() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="AccountNoSignIn" screenOptions={{headerShown: true}}>
        <Stack.Screen name="AccountNoSignIn" component={AccountNoSignIn}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator> */}
      <Toast/>
      <BottomTabNavigator/>
      
    </NavigationContainer>
  );
}
