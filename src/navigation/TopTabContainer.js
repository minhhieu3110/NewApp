import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllOrders from '../components/order/allOrders';
import WaitConfirmOrder from '../components/order/waitConfirmOrder';
import WaitGetOrder from '../components/order/waitGetOrder';
import ProceesingOrder from '../components/order/processingOrder';
import FinishedOrder from '../components/order/finishedOrder';
import CancelOrder from '../components/order/cancelOrder';
export default function TopTabContainer() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, fontWeight: 'semibold'},
        tabBarIndicatorContainerStyle: {
          backgroundColor: '#0060af',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        },
        tabBarIndicatorStyle: {backgroundColor: '#FEC007', bottom: 5},
        tabBarActiveTintColor: '#fff',
        // tabBarItemStyle: {width: 100},
        tabBarBounces: true,
      }}>
      <Tab.Screen
        name="AllOrders"
        component={AllOrders}
        options={{tabBarLabel: 'Tất cả'}}
      />
      <Tab.Screen
        name="WaitConfirmOrder"
        component={WaitConfirmOrder}
        flag = {1}
        options={{tabBarLabel: 'Chờ xác nhận'}}
      />
      <Tab.Screen
        name="WaitGetOrder"
        component={WaitGetOrder}
        options={{tabBarLabel: 'Chờ lấy hàng'}}
      />
      <Tab.Screen
        name="ProcessingOrder"
        component={ProceesingOrder}
        options={{tabBarLabel: 'Đang giao'}}
      />
      <Tab.Screen
        name="FinishedOrder"
        component={FinishedOrder}
        options={{tabBarLabel: 'Đã giao'}}
      />
      <Tab.Screen
        name="CancelOrder"
        component={CancelOrder}
        options={{tabBarLabel: 'Đã hủy'}}
      />
    </Tab.Navigator>
  );
}
