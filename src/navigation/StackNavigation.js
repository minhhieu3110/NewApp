import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import BottomTabNavigator from './BottomTabContainer';
import {Provider} from 'react-redux';
import store from '../redux/store/index'
import Login from '../components/user/login';
import Register from '../components/user/register';
import AccountNoSignIn from '../components/user/accountNoSignIn';
import Account from '../components/user/account';
import InfoAccount from '../components/user/infoAccount';
import ProductsSeen from '../components/products/productsSeen';
import ProductsFavorite from '../components/products/productsFavorite';
import ProductDetail from '../components/products/productDetail';
import ProductsSave from '../components/products/productsSave';
import AddressSaved from '../components/user/address/addressSaved';
import Add_Address from '../components/user/address/add_Address';
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
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
          <Stack.Screen name="ProductDetail" component={ProductDetail}/>
          <Stack.Screen name="ProductsSave" component={ProductsSave}/>
          <Stack.Screen name="AddressSaved" component={AddressSaved}/>
          <Stack.Screen name='Add_Address' component={Add_Address}/>
        </Stack.Navigator>
      </Provider>
      <Toast />
      {/* <BottomTabNavigator/> */}
    </NavigationContainer>
  );
}
