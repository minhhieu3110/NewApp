import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {icon} from '../assets/index';
import router from '@router';
import {bottom} from 'screens/Bottom';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
  switch (route.name) {
    case router.HOME_SCREEN:
      return focused ? icon.icon_home_focus : icon.icon_home;
    case router.PRODUCT_SCREEN:
      return focused ? icon.icon_product_focus : icon.icon_product;
    case router.NOTIFICATION_SCREEN:
      return focused ? icon.icon_notification_focus : icon.icon_notification;
    case router.ORDER_SCREEN:
      return focused ? icon.icon_order_focus : icon.icon_order;
    case router.PROFILE_SCREEN:
      return focused ? icon.icon_user_focus : icon.icon_user;
    default:
      return null;
  }
};

export default function BottomTabContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={router.HOME_SCREEN}
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
          name={router.HOME_SCREEN}
          component={bottom[router.HOME_SCREEN]}
          options={{tabBarLabel: 'Trang Chủ'}}
        />
        <Tab.Screen
          name={router.PRODUCT_SCREEN}
          component={bottom[router.PRODUCT_SCREEN]}
          options={{tabBarLabel: 'Sản phẩm'}}
        />
        <Tab.Screen
          name={router.NOTIFICATION_SCREEN}
          component={bottom[router.NOTIFICATION_SCREEN]}
          options={{tabBarLabel: 'Thông báo'}}
        />
        <Tab.Screen
          name={router.ORDER_SCREEN}
          component={bottom[router.ORDER_SCREEN]}
          options={{tabBarLabel: 'Đơn Hàng'}}
        />
        <Tab.Screen
          name={router.PROFILE_SCREEN}
          component={bottom[router.PROFILE_SCREEN]}
          options={{tabBarLabel: 'Tài Khoản'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
