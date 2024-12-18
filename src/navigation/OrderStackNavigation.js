import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDetails from '../screens/order/detailOrder';
import Order from '../screens/order/order';
import EvaluateOrder from '../screens/order/evaluateOrder';
export default function OrderStackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Order"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="EvaluateOrder" component={EvaluateOrder} />
    </Stack.Navigator>
  );
}
