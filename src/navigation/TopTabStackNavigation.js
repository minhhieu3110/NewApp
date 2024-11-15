import  {createNativeStackNavigator} from '@react-navigation/native-stack'
import TopTabContainer from './TopTabContainer';
import WaitConfirmOrder from '../components/order/waitConfirmOrder';
export default function TopTabStackNavigation({navigation}) {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="TopTabContainer"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TopTabContainer" component={TopTabContainer} />
      </Stack.Navigator>
    );
}