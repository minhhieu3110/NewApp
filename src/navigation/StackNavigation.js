import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/user/login';
import Register from '../components/user/register';
import AccountNoSignIn from '../components/user/accountNoSignIn';
import Account from '../components/user/account';
import InfoAccount from '../components/user/infoAccount';
import ProductsSeen from '../components/products/productsSeen';
import ProductsFavorite from '../components/products/productsFavorite';
import ProductDetail from '../components/products/productDetail';
const Stack = createNativeStackNavigator();
import Toast from 'react-native-toast-message';
import BottomTabNavigator from './BottomTabContainer';

import {Provider} from 'react-redux';
import store from '../redux/store/index'
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Account"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="AccountNoSignIn" component={AccountNoSignIn} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="InfoAccount" component={InfoAccount} />
          <Stack.Screen name="ProductsSeen" component={ProductsSeen}/>
          <Stack.Screen name="ProductsFavorite" component={ProductsFavorite}/>
          <Stack.Screen name="ProductDetail_1" component={ProductDetail}/>
        </Stack.Navigator>
      </Provider>
      <Toast />
      {/* <BottomTabNavigator/> */}
    </NavigationContainer>
  );
}
