import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Dimensions,
} from 'react-native';
import {icon} from '../../../../assets/index';
const ForgotPassword = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Đổi mật khẩu</Text>
        </Pressable>
      </View>
      <View style={{gap: 10}}>
        <View style={style.itemChangePassword}>
          <View style={style.titleItem}>
            <Text style={style.textTitle}>
              Nhập Email đã đăng ký để lấy lại mật khẩu
            </Text>
          </View>
          <TextInput
            style={style.textInput}
            placeholder="Email"
            placeholderTextColor={'#808080'}
          />
        </View>
      </View>
      <View
        style={{
          width: width,
          height: 65,
          top: height - 65,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          //   onPress={handlerSaveAddress}
          style={{
            width: width - 24,
            height: 45,
            backgroundColor: '#0060af',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'medium'}}>
            Tiếp tục
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ForgotPassword;
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  itemChangePassword: {
    top: 67,
    left: 12,
    width: 395,
    height: 79,
    gap: 11,
    // flexDirection: 'column'
  },
  titleItem: {
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
  },
  textInput: {
    width: 395,
    height: 47,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    color: '#212121',
    fontSize: 15,
    fontWeight: 'regular',
    justifyContent: 'center',
  },
});
