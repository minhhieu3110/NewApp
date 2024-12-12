import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notification from '../screens/notification/notification';
export default function NotificationStackNavigation() {
  const Tab = createNativeStackNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Notification">
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}
