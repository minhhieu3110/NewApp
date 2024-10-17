import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountNoSignIn from './accountNoSignIn';
import Login from './login';
import Register from './register';
const Stack = createNativeStackNavigator();
export default function User() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AccountNoSignIn"
        screenOptions={{headerShown: true}}>
        <Stack.Screen name="AccountNoSignIn" component={AccountNoSignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
