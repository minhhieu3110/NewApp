import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import router from '@router';
import {top} from 'screens/Bottom/OrderScreen/top';

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
  tabBarLabelStyle: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: 'white',
  },
  tabBarItemStyle: {width: 100},
  tabBarIndicatorContainerStyle: {
    backgroundColor: '#0060af',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  tabBarIndicatorStyle: {backgroundColor: '#FEC007', bottom: 5},
  tabBarActiveTintColor: '#fff',
  tabBarBounces: true,
};

const tabs = [
  {name: router.ALL_ORDER, label: 'Tất cả'},
  {name: router.WAIT_CONFIRM_ORDER, label: 'Chờ xác nhận'},
  {name: router.WAIT_GET_ORDER, label: 'Chờ lấy hàng'},
  {name: router.PROCESSING_ORDER, label: 'Đang giao'},
  {name: router.COMPLETE_ORDER, label: 'Đã giao'},
  {name: router.CANCEL_ORDER, label: 'Đã hủy'},
];

export default function TopTabContainer() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={top[tab.name]}
          options={{tabBarLabel: tab.label}}
        />
      ))}
    </Tab.Navigator>
  );
}
