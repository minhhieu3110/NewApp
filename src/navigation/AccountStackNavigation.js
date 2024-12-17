import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import store from '../redux/store/index';
import Login from '../screens/user/Auth/LoginScreen';
import Register from '../screens/user/Auth/RegisterScreen';
import AccountNoSignIn from '../screens/user/accountNoSignIn';
import Account from '../screens/user/Auth/AccountProfile';
import InfoUser from '../screens/user/Auth/InfoUser';
import ProductsSeen from '../screens/productsOrder/productsSeen';
import ProductsFavorite from '../screens/productsOrder/productsFavorite';
import ProductDetail from '../screens/productsOrder/productDetail';
import ProductsSave from '../screens/productsOrder/productsSave';
import AddressSaved from '../screens/user/address/addressSaved';
import Add_Address from '../screens/user/address/add_Address';
import Edit_Address from '../screens/user/address/edit_Address';
import CenterHelp from '../screens/user/centerhelp/centerHelp';
import HelpWithEmail from '../screens/user/centerhelp/helpWithEmail';
import Contract from '../screens/contract/contracts';
import Debt from '../screens/debt/debt';
import Setting from '../screens/user/setting/setting';
import ChangePassword from '../screens/user/Auth/ChangePassword';
import ForgotPassword from '../screens/user/Auth/ForgotPassword';
import CumulativePoints from '../screens/user/cumulativePoints';
import VoucherRedeemed from '../screens/user/voucherRedeemed';
import DetailVoucher from '../screens/user/detailVoucher';
export default function AccountStackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AccountNoSignIn" component={AccountNoSignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="InfoAccount" component={InfoUser} />
        <Stack.Screen name="CumulativePoints" component={CumulativePoints} />
        <Stack.Screen name="VoucherRedeemed" component={VoucherRedeemed} />
        <Stack.Screen name="DetailVoucher" component={DetailVoucher} />
        <Stack.Screen name="ProductsSeen" component={ProductsSeen} />
        <Stack.Screen name="ProductsFavorite" component={ProductsFavorite} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="ProductsSave" component={ProductsSave} />
        <Stack.Screen name="AddressSaved" component={AddressSaved} />
        <Stack.Screen name="Add_Address" component={Add_Address} />
        <Stack.Screen name="Edit_Address" component={Edit_Address} />
        <Stack.Screen name="CenterHelp" component={CenterHelp} />
        <Stack.Screen name="HelpWithEmail" component={HelpWithEmail} />
        <Stack.Screen name="Contract" component={Contract} />
        <Stack.Screen name="Debt" component={Debt} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </Provider>
    // <Toast />
    // </NavigationContainer>
  );
}
