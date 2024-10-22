import * as React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {icon, image} from '../../assets/index';
import {AnimatedScrollView} from '@kanelloc/react-native-animated-header-scroll-view'
export default function ProductDetail({navigation}) {
  return (
    <View style={style.container}>
      <StatusBar hidden={true} />
      <View style={style.headerDetailProductContainer}>
        <Image
          style={{width: 428, height: 428}}
          source={image.image_product_demo_1}
        />
        <Pressable
          style={style.goBack}
          onPress={() => navigation.navigate('ProductsFavorite')}>
          <Image source={icon.icon_arrow_left} />
        </Pressable>
        <View style={style.topRightDetailProduct}>
          <View style={style.cart}>
            <Image source={icon.icon_cart} />
          </View>
          <Text style={style.numberProducts}>99+</Text>
          <View style={style.menuThreePoint}>
            <Image source={icon.icon_menu_three_point}/>
          </View>
          <View style={style.menuContainerThreePoint}>
            <View style={[style.titleMenuThreePoint ,{top: 11}]}>
                <Image style={style.iconTitleMenuThreePoint} source={icon.icon_share}/>
                <Text style={style.textTitleMenuThreePoint}>Chia sẻ</Text>
            </View>
            <View style={[style.seperator, {top: 29}]}/>
            <View style={[style.titleMenuThreePoint ,{top: 49}]}>
                <Image style={style.iconTitleMenuThreePoint} source={icon.icon_save_product_gray}/>
                <Text style={style.textTitleMenuThreePoint}>Lưu sản phẩm</Text>
            </View>
            <View style={[style.seperator, {top: 67}]}/>
            <View style={[style.titleMenuThreePoint ,{top: 87}]}>
                <Image style={style.iconTitleMenuThreePoint} source={icon.icon_like}/>
                <Text style={style.textTitleMenuThreePoint}>Yêu thích</Text>
            </View>
          </View>
        </View>
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
  headerDetailProductContainer: {
    width: 428,
    height: 428,
    top: 0,
    left: 0,
  },
  goBack: {
    width: 28,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
    zIndex: 10,
  },
  topRightDetailProduct: {
    width: 195,
    height: 163,
    position: 'absolute',
    left: 221,
    top: 10,
    zIndex: 10,
  },
  cart: {
    width: 35,
    height: 35,
    position: 'absolute',
    // top: 10,
    left: 106,
    zIndex: 20,
  },
  numberProducts: {
    width: 26,
    height: 15,
    position: 'absolute',
    left: 128,
    top: 3,
    zIndex: 21,
    backgroundColor: '#E50000',
    borderRadius: 9,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'regular'
  },
  menuThreePoint: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 160,
    zIndex: 20,
  },
  menuContainerThreePoint: {
    width: 195,
    height: 119,
    position: 'absolute',
    top: 45,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingTop: 11,
    paddingBottom: 12,
  },
  titleMenuThreePoint: {
    width: 111,
    height: 19,
    position: 'absolute',
    left: 12,
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconTitleMenuThreePoint: {
    width: 13.91,
    height: 14.8,
    top: 2.61
  },
  textTitleMenuThreePoint: {
    left: 24,
    fontSize: 14,
    fontWeight: 'regular',
  },
  seperator: {
    width: 195,
    height: 0,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  }, 
  
});
