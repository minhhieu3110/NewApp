import router from '@router';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import OrderScreen from './OrderScreen';
import ProductScreen from './ProductScreen';
import ProfileScreen from './ProfileScreen';

export const bottom = {
  [router.HOME_SCREEN]: HomeScreen,
  [router.ORDER_SCREEN]: OrderScreen,
  [router.NOTIFICATION_SCREEN]: NotificationScreen,
  [router.PRODUCT_SCREEN]: ProductScreen,
  [router.PROFILE_SCREEN]: ProfileScreen,
};
