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
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {icon, image} from '@assets';
import LinearGradient from 'react-native-linear-gradient';
import {useState, useEffect} from 'react';
import axios from 'axios';
export default function Catalogue({navigation}) {
  const [catalogue, setCatalogue] = useState([
    {
      group_id: '',
      title: '',
      short: '',
      picture: '',
    },
  ]);
  useEffect(() => {
    axios
      .get('http://rpm.demo.app24h.net:81/api/v1/catalogue_group')
      .then(res => {
        const cata = res.data.data;
        setCatalogue(
          cata.map(item => ({
            group_id: item.id,
            title: item.title,
            short: item.short,
            picture: item.picture,
          })),
        );
      }, []);
  });
  const [detailCatalogue, setDetailCatalogue] = useState([
    {item_id: '', group_id: '', title: '', picture: '', file: ''},
  ]);
  const [visibleModalCatalogue, setVisibleModalCatalogue] = useState(false);
  const getDetailCatalogue = group_id => {
    axios
      .get(
        'http://rpm.demo.app24h.net:81/api/v1/catalogue/?group_id=' + group_id,
      )
      .then(res => {
        const detailCata = res.data.data;
        setDetailCatalogue(
          detailCata.map(item => ({
            item_id: item.id,
            group_id: item.group_id,
            title: item.title,
            picture: item.picture,
            file: item.file,
          })),
        );
      }, []);
  };
  const handlerCatalogue = group_id => {
    // setVisibleModalCatalogue(!visibleModalCatalogue);
    console.log(group_id);
    // getDetailCatalogue(group_id);
  };
  console.log(detailCatalogue);

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
        <View style={{width: width - 24, top: 11, left: 12, rowGap: 12}}>
          {catalogue.map((item, index) => (
            <View key={index} style={style.itemCatalogueContainer}>
              <ImageBackground
                style={{borderRadius: 10, width: '100%', height: '100%'}}
                source={{uri: item.picture}}></ImageBackground>
            </View>
          ))}
        </View>
      </ScrollView>
      <Modal visible={visibleModalCatalogue} animationType="fade">
        <View style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              style.container,
              {backgroundColor: '#fff'},
            ]}>
            <View style={style.titleContainer}>
              <Pressable style={style.title} onPress={handlerCatalogue}>
                <Image source={icon.icon_arrow_left} />
                <Text style={style.textTitle}>Catalogue sản phẩm</Text>
              </Pressable>
            </View>
            <View style={{width: 395, top: 11, left: 12, rowGap: 20.1}}>
              {detailCatalogue.map((item, index) => (
                <View
                  style={{width: 395, height: 255.68, rowGap: 8.1}}
                  key={index}>
                  <Image
                    source={{uri: item.picture}}
                    style={{width: 395, height: 215.86}}
                  />
                  <View
                    style={{
                      height: 35,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
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
                        {item.title}
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
      </Modal>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FC',
    paddingBottom: 100,
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
    height: 24,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#fff',
  },
  itemCatalogueContainer: {
    flex: 1,
    width: width - 24,
    height: 231,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.85)',
  },
  titleItemCatalogue: {
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
