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
} from 'react-native';
import {icon, image} from '../../assets/index';
import LinearGradient from 'react-native-linear-gradient';
export default function CatalogueProducts({navigation}) {
  return (
    <View style={{flex: 1}}>
<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('Catalogue')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Catalogue sản phẩm</Text>
        </Pressable>
      </View>
      <View style={{width: 395, top: 66, left: 12, rowGap: 20.1}}>
        {Array.from({length: 5}).map((_, index) => (
          <View style={{width: 395, height: 255.68, rowGap: 8.1}} key={index}>
            <Image
              source={image.image_catelogue_product}
              style={{width: 395, height: 215.86}}
            />
            <View
              style={{height: 35, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 144.22,
                  height: 24.5,
                  columnGap: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={icon.icon_pdf} />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Kixx Hydro HX
                </Text>
              </View>
              <View style={{right: 0, position: 'absolute'}}>
                <Image source={icon.icon_download} />
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FC',
    paddingBottom: 100,
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
    // width: 165,
    height: 24,
    position: 'absolute',
    top: 2,
    left: 36,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
});
