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
  Modal,
  TextInput,
} from 'react-native';
import {icon, image} from '@assets';
import {useState, useEffect, useMemo} from 'react';
import {commonRoot, root} from 'navigation/navigationRef';
import {Picker} from '@react-native-picker/picker';

import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'redux/actions';
const AddressSaved = () => {
  const [addAddressModal, setAddAddressModal] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.GET_PROVINCE,
      params: {
        type: 'province',
      },
    });
  }, []);
  const provinceData = useSelector(state => state.getProvince?.data || []);
  console.log('DataProvince');
  console.log(provinceData);

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
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectProvice, setSelectProvince] = useState(null);
  const [selectDistrict, setSelectDistrict] = useState(null);
  const [addDefault, setAddDefault] = useState(`${icon.icon_set_default_off}`);
  const [newInfo, setNewInfo] = useState({
    id: new Date().getTime(),
    name: '',
    numberPhone: '',
    default: false,
  });
  // const [address, setAddress] = useState({
  //   numberHouse: '',
  //   ward: '',
  //   district: '',
  //   province: '',
  // });

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await fetch(
        // 'https://provinces.open-api.vn/api/?depth=1',
        'http://rpm.demo.app24h.net:81/api/v1/location?type=province',
      );
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDistricts = async provinceCode => {
    try {
      const response = await fetch(
        // `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`,
        'http://rpm.demo.app24h.net:81/api/v1/location?type=district&code=' +
          provinceCode,
      );
      const data = await response.json();
      setDistricts(data.districts);
      setWards([]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWards = async districtCode => {
    try {
      const response = await fetch(
        // `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
        'http://rpm.demo.app24h.net:81/api/v1/location?type=ward&code=' +
          districtCode,
      );
      const data = await response.json();
      setWards(data.wards);
    } catch (error) {
      console.error(error);
    }
  };
  const handlerSetDefault = () => {
    setAddDefault(prevSetDefault =>
      prevSetDefault === `${icon.icon_set_default_off}`
        ? `${icon.icon_set_default_on}`
        : `${icon.icon_set_default_off}`,
    );
  };
  const handlerSaveAddress = () => {
    const fullAddress = `${address.numberHouse}, ${address.ward}, ${address.district}, ${address.province}`;
    const updateAddress = {
      ...newInfo,
      address: fullAddress,
      default: addDefault === `${icon.icon_set_default_off}` ? false : true,
    };
    navigation.navigate('AddressSaved', {dataInfo: updateAddress});
  };

  // useEffect(() => {
  //   if (route.params?.dataInfo) {
  //     setAddress([...address, route.params.dataInfo]);
  //   }
  // });
  // const handlerEditAddress = id => {
  //   const addressEdit = address.find(add => add.id === id);
  //   // console.log(addressEdit);
  //   navigation.navigate('Edit_Address', {dataEdit: addressEdit});
  // };

  // function handlerBack() {
  //   if (route.params?.flag) {
  //     navigation.navigate('Pay');
  //     console.log(route.params.flag);
  //   } else {
  //     navigation.navigate('Account');
  //   }
  // }
  const radioButtonsData = useMemo(() => [...address]);
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable style={style.title} onPress={() => root.goBack()}>
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
                      <Text style={style.textNameNumberPhone}>{item.name}</Text>
                      <Text style={style.textNameNumberPhone}>|</Text>
                      <Text style={style.textNameNumberPhone}>
                        {item.numberPhone}
                      </Text>
                    </View>
                    <Pressable
                      onPress={() => handlerEditAddress(item.id)}
                      style={{top: 1, position: 'absolute', right: 0}}>
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
          onPress={() => setAddAddressModal(!addAddressModal)}
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
      <Modal visible={addAddressModal}>
        <View style={style.container}>
          <View style={style.titleContainer}>
            <Pressable
              style={style.title}
              onPress={() => setAddAddressModal(!addAddressModal)}>
              <Image source={icon.icon_arrow_left} />
              <Text style={style.textTitle}>Thêm địa chỉ</Text>
            </Pressable>
          </View>
          <Text
            style={{
              width: 128,
              height: 21,
              left: 12,
              top: 11,
              fontSize: 16,
              fontWeight: 'semibold',
              color: '#212121',
            }}>
            Thông tin cá nhân
          </Text>
          <TextInput
            style={[style.textInputNameNumberPhone, {top: 42}]}
            placeholder="Họ Tên"
            placeholderTextColor={'#808080'}
            onChangeText={name => setNewInfo({...newInfo, name})}
          />
          <TextInput
            style={[style.textInputNameNumberPhone, {top: 57}]}
            placeholder="Số địện thoại"
            placeholderTextColor={'#808080'}
            keyboardType="numeric"
            onChangeText={numberPhone => setNewInfo({...newInfo, numberPhone})}
          />
          <Text
            style={{
              height: 21,
              left: 12,
              top: 67,
              fontSize: 16,
              fontWeight: 'semibold',
              color: '#212121',
            }}>
            Địa chỉ
          </Text>
          <Picker
            selectedValue={address.province}
            style={[style.textInputAddress, {width: 404, top: 77}]}
            onValueChange={(provinceName, index) => {
              setAddress({...address, province: provinceName});
              fetchDistricts(provinces[index - 1]?.code);
            }}>
            <Picker.Item
              style={style.textInputAddress}
              label="Tỉnh/Thành"
              value=""
            />
            {provinceData.map(province => (
              <Picker.Item
                key={province.code}
                label={province.title}
                value={province.title}
              />
            ))}
          </Picker>
          <View style={{top: 88, height: 60, flexDirection: 'row', gap: 12}}>
            <Picker
              selectedValue={address.district}
              style={[style.textInputAddress, {width: 197}]}
              onValueChange={(districtName, index) => {
                setAddress({...address, district: districtName});
                fetchWards(districts[index - 1]?.code);
              }}>
              <Picker.Item label="Quận/Huyện" value="" />
              {districts.map(district => (
                <Picker.Item
                  key={district.code}
                  label={district.title}
                  value={district.title}
                />
              ))}
            </Picker>
            <Picker
              selectedValue={address.ward}
              style={[style.textInputAddress, {width: 197, left: 12}]}
              onValueChange={wardName =>
                setAddress({...address, ward: wardName})
              }>
              <Picker.Item label="Phường/Xã" value="" />
              {wards.map(ward => (
                <Picker.Item
                  key={ward.code}
                  label={ward.title}
                  value={ward.title}
                />
              ))}
            </Picker>
          </View>
          <TextInput
            style={[
              style.textInputAddress,
              {width: 404, top: 98, paddingLeft: 15},
            ]}
            placeholder="Số nhà, tên đường, tòa nhà..."
            placeholderTextColor={'#808080'}
            onChangeText={numberHouse =>
              setAddress({...address, numberHouse: numberHouse})
            }
          />
          <Pressable
            onPress={handlerSetDefault}
            style={{
              width: 211,
              height: 23,
              left: 12,
              top: 110,
              flexDirection: 'row',
              gap: 12,
            }}>
            <Image source={addDefault} />
            <Text
              style={{fontSize: 14, fontWeight: 'regular', color: '#212121'}}>
              Đặt làm địa chỉ mặc định
            </Text>
          </Pressable>
          <View
            style={{
              width: width,
              height: 65,
              bottom: 0,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              onPress={handlerSaveAddress}
              style={{
                width: width - 24,
                height: 45,
                backgroundColor: '#0060af',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{color: '#ffffff', fontSize: 15, fontWeight: 'medium'}}>
                Lưu
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    width: width - 24,
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
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputNameNumberPhone: {
    width: 404,
    height: 47,
    left: 12,
    fontSize: 15,
    fontWeight: 'regular',
    color: '#212121',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
  },
  textInputAddress: {
    height: 47,
    left: 12,
    fontSize: 15,
    fontWeight: 'regular',
    color: '#212121',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
});
export default AddressSaved;
