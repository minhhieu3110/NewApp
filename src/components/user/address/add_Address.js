import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import {icon, image} from '../../../assets/index';
import {useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
export default function Add_Address({navigation}) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectProvice, setSelectProvince] = useState(null);
  const [selectDistrict, setSelectDistrict] = useState(null);
  const [newInfo, setNewInfo] = useState({
    id: new Date().getTime(),
    name: '',
    numberPhone: '',
    default: '',
  });
  const [address, setAddress] = useState({
    numberHouse: '',
    ward: '',
    district: '',
    province: '',
  });

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await fetch(
        'https://provinces.open-api.vn/api/?depth=1',
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
        `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`,
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
        `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
      );
      const data = await response.json();
      setWards(data.wards);
    } catch (error) {
      console.error(error);
    }
  };
  const handlerSaveAddress = () => {
    const fullAddress = `${address.numberHouse}, ${address.ward}, ${address.district}, ${address.province}`;

    const updateAddress = {
      ...newInfo,
      address: fullAddress,
    };
    navigation.navigate('AddressSaved', {dataInfo: updateAddress});
  };
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Thêm địa chỉ</Text>
        </Pressable>
      </View>
      <Text
        style={{
          width: 128,
          height: 21,
          left: 12,
          top: 65,
          fontSize: 16,
          fontWeight: 'semibold',
          color: '#212121',
        }}>
        Thông tin cá nhân
      </Text>
      <TextInput
        style={[style.textInputNameNumberPhone, {top: 42}]}
        placeholder="Họ Tên"
        onChangeText={name => setNewInfo({...newInfo, name})}
      />
      <TextInput
        style={[style.textInputNameNumberPhone, {top: 57}]}
        placeholder="Số địện thoại"
        keyboardType="numeric"
        onChangeText={numberPhone => setNewInfo({...newInfo, numberPhone})}
      />
      <Text
        style={{
          width: 48,
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
        <Picker.Item label="Tỉnh/Thành" value="" />
        {provinces.map(province => (
          <Picker.Item
            key={province.code}
            label={province.name}
            value={province.name}
          />
        ))}
      </Picker>
      <Picker
        selectedValue={address.district}
        style={[style.textInputAddress, {width: 197, top: 88}]}
        onValueChange={(districtName, index) => {
          setAddress({...address, district: districtName});
          fetchWards(districts[index - 1]?.code);
        }}>
        <Picker.Item label="Quận/Huyện" value="" />
        {districts.map(district => (
          <Picker.Item
            key={district.code}
            label={district.name}
            value={district.name}
          />
        ))}
      </Picker>
      <Picker
        selectedValue={address.ward}
        style={[style.textInputAddress, {width: 197, top: 40, left: 219}]}
        onValueChange={wardName => setAddress({...address, ward: wardName})}>
        <Picker.Item label="Phường/Xã" value="" />
        {wards.map(ward => (
          <Picker.Item key={ward.code} label={ward.name} value={ward.name} />
        ))}
      </Picker>
      <TextInput
        style={[style.textInputAddress, {width: 404, top: 55}]}
        placeholder="Số nhà, tên đường, tòa nhà..."
        onChangeText={numberHouse => setAddress({...address, numberHouse: numberHouse})}
      />
      <View
        style={{
          width: 400,
          height: 65,
          left: 6.5,
          top: 800,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={handlerSaveAddress}
          style={{
            width: 395,
            height: 45,
            backgroundColor: '#0060af',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'medium'}}>
            Lưu
          </Text>
        </Pressable>
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
  textInputNameNumberPhone: {
    width: 404,
    height: 47,
    left: 12,
    fontSize: 15,
    fontWeight: 'regular',
    color: '#808080',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  textInputAddress: {
    height: 47,
    left: 12,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212121',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
});
