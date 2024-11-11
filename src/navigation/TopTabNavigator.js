import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllOrders from '../components/order/allOrders';
import WaitConfirmOrder from '../components/order/waitConfirmOrder';


export default function TopTabNavigator() {
    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllOrders" component={AllOrders} />
      <Tab.Screen name="WaitConfirmOrder" component={WaitConfirmOrder} />
    </Tab.Navigator>
  );
}