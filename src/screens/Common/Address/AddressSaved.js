import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
import {icon, image} from '@assets';
import {useState, useEffect, useMemo} from 'react';
import {addAddressModal, editAddressModal} from '.';
const AddressSaved = ({navigation, route}) => {
  const [address, setAddress] = useState([
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
  ]);
  useEffect(() => {
    if (route.params?.dataInfo) {
      setAddress([...address, route.params.dataInfo]);
    }
  }, [route.params?.dataInfo]);
  const handlerEditAddress = id => {
    const addressEdit = address.find(add => add.id === id);
    // console.log(addressEdit);
    navigation.navigate('Edit_Address', {dataEdit: addressEdit});
  };

  function handlerBack() {
    if (route.params?.flag) {
      navigation.navigate('Pay');
      console.log(route.params.flag);
    } else {
      navigation.navigate('Account');
    }
  }
  const radioButtonsData = useMemo(() => [...address]);
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable style={style.title} onPress={handlerBack}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Địa chỉ đã lưu</Text>
        </Pressable>
      </View>

      <View style={{flex: 1, top: 12}}>
        <ScrollView
          contentContainerStyle={style.addressSavedContainer}
          showsVerticalScrollIndicator={false}>
          <FlatList
            scrollEnabled={false}
            data={address}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={style.itemAddressSaved}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={style.nameNumberPhone}>
                      {/* {route.params?.flag && (
                        <Button />
                      )} */}
                      <Text style={style.textNameNumberPhone}>{item.name}</Text>
                      <Text style={style.textNameNumberPhone}>|</Text>
                      <Text style={style.textNameNumberPhone}>
                        {item.numberPhone}
                      </Text>
                    </View>
                    <Pressable
                      onPress={() => handlerEditAddress(item.id)}
                      style={{top: 1, left: 75}}>
                      <Image source={icon.icon_edit_address} />
                    </Pressable>
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
      </View>
      <View style={style.containerBtnAddAddress}>
        <Pressable
          onPress={() => navigation.navigate('Add_Address')}
          style={{
            width: width - 24,
            height: 45,
            backgroundColor: '#0060af',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'medium', color: '#ffffff'}}>
            Thêm địa chỉ
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
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
  addressSavedContainer: {
    width: 404,
    left: 12,
    top: 0,
    gap: 12,
    paddingBottom: 1500,
  },
  itemAddressSaved: {
    width: width - 24,
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
    width: width,
    height: 65,
    left: 0,
    top: height - 65,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AddressSaved;
