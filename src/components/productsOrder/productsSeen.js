import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {icon, image} from '../../assets/index';

export default function ProductsSeen({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Sản phẩm đã xem</Text>
        </Pressable>
      </View>
      <View style={style.seenContainer}>
        <ScrollView
          contentContainerStyle={{
            width: width - 24,
            paddingBottom: 150,rowGap: 12
          }}>
          {Array.from({length: 20}).map((_,index)=>(
            <View style={style.itemContainer} key={index}>
            <View style={style.imgItem}>
              <View style={style.percentDiscounts}>
                <Text style={style.textPercentDiscount}>-15%</Text>
              </View>
              <Image style={style.discountTicket} source={icon.icon_discount} />
              <Image source={image.image_product_demo_1} />
            </View>
            <View style={style.contentItem}>
              <Text style={style.titleItem}>
                Kixx HYBRID - Dầu động cơ cao cấp
              </Text>
              <View style={style.priceItem}>
                <Text style={style.salePrice}>143.000đ</Text>
                <Text style={style.originalPrice}>223.000đ</Text>
              </View>
              <View style={style.footerContentItem}>
                <Text style={style.numberRate}>4.1</Text>
                <Image style={style.rateStar} source={icon.icon_rate_star} />
                <Text style={style.numberPerson}>(249)</Text>
              </View>
            </View>
          </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F7FC',
  },
  titleContainer: {
    width: width,
    height: 54,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    width: 204,
    height: 28,
    top: 13,
    left: 3,
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  textTitle: {
    width: 165,
    height: 24,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
  seenContainer: {
    flex: 1,
    top: 12,
  },
  itemContainer: {
    width: width-24,
    height: 159.26,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center', columnGap: 12
  },
  imgItem: {
    width: 141,
    height: 143.26,
    left: 8
    // marginLeft: 12,
  },
  contentItem: {
    width: 220.45,
    height: 123.26,
  },
  titleItem: {
    width: 219,
    height: 43,
    left: 1.45,
    top: 0,
    fontSize: 16,
    fontWeight: 'semibold',
    lineHeight: 22,
    fontFamily: 'Be Vietnam Pro',
    color: '#212121'
  },
  priceItem: {
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
  footerContentItem: {
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
  numberPerson: {
    width: 30,
    height: 16,
    left: 9.23,
    fontSize: 12,
    fontWeight: 'regular',
    color: '#aaa'
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
