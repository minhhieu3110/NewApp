import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/home';
import AboutCompany from '../screens/company/aboutCompany';
import Recruitment from '../screens/company/recruitment';
import Video from '../screens/company/video';
import Catalogue from '../screens/productsOrder/catalogue';
import News from '../screens/company/news';
import ProductDetail_Home from '../screens/productsOrder/productDetail_Home';
import Pay from '../screens/productsOrder/pay';
import OrderDetails from '../screens/order/detailOrder';
export default function HomeStackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailProducts" component={ProductDetail_Home} />
      <Stack.Screen name="Pay" component={Pay} />
      <Stack.Screen name="AboutCompany" component={AboutCompany} />
      <Stack.Screen name="Recruitment" component={Recruitment} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="Catalogue" component={Catalogue} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
}
