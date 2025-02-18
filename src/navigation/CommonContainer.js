import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from 'screens/Common';
import router from '@router';

const CommonStack = createNativeStackNavigator();

const commonStack = [
  {name: router.ORDER_DETAIL},
  {name: router.NEW},
  {name: router.RECRUITMENT},
  {name: router.ABOUT_COMPANY},
  {name: router.PRODUCT_DETAIL},
  {name: router.PAY},
  {name: router.CART},
  {name: router.INFO_USER},
  {name: router.PRODUCT_SEEN},
  {name: router.PRODUCT_SAVE},
  {name: router.PRODUCT_FAVORITE},
  {name: router.ADDRESS},
  {name: router.CUMULATIVE_POINT},
  {name: router.VOUCHER_EXCHANGE},
  {name: router.DETAIL_VOUCHER},
  {name: router.HELP},
  {name: router.CONTRACT},
  {name: router.DEBT},
  {name: router.SETTING},
  {name: router.HELPWITHEMAIL},
  {name: router.VIDEO},
  {name: router.CATALOGUE},
  {name: router.CHANGE_PASSWORD},
];

export default function CommonContainer() {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      {commonStack.map(stack => (
        <CommonStack.Screen
          key={stack.name}
          name={stack.name}
          component={common[stack.name]}
        />
      ))}
    </CommonStack.Navigator>
  );
}
