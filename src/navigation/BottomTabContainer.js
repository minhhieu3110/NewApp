import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {icon} from '../assets/index';
import HomeStackNavigation from './HomeStackNavigation';
import AccountStackNavigation from './AccountStackNavigation';
import OrderStackNavigation from './OrderStackNavigation';
// import NotificationStackNavigation from './NotificationStackNavigation';
import Notification from '../components/notification/notification';
import ProductStackNavigation from './ProductStackNavigation';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
  switch (route.name) {
    case 'HomeScreen':
      return focused ? icon.icon_home_focus : icon.icon_home;
    case 'OrderScreen':
      return focused ? icon.icon_order_focus : icon.icon_order;
    case 'AccountScreen':
      return focused ? icon.icon_user_focus : icon.icon_user;
    case 'NotificationScreen':
      return focused ? icon.icon_notification_focus : icon.icon_notification;
    case 'ProductsScreen':
      return focused ? icon.icon_product_focus : icon.icon_product;
    default:
      return null;
  }
};

export default function BottomTabContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({route, navigation}) => {
          const currentRoute = navigation
            .getState()
            .routes.find(r => r.name === route.name);

          const isInitialRoute =
            currentRoute && currentRoute.state
              ? currentRoute.state.index === 0
              : true;

          return {
            headerShown: false,
            tabBarStyle: {
              display: isInitialRoute ? 'flex' : 'none',
              height: 65,
              paddingBottom: 8,
              paddingTop: 9,
            },
            tabBarIcon: ({focused}) => (
              <Image
                source={getTabBarIcon(route, focused)}
                style={{width: 24, height: 24}}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 'regular',
            },
            tabBarActiveTintColor: '#0060af',
            tabBarInactiveTintColor: '#808080',
          };
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeStackNavigation}
          options={{tabBarLabel: 'Trang Chủ'}}
        />
        <Tab.Screen
          name="ProductsScreen"
          component={ProductStackNavigation}
          options={{tabBarLabel: 'Sản phẩm'}}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={Notification}
          options={{tabBarLabel: 'Thông báo'}}
        />
        <Tab.Screen
          name="OrderScreen"
          component={OrderStackNavigation}
          options={{tabBarLabel: 'Đơn Hàng'}}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountStackNavigation}
          options={{tabBarLabel: 'Tài Khoản'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
