import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {icon, image} from '../../assets/index';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function ProductsSave({navigation, route}) {
    const getData = route.params;        
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleProductsSeen}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleProductsSeen}>Sản phẩm mua sau</Text>
        </Pressable>
      </View>
      <View style={style.seenContainer}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <Pressable onPress={()=> navigation.navigate('ProductDetail', {data: getData.routeName})} style={style.itemSeenContainer}>
            <View style={style.imgItemSeen}>
              <View style={style.percentDiscounts}>
                <Text style={style.textPercentDiscount}>-15%</Text>
              </View>
              <Image style={style.discountTicket} source={icon.icon_discount} />
              <Image source={image.image_product_demo_1} />
            </View>
            <View style={style.contentItemSeen}>
              <Text style={style.titleItemSeen}>
                Kixx HYBRID - Dầu động cơ cao cấp
              </Text>
              <View style={style.priceItemSeen}>
                <Text style={style.salePrice}>143.000đ</Text>
                <Text style={style.originalPrice}>223.000đ</Text>
              </View>
              <View style={style.footerContentItemSeen}>
                <Text style={style.numberRate}>4.1</Text>
                <Image style={style.rateStar} source={icon.icon_rate_star} />
                <Text style={style.numberPersonSeen}>(249)</Text>
              </View>
            </View>
          </Pressable>
          
          <View style={style.itemSeenContainer}>
            <View style={style.imgItemSeen}>
              <Image source={image.image_product_demo_2} />
            </View>
            <View style={style.contentItemSeen}>
              <Text style={style.titleItemSeen}>
                Kixx HYBRID - Dầu động cơ cao cấp
              </Text>
              <View style={style.priceItemSeen}>
                <Text style={style.salePrice}>143.000đ</Text>
                <Text style={style.originalPrice}></Text>
              </View>
              <View style={style.footerContentItemSeen}>
                <Text style={style.numberRate}>4.1</Text>
                <Image style={style.rateStar} source={icon.icon_rate_star} />
                <Text style={style.numberPersonSeen}>(249)</Text>
              </View>
            </View>
          </View>
          <View style={style.itemSeenContainer}>
            <View style={style.imgItemSeen}>
              <Image source={image.image_product_demo_2} />
            </View>
            <View style={style.contentItemSeen}>
              <Text style={style.titleItemSeen}>
                Kixx HYBRID - Dầu động cơ cao cấp
              </Text>
              <View style={style.priceItemSeen}>
                <Text style={style.salePrice}>143.000đ</Text>
                <Text style={style.originalPrice}></Text>
              </View>
              <View style={style.footerContentItemSeen}>
                <Text style={style.numberRate}>4.1</Text>
                <Image style={style.rateStar} source={icon.icon_rate_star} />
                <Text style={style.numberPersonSeen}>(249)</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F7FC',
  },
  titleContainer: {
    width: 428,
    height: 54,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleProductsSeen: {
    width: 204,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
  },
  textTitleProductsSeen: {
    width: 165,
    height: 24,
    position: 'absolute',
    top: 2,
    left: 36,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
  seenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 404,
    top: 66,
    paddingBottom: 150
  },
  itemSeenContainer: {
    width: 404,
    height: 159.26,
    position: 'relative',
    top: 0,
    left: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
  },
  imgItemSeen: {
    width: 141,
    height: 143.26,
    position: 'absolute',
    left: 8,
    top: 8,
    marginLeft: 12,
  },
  contentItemSeen: {
    width: 220.45,
    height: 123.26,
    position: 'absolute',
    left: 171.55,
    top: 18,
  },
  titleItemSeen: {
    width: 219,
    height: 43,
    left: 1.45,
    top: 0,
    fontSize: 16,
    fontWeight: 'semibold',
    lineHeight: 22,
    fontFamily: 'Be Vietnam Pro',
  },
  priceItemSeen: {
    width: 70,
    height: 40,
    top: 8,
    left: 1.45,
  },
  salePrice: {
    height: 20,
    color: '#0060AF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#808080',
    fontSize: 12,
    fontWeight: 'regular',
    fontFamily: 'Be Vietnam Pro',
  },
  footerContentItemSeen: {
    width: 68,
    height: 16,
    left: 0,
    top: 16.26,
    flexDirection: 'row',
  },
  numberRate: {
    width: 16,
    height: 15,
    left: 0,
    top: 0,
    color: '#FD6C31',
    fontWeight: 'bold',
    fontSize: 11,
    fontFamily: 'Be Vietnam Pro',
  },
  rateStar: {
    width: 10.35,
    height: 9.92,
    left: 6.43,
    top: 2.78,
  },
  numberPersonSeen: {
    width: 30,
    height: 16,
    left: 9.23,
    fontSize: 12,
    fontWeight: 'regular',
  },
  discountTicket: {
    position: 'absolute',
    top: 110.95,
    zIndex: 10,
  },
  percentDiscounts: {
    width: 41,
    height: 22,
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#FF0000',
    zIndex: 10,
  },
  textPercentDiscount: {
    textAlign: 'center',
    color: '#ffffff',
  },
});
