import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {auth} from '../screens/user/Auth';
import router from './router';
import {CommonActions} from '@react-navigation/native';
const CommonStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <CommonStack.Navigator screenOptions={{header: false}}>
      <CommonStack.Screen
        name={router.LOGIN_SCREEN}
        component={auth[router.LOGIN_SCREEN]}
      />
      <CommonStack.Screen
        name={router.REGISTER_SCREEN}
        component={auth[router.REGISTER_SCREEN]}
      />
      <CommonStack.Screen
        name={router.CHANGE_PASSWORD}
        component={auth[router.CHANGE_PASSWORD]}
      />
      <CommonStack.Screen
        name={router.FORGOT_PASSWORD}
        component={auth[router.FORGOT_PASSWORD]}
      />
      <CommonStack.Screen
        name={router.ACCOUNT_PROFILE_SCREEN}
        component={auth[router.ACCOUNT_PROFILE_SCREEN]}
      />
      <CommonStack.Screen
        name={router.INFO_USER}
        component={auth[router.INFO_USER]}
      />
    </CommonStack.Navigator>
  );
};
export default Auth;
