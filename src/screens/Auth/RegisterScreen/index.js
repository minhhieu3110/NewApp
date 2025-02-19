import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
  Dimensions,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {icon, image} from '@assets';
import actions from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import formConfig, {FORM_INPUT} from './formConfig';
import {authRoot} from 'navigation/navigationRef';
import router from '@router';
import HttpService from 'utils/api';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import {getDeviceName, getDeviceId} from 'react-native-device-info';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {FormInput} from 'components';
const Register = () => {
  const dispatch = useDispatch();
  const {control, handleSubmit} = useForm(formConfig);
  const [eye, setEye] = useState(false);
  const _onSubmit = values => {
    dispatch({
      type: actions.SIGNUP,
      body: {
        username: values.userName,
        password: values.pass,
        phone: values.phone,
        device_name: DeviceInfo.getDeviceName(),
        device_token: DeviceInfo.getDeviceId(),
      },
      onSuccess: () => {
        authRoot.navigate(router.LOGIN_SCREEN);
      },
      onFail(e) {
        Toast.show({
          type: 'error',
          text1: 'Đăng ký thất bại',
        });
      },
    });
  };
  return (
    <View style={styles.container}>
      <View style={{width: width, height: width}}>
        <Image
          source={image.img_bg}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </View>
      <LinearGradient
        style={{
          width: width,
          height: 625,
          position: 'absolute',
          bottom: 0,
        }}
        colors={[
          'rgba(255, 255, 255, 0)',
          '#0060af',
          '#0060af',
          '#0060af',
          '#0060af',
          '#0060af',
        ]}>
        <View
          style={{
            width: width - 24,
            height: 566,
            left: 12,
            backgroundColor: '#fff',
            borderRadius: 10,
            alignItems: 'center',
            top: 34,
          }}>
          <View
            style={{
              width: 230,
              height: 34,
              position: 'absolute',
              right: 12,
              top: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'semibold',
                color: '#0060af',
              }}>
              Đăng ký
            </Text>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="close" size={20} color="#000" />
            </View>
          </View>
          <View
            style={{
              width: width - 64,
              height: 161,
              top: 67,
              rowGap: 10,
            }}>
            <Controller
              control={control}
              name={FORM_INPUT.userName}
              render={({field: {onChange, value}}) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Email"
                  style={styles.input}
                />
              )}
            />
            <Controller
              control={control}
              name={FORM_INPUT.phone}
              render={({field: {onChange, value}}) => (
                <TextInput
                  value={value}
                  placeholder="Số điện thoại"
                  style={styles.input}
                  onChangeText={onChange}
                />
              )}
            />
            <View style={{flexDirection: 'row', width: width - 64}}>
              <Controller
                control={control}
                name={FORM_INPUT.pass}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!eye}
                    placeholder="Mật khẩu"
                    style={styles.input}
                  />
                )}
              />
              <Pressable
                onPress={() => setEye(!eye)}
                style={{
                  width: 20.22,
                  height: 14.83,
                  right: 10,
                  top: 15,
                  position: 'absolute',
                }}>
                <Entypo
                  name={eye ? 'eye-with-line' : 'eye'}
                  size={18}
                  color="#aaaaaa"
                />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              width: width - 65,
              height: 35,
              top: 97,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'regular',
                color: '#000',
                textAlign: 'center',
              }}>
              Bằng việc đăng ký tài khoản, bạn đã đồng ý với {'\n'}
              <Text style={{color: '#0060af'}}>
                Chính sách & Quy định chung
              </Text>{' '}
              của chúng tôi
            </Text>
          </View>
          <Pressable
            onPress={_onSubmit}
            style={{
              width: width - 65,
              height: 47,
              justifyContent: 'center',
              alignItems: 'center',
              top: 120,
              backgroundColor: '#FD6C31',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'medium', color: '#fff'}}>
              Đăng ký
            </Text>
          </Pressable>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'regular',
              color: '#0060af',
              top: 137,
            }}>
            Quên mật khẩu
          </Text>
          <View
            style={{
              width: width - 189,
              borderWidth: 1,
              borderColor: '#F3F7FC',
              top: 153,
            }}></View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'regular',
              color: '#808080',
              top: 170,
            }}>
            Hoặc đăng ký bằng tài khoản
          </Text>
          <View
            style={{
              width: width - 313.55,
              height: 47,
              flexDirection: 'row',
              top: 186,
              justifyContent: 'space-between',
            }}>
            <View style={styles.iconSocial}>
              <Image source={icon.icon_facebook} />
            </View>
            <View style={styles.iconSocial}>
              <Image source={icon.icon_google} />
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'regular',
              color: '#000',
              top: 193,
            }}>
            Bạn đã có tài khoản RPM VIETNAM?{' '}
            <Text
              onPress={() => authRoot.navigate(router.LOGIN_SCREEN)}
              style={{fontSize: 15, fontWeight: 'semibold', color: '#0060af'}}>
              Đăng nhập
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Register;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImg: {
    zIndex: 100,
  },
  input: {
    width: width - 64,
    height: 47,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderColor: '#f1f1f1',
    borderWidth: 1,
    paddingLeft: 15,
  },
  iconSocial: {
    width: 47,
    height: 47,
  },
});
