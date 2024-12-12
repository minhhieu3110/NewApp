import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {icon} from '../../assets/index';
import {useEffect, useState} from 'react';
export default function CategoryProducts({navigation, route}) {
  const [dataCategory, setDataCategory] = useState([
    {
      id: '',
      title: '',
      totalProducts: '', 
      representativePicture : '', 
      children: [
        {
          id: '',
          title: '',
          product: [{id: '', title: '', picture: ''}],
        },
      ],
    },
  ]);
  useEffect(() => {
    if (route.params?.data) {
      console.log(route.params.data);
      const data = route.params.data;
      setDataCategory(
        data.map(item => ({
          id: item.id,
          title: item.title,
          totalProducts: item.totalProducts,
          representativePicture: item.representativePicture,
          children: item.children.map(child => ({
            id: child.id,
            title: child.title,
            product: child.product.map(pro => ({
              id: pro.id,
              title: pro.title,
              picture: pro.picture,
            })),
          })),
        })),
      );
    }
  }, []);
  console.log(dataCategory);
  
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable style={style.title}>
          <Text style={style.textTitle}>Danh mục</Text>
        </Pressable>
      </View>
      <View style={{width: width, rowGap: 12, left: 12, top: 66}}>
        {dataCategory.map(item => (
          <Pressable onPress={() => navigation.navigate('Products')} style={style.itemCategory}>
            <View style={style.imageCategory}>
            <Image source={{uri: item.representativePicture}} style={{resizeMode: 'contain', width: '100%', height: '100%', borderRadius:5}} />
            </View>
            <View style={style.contentCategory}>
              <Text style={style.titleCategory}>{item.title}</Text>
              <Text style={style.countProducts}>Sản phẩm hiện có: {item.totalProducts}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FC',
  },
  titleContainer: {
    width: width,
    height: 54,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    width: 204,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
  },
  textTitle: {
    width: 165,
    height: 24,
    position: 'absolute',
    top: 2,
    left: 12,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
  itemCategory: {
    width: width - 24,
    height: 66,
    flexDirection: 'row',
    columnGap: 19,
    alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 8
  },
  imageCategory: {
    width: 46,
    aspectRatio: 1 / 1,
    borderRadius: 5,
    borderColor: '#4A4A4A',
    left: 10,
  },
  contentCategory: {
    height: 44,
    rowGap: 4,
  },
  titleCategory: {
    height: 21,
    fontSize: 16,
    fontWeight: 'medium',
    color: '#212121',
  },
  countProducts: {
    height: 19,
    fontSize: 14,
    fontWeight: 'regular',
    color: '#808080',
  },
});
