import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {icon} from '../assets/index';
import HomeStackNavigation from './HomeStackNavigation';
import AccountStackNavigation from './AccountStackNavigation';
import OrderStackNavigation from './OrderStackNavigation';

const Tab = createBottomTabNavigator();

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
            },
            tabBarIcon: ({focused}) => {
              let image;
              if (route.name === 'HomeScreen') {
                image = focused ? icon.icon_home_focus : icon.icon_home;
              }
              if (route.name === 'OrderScreen') {
                image = focused ? icon.icon_order_focus : icon.icon_order
              }
              if (route.name === 'AccountScreen') {
                image = focused ? icon.icon_user_focus : icon.icon_user;
              }
              return <Image source={image} style={{width: 24, height: 24}} />;
            },
            tabBarLabelStyle: {
              fontSize: 15,
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
          name='OrderScreen'
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
