import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/home/home';
import AboutCompany from '../components/company/aboutCompany';
import Recruitment from '../components/company/recruitment';
import DetailRecuitment from '../components/company/detailRecruitment';
import Video from '../components/company/video';
import Catalogue from '../components/products/catalogue';
import CatalogueProducts from '../components/products/catalogueProducts';
import News from '../components/company/news';
import ProductDetail_Home from '../components/products/productDetail_Home';
import Evaluate from '../components/products/evaluate';
import Pay from '../components/products/pay';
export default function HomeStackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailProducts" component={ProductDetail_Home} />
      <Stack.Screen name="Evaluate" component={Evaluate} />
      <Stack.Screen name="Pay" component={Pay} />
      <Stack.Screen name="AboutCompany" component={AboutCompany} />
      <Stack.Screen name="Recruitment" component={Recruitment} />
      <Stack.Screen name="DetailRecruitment" component={DetailRecuitment} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="Catalogue" component={Catalogue} />
      <Stack.Screen name="CatalogueProduct" component={CatalogueProducts} />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
}
