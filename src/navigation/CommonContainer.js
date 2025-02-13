import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from 'screens/Common';
import router from '@router';
export default function CommonContainer() {
  const CommonStack = createNativeStackNavigator();
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name={router.ORDER_DETAIL}
        component={common[router.ORDER_DETAIL]}
      />
      <CommonStack.Screen name={router.NEW} component={common[router.NEW]} />
      <CommonStack.Screen
        name={router.RECRUITMENT}
        component={common[router.RECRUITMENT]}
      />
      <CommonStack.Screen
        name={router.ABOUT_COMPANY}
        component={common[router.ABOUT_COMPANY]}
      />
      <CommonStack.Screen
        name={router.PRODUCT_DETAIL}
        component={common[router.PRODUCT_DETAIL]}
      />
      <CommonStack.Screen name={router.PAY} component={common[router.PAY]} />
      <CommonStack.Screen name={router.CART} component={common[router.CART]} />
      <CommonStack.Screen
        name={router.INFO_USER}
        component={common[router.INFO_USER]}
      />
      <CommonStack.Screen
        name={router.PRODUCT_SEEN}
        component={common[router.PRODUCT_SEEN]}
      />
      <CommonStack.Screen
        name={router.PRODUCT_FAVORITE}
        component={common[router.PRODUCT_FAVORITE]}
      />
      <CommonStack.Screen
        name={router.PRODUCT_SAVE}
        component={common[router.PRODUCT_SAVE]}
      />
      <CommonStack.Screen
        name={router.ADDRESS}
        component={common[router.ADDRESS]}
      />
      <CommonStack.Screen
        name={router.CUMULATIVE_POINT}
        component={common[router.CUMULATIVE_POINT]}
      />
      <CommonStack.Screen
        name={router.VOUCHER_EXCHANGE}
        component={common[router.VOUCHER_EXCHANGE]}
      />
      <CommonStack.Screen
        name={router.DETAIL_VOUCHER}
        component={common[router.DETAIL_VOUCHER]}
      />
      <CommonStack.Screen name={router.HELP} component={common[router.HELP]} />
      <CommonStack.Screen
        name={router.CONTRACT}
        component={common[router.CONTRACT]}
      />
      <CommonStack.Screen name={router.DEBT} component={common[router.DEBT]} />
      <CommonStack.Screen
        name={router.SETTING}
        component={common[router.SETTING]}
      />
      <CommonStack.Screen
        name={router.HELPWITHEMAIL}
        component={common[router.HELPWITHEMAIL]}
      />
      <CommonStack.Screen
        name={router.VIDEO}
        component={common[router.VIDEO]}
      />
      <CommonStack.Screen
        name={router.CATALOGUE}
        component={common[router.CATALOGUE]}
      />
    </CommonStack.Navigator>
  );
}
