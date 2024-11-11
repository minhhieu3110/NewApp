import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderDetails from "../components/order/detailOrder";
import Order from "../components/order/order";
export default function OrderStackNavigation() {
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName="Order" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Order" component={Order}/>
            <Stack.Screen name="OrderDetails" component={OrderDetails}/>
        </Stack.Navigator>
    )
}