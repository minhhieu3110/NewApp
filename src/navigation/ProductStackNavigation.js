import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../components/products/Products';
import CategoryProducts from '../components/products/categoryProducts';
export default function ProductStackNavigation() {
  const Tab = createNativeStackNavigator();
  return (
    <Tab.Navigator
      initialRouteName=" Products"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="CategoryProducts" component={CategoryProducts} />
    </Tab.Navigator>
  );
}
