import {createNativeStackNavigator} from '@react-navigation/native-stack';
import router from './router';
import {auth} from 'screens/Auth';
// import {CommonActions} from '@react-navigation/native';
const CommonStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name={router.LOGIN_SCREEN}
        component={auth[router.LOGIN_SCREEN]}
      />
      <CommonStack.Screen
        name={router.REGISTER_SCREEN}
        component={auth[router.REGISTER_SCREEN]}
      />
    </CommonStack.Navigator>
  );
};
export default Auth;
