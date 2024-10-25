import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {icon, image} from '../../../assets/index';

export default function AddressSaved({navigation}) {
  const address = [
    {
      id: 1,
      name: 'Nguyễn Ngọc Trung',
      numberPhone: '123456789',
      address:
        'Building 59, 71 Chế Lan Viên, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh',
      default: true,
    },
    {
      id: 2,
      name: 'Nguyễn Ngọc Trung',
      numberPhone: '123456789',
      address:
        '283 Đ. Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
      default: false,
    },
    {
      id: 3,
      name: 'Nguyễn Ngọc Trung',
      numberPhone: '123456789',
      address:
        '223 Đ. Nam Kỳ Khởi Nghĩa, Phường 14, Quận 3, Thành phố Hồ Chí Minh',
      default: false,
    },
    {
      id: 4,
      name: 'Nguyễn Ngọc Trung',
      numberPhone: '123456789',
      address: '23 Đường Quốc lộ 20, Túc Trưng, Định Quán, Đồng Nai',
      default: false,
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Địa chỉ đã lưu</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 66}}>
        <ScrollView
          contentContainerStyle={style.addressSavedContainer}
          showsVerticalScrollIndicator={false}>
          <FlatList
            scrollEnabled={false}
            data={address}
            renderItem={({item}) => {
              return (
                <View style={style.itemAddressSaved}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={style.nameNumberPhone}>
                      <Text style={style.textNameNumberPhone}>{item.name}</Text>
                      <Text style={style.textNameNumberPhone}>|</Text>
                      <Text style={style.textNameNumberPhone}>
                        {item.numberPhone}
                      </Text>
                    </View>
                    <View style={{top: 1, left: 75}}>
                      <Image source={icon.icon_edit_address} />
                    </View>
                  </View>
                  <View style={style.address}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'regular',
                        lineHeight: 22,
                        color: '#212121',
                      }}>
                      {item.address}
                    </Text>
                  </View>
                  {item.default === true && (
                    <View style={{left: 12}}>
                      <Image source={icon.icon_default_address} />
                    </View>
                  )}
                </View>
              );
            }}
          />
        </ScrollView>
        <View style={style.containerBtnAddAddress}>
            <Pressable  onPress={() => navigation.navigate('Add_Address')} style={{width: 395, height: 45, left: 0, backgroundColor: '#0060af' , alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                <Text style={{fontSize: 15, fontWeight: 'medium', color: '#ffffff'}}>Thêm địa chỉ</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
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
  titleAddressSaved: {
    width: 204,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
  },
  textTitleAddressSaved: {
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
  addressSavedContainer: {
    width: 404,
    left: 12,
    top: 0,
    gap: 12,
    paddingBottom: 1500,
  },
  itemAddressSaved: {
    width: 404,
    height: 126,
    backgroundColor: '#ffffff',
    gap: 10,
    marginBottom: 12,
  },
  nameNumberPhone: {
    width: 278,
    height: 21,
    top: 11,
    left: 12,
    flexDirection: 'row',
    gap: 18,
  },
  textNameNumberPhone: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#0060AF',
  },
  address: {
    width: 381,
    height: 42,
    left: 12,
  },
  containerBtnAddAddress: {
    width: 400,
    height: 65,
    left: 6.5,
    top: 730,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
