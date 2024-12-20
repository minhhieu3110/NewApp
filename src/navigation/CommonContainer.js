import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from 'screens/Common';
import router from '@router';
export default function CommonContainer() {
  const CommonStack = createNativeStackNavigator();
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name={router.ORDER_DETAIL}
        component={common[router.ORDER_DETAIL]}
      />
    </CommonStack.Navigator>
  );
}
