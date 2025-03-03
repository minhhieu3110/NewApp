import AddressSaved from './AddressSaved';
import Add_Address from './AddAddress';
import Edit_Address from './EditAddress';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  Modal,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {height, width} from 'utils/responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {root} from 'navigation/navigationRef';
import {icon} from '@assets';
import {Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {accessibilityProps} from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import actions from 'redux/actions';
import {Controller, useForm} from 'react-hook-form';
import formConfig, {FORM_INPUT} from './formConfig';
export default function Address() {
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_PROVINCE, params: {type: 'province'}});
  }, [dispatch]);
  const provinces = useSelector(state => state.getProvince?.data || []);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const {control, handleSubmit} = useForm(formConfig);
  return (
    <View style={{flex: 1, backgroundColor: '#f3f7fc'}}>
      <View
        style={{
          width: width,
          height: 54,
          backgroundColor: '#0060af',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={() => root.goBack()}
          style={{
            alignItems: 'center',
            width: width - 24,
            height: 28,
            columnGap: 5,
            flexDirection: 'row',
          }}>
          <MaterialIcons name="keyboard-arrow-left" color="#fff" size={28} />
          <Text style={{fontSize: 18, fontWeight: 'medium', color: '#fff'}}>
            Địa chỉ đã lưu
          </Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 12}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{width: width - 24, rowGap: 12, left: 12}}>
          {address.map(item => (
            <View
              style={{
                width: width - 24,
                alignItems: 'center',
                borderRadius: 8,
                backgroundColor: '#fff',
                paddingBottom: 16,
              }}>
              <View style={{width: width - 40, rowGap: 10}}>
                <View
                  style={{
                    height: 35,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'semibold',
                        color: '#0060af',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'semibold',
                        color: '#0060af',
                        marginLeft: 28,
                        marginRight: 18,
                      }}>
                      |
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'semibold',
                        color: '#0060af',
                      }}>
                      {item.numberPhone}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 35,
                      aspectRatio: 1 / 1,
                      position: 'absolute',
                      right: 0,
                    }}>
                    <Image source={icon.icon_edit_address} />
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'regular',
                    color: '#000',
                  }}>
                  {item.address}
                </Text>
                {item.default === true && (
                  <View
                    style={{
                      width: width - 345,
                      height: 21,
                      backgroundColor: '#fec007',
                      borderRadius: 14,
                      justifyContent: 'center',
                      alignItems: 'center',
                      top: 4,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'regular',
                        color: '#fff',
                      }}>
                      Mặc định
                    </Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
        <Pressable
          onPress={() => setModalAdd(true)}
          style={{
            width: width,
            height: 65,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width - 24,
              height: 45,
              backgroundColor: '#0060af',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, fontWeight: 'medium', color: '#fff'}}>
              Thêm địa chỉ
            </Text>
          </View>
        </Pressable>
      </View>
      <Modal visible={modalAdd} transparent="fade">
        <SafeAreaView style={{flex: 1, backgroundColor: '#f3f7fc'}}>
          <View
            style={{
              width: width,
              height: 54,
              backgroundColor: '#0060af',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              justifyContent: 'center',
            }}>
            <Pressable
              onPress={() => setModalAdd(false)}
              style={{
                alignItems: 'center',
                width: width - 24,
                height: 28,
                columnGap: 5,
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="keyboard-arrow-left"
                color="#fff"
                size={28}
              />
              <Text style={{fontSize: 18, fontWeight: 'medium', color: '#fff'}}>
                Thêm địa chỉ
              </Text>
            </Pressable>
          </View>
          <View style={{width: width - 24, top: 16, left: 12, rowGap: 16}}>
            <View style={{rowGap: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: 'semibold', color: '#000'}}>
                Thông tin cá nhân
              </Text>
              <View
                style={{
                  width: width - 24,
                  height: 47,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#f1f1f1',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                }}>
                <Controller
                  control={control}
                  name={FORM_INPUT.name}
                  render={({field: {onChange, value}}) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      style={{marginLeft: 15, height: 47}}
                      placeholder="Họ tên"
                      placeholderTextColor="#808080"
                    />
                  )}
                />
              </View>
              <View
                style={{
                  width: width - 24,
                  height: 47,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#f1f1f1',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                }}>
                <Controller
                  control={control}
                  name={FORM_INPUT.phone}
                  render={({field: {onChange, value}}) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      style={{marginLeft: 15, height: 47}}
                      placeholder="Số điện thoại"
                      placeholderTextColor="#808080"
                    />
                  )}
                />
              </View>
            </View>
            <View style={{rowGap: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: 'semibold', color: '#000'}}>
                Địa chỉ
              </Text>
              <View style={{flexWrap: 'wrap', gap: 10, flexDirection: 'row'}}>
                <View
                  style={{
                    width: width - 24,
                    height: 47,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#f1f1f1',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{marginLeft: 15, height: 47}}
                    placeholder="Tỉnh/Thành"
                    placeholderTextColor="#212121"
                  />
                </View>
                <View
                  style={{
                    width: (width - 24) / 2 - 5,
                    height: 47,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#f1f1f1',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{marginLeft: 15, height: 47}}
                    placeholder="Quận/Huyện"
                    placeholderTextColor="#212121"
                  />
                </View>
                <View
                  style={{
                    width: (width - 24) / 2 - 5,
                    height: 47,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#f1f1f1',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{marginLeft: 15, height: 47}}
                    placeholder="Phường/Xã"
                    placeholderTextColor="#212121"
                  />
                </View>
              </View>
              <View
                style={{
                  width: width - 24,
                  height: 47,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#f1f1f1',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                }}>
                <Controller
                  control={control}
                  name={FORM_INPUT.location}
                  render={({field: {onChange, value}}) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      style={{marginLeft: 15, height: 47}}
                      placeholder="Số đường, tên đường, toà nhà ..."
                      placeholderTextColor="#808080"
                    />
                  )}
                />
              </View>
              <View
                style={{
                  top: 2,
                  flexDirection: 'row',
                  columnGap: 12,
                  alignItems: 'center',
                }}>
                <Switch
                  color="#00C707"
                  style={{
                    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Đặt làm địa chỉ mặc định
                </Text>
              </View>
            </View>
          </View>
          <Pressable
            style={{
              width: width,
              height: 65,
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: width - 24,
                height: 45,
                backgroundColor: '#0060af',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, fontWeight: 'medium', color: '#fff'}}>
                Lưu
              </Text>
            </View>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
