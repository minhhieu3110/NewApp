import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import AllOrders from '../screens/order/allOrders';
// import WaitConfirmOrder from '../screens/order/waitConfirmOrder';
// import WaitGetOrder from '../screens/order/waitGetOrder';
// import ProceesingOrder from '../screens/order/processingOrder';
// import FinishedOrder from '../screens/order/finishedOrder';
// import CancelOrder from '../screens/order/cancelOrder';
import router from '@router';
import {top} from 'screens/Bottom/OrderScreen/top';
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
        tabBarBounces: true,
      }}>
      <Tab.Screen
        name={router.ALL_ORDER}
        component={top[router.ALL_ORDER]}
        options={{tabBarLabel: 'Tất cả'}}
      />
      <Tab.Screen
        name={router.WAIT_CONFIRM_ORDER}
        component={top[router.WAIT_CONFIRM_ORDER]}
        flag={1}
        options={{tabBarLabel: 'Chờ xác nhận'}}
      />
      <Tab.Screen
        name={router.WAIT_GET_ORDER}
        component={top[router.WAIT_GET_ORDER]}
        options={{tabBarLabel: 'Chờ lấy hàng'}}
      />
      <Tab.Screen
        name={router.PROCESSING_ORDER}
        component={top[router.PROCESSING_ORDER]}
        options={{tabBarLabel: 'Đang giao'}}
      />
      <Tab.Screen
        name={router.COMPLETE_ORDER}
        component={top[router.COMPLETE_ORDER]}
        options={{tabBarLabel: 'Đã giao'}}
      />
      <Tab.Screen
        name={router.CANCEL_ORDER}
        component={top[router.CANCEL_ORDER]}
        options={{tabBarLabel: 'Đã hủy'}}
      />
    </Tab.Navigator>
  );
}
