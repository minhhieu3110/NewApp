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
import {useDispatch, useSelector} from 'react-redux';
import actions from 'redux/actions';
import {root} from 'navigation/navigationRef';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Catalogue() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_CATALOGUE_GROUP,
    });
  }, []);
  const catalogue = useSelector(state => state.getGroupCatalogue?.data || []);
  const handlerCatalogue = group_id => {
    dispatch({
      type: actions.GET_LIST_CATALOGUE,
      params: group_id,
    });
    setVisibleModalCatalogue(!visibleModalCatalogue);
  };
  const [detailCatalogue, setDetailCatalogue] = useState([]);
  const dataCatalogue = useSelector(
    state => state.getCatalogueList?.data || [],
  );
  console.log('datacatalogue');
  console.log(dataCatalogue);

  const [visibleModalCatalogue, setVisibleModalCatalogue] = useState(false);
  return (
    <View style={{flex: 1}}>
      <View style={style.titleContainer}>
        <Pressable style={style.title} onPress={() => root.goBack()}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Catalogue </Text>
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View
          style={{
            width: width - 24,
            top: 11,
            left: 12,
            rowGap: 12,
          }}>
          {catalogue.map(item => (
            <Pressable
              onPress={() => handlerCatalogue(item.group_id)}
              style={{
                width: width - 24,
                height: 204,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.picture}}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
              <LinearGradient
                style={{
                  width: width - 24,
                  height: 204,
                  position: 'absolute',
                  bottom: 0,
                  alignItems: 'center',
                }}
                colors={[
                  'rgba(255, 255, 255, 0.5)',
                  'rgba(0, 0, 0, 0.55)',
                  'rgba(0, 0, 0, 0.85)',
                ]}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'semibold',
                    color: '#fff',
                    textTransform: 'uppercase',
                    position: 'absolute',
                    bottom: 65,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'regular',
                    color: '#fff',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: 19,
                    width: width - 94,
                  }}>
                  {item.short}
                </Text>
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <Modal visible={visibleModalCatalogue} animationType="fade">
        <View style={style.titleContainer}>
          <Pressable
            style={style.title}
            onPress={() => setVisibleModalCatalogue(!visibleModalCatalogue)}>
            <Image source={icon.icon_arrow_left} />
            <Text style={style.textTitle}>Catalogue sản phẩm</Text>
          </Pressable>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[style.container, {backgroundColor: '#fff'}]}>
          <View
            style={{
              width: width - 24,
              top: 11,
              left: 12,
              rowGap: 12,
            }}>
            {dataCatalogue.map(item => (
              <Pressable
                style={{
                  width: width - 24,
                  height: 270,
                  borderRadius: 10,
                  rowGap: 14,
                }}>
                <Image
                  source={{uri: item.picture}}
                  style={{
                    width: width - 24,
                    height: 226.86,
                    borderRadius: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', columnGap: 12}}>
                    <Image source={icon.icon_pdf} />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'semibold',
                        color: '#000',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <Icon name="download" size={30} />
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
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
});
