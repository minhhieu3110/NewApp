import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/home/home';
import AboutCompany from '../components/company/aboutCompany';
import Recruitment from '../components/company/recruitment';
import Video from '../components/company/video';
import Catalogue from '../components/productsOrder/catalogue';
import News from '../components/company/news';
import ProductDetail_Home from '../components/productsOrder/productDetail_Home';
import Pay from '../components/productsOrder/pay';
import OrderDetails from '../components/order/detailOrder';
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
