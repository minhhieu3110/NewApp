import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import {icon, image} from '../../assets/index';
import LinearGradient from 'react-native-linear-gradient';
import {opacity} from 'react-native-reanimated/lib/typescript/Colors';
export default function Catalogue({navigation}) {
  const fakeDataCatalogue = [
    {
      id: 1,
      imageBg: `${image.image_catalogue_1}`,
      titleCatalogue: 'Cataloggue sản phẩm',
      subTitleItemCatalogue:
        'Tìm kiếm sản phẩm à thông tin sản phẩm Kixxtheo từng nhóm',
    },
    {
      id: 2,
      imageBg: `${image.image_catalogue_2}`,
      titleCatalogue: 'Thử nghiệm sản phẩm (PoP)',
      subTitleItemCatalogue:
        'Cung cấp dữ liệu chi tiết và thông tin kỹ thuật của từng sản phẩm.',
    },
    {
      id: 3,
      imageBg: `${image.image_catalogue_3}`,
      titleCatalogue: 'Brochure sản phẩm',
      subTitleItemCatalogue:
        'Bạn có thể tải về brohure à thông tin về các sản phẩm của Kixx.',
    },
    {
      id: 4,
      imageBg: `${image.image_catalogue_1}`,
      titleCatalogue: 'Cataloggue sản phẩm',
      subTitleItemCatalogue:
        'Tìm kiếm sản phẩm à thông tin sản phẩm Kixxtheo từng nhóm',
    },
    {
      id: 5,
      imageBg: `${image.image_catalogue_2}`,
      titleCatalogue: 'Thử nghiệm sản phẩm (PoP)',
      subTitleItemCatalogue:
        'Cung cấp dữ liệu chi tiết và thông tin kỹ thuật của từng sản phẩm.',
    },
    {
      id: 6,
      imageBg: `${image.image_catalogue_3}`,
      titleCatalogue: 'Brochure sản phẩm',
      subTitleItemCatalogue:
        'Bạn có thể tải về brohure à thông tin về các sản phẩm của Kixx.',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={style.titleContainer}>
          <Pressable
            style={style.title}
            onPress={() => navigation.navigate('Home')}>
            <Image source={icon.icon_arrow_left} />
            <Text style={style.textTitle}>Catalogue </Text>
          </Pressable>
        </View>
        <View style={{width: 395, top: 66, left: 12, rowGap: 12}}>
          {fakeDataCatalogue.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate('CatalogueProduct')}>
              <ImageBackground
                source={`${item.imageBg}`}
                style={{borderRadius: 10}}>
                <LinearGradient
                  colors={['#fff', '#000']}
                  style={style.itemCatalogueContainer}>
                  <Text style={style.titleItemCatalogue}>
                    {item.titleCatalogue}
                  </Text>
                  <Text style={style.subTitleItemCatalogue}>
                    {item.subTitleItemCatalogue}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FC',
    paddingBottom: 100
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
    left: 36,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
  itemCatalogueContainer: {
    width: 395,
    height: 231,
    borderWidth: 1,
    opacity: 0.85,
    borderRadius: 10,
    alignItems: 'center',
  },
  titleItemCatalogue: {
    // width: 170,
    height: 24,
    fontSize: 18,
    fontWeight: 'semibold',
    color: '#FFFFFF',
    top: 142,
    position: 'absolute',
    textTransform: 'uppercase',
  },
  subTitleItemCatalogue: {
    width: 343,
    height: 40,
    fontSize: 15,
    fontWeight: 'regular',
    lineHeight: 22,
    top: 176,
    color: '#FFFFFF',
    position: 'absolute',
    textAlign: 'center',
  },
});
