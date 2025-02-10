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
      <CommonStack.Screen name={router.NEW} component={common[router.NEW]} />
      <CommonStack.Screen
        name={router.RECRUITMENT}
        component={common[router.RECRUITMENT]}
      />
      <CommonStack.Screen
        name={router.ABOUT_COMPANY}
        component={common[router.ABOUT_COMPANY]}
      />
      <CommonStack.Screen
        name={router.PRODUCT_DETAIL}
        component={common[router.PRODUCT_DETAIL]}
      />
      <CommonStack.Screen name={router.PAY} component={common[router.PAY]} />
      <CommonStack.Screen name={router.CART} component={common[router.CART]} />
      <CommonStack.Screen
        name={router.INFO_USER}
        component={common[router.INFO_USER]}
      />
    </CommonStack.Navigator>
  );
}
