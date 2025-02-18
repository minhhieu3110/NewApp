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
import {icon} from '@assets';
import {root} from 'navigation/navigationRef';
const ChangePassword = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable style={style.title} onPress={() => root.goBack()}>
          <Image source={icon.icon_arrow_left} />
          <Text style={[style.textTitle, {color: '#fff'}]}>Đổi mật khẩu</Text>
        </Pressable>
      </View>
      <View style={{gap: 10, top: 14}}>
        <View style={style.itemChangePassword}>
          <View style={style.titleItem}>
            <Text style={style.textTitle}>Nhập mật khẩu hiện tại</Text>
            <Text
              onPress={() => navigation.navigate('ForgotPassword')}
              style={{
                fontSize: 14,
                fontWeight: 'semibold',
                color: '#0060af',
                right: 0,
                position: 'absolute',
              }}>
              Quên mật khẩu ?
            </Text>
          </View>
          <TextInput
            style={style.textInput}
            placeholder="Nhập mật khẩu hiện tại"
            secureTextEntry={true}
            placeholderTextColor={'#808080'}
          />
        </View>
        <View style={style.itemChangePassword}>
          <View style={style.titleItem}>
            <Text style={style.textTitle}>Mật khẩu mới</Text>
          </View>
          <TextInput
            secureTextEntry={true}
            style={style.textInput}
            placeholder="Nhập mật khẩu mới"
            placeholderTextColor={'#808080'}
          />
        </View>
        <View style={style.itemChangePassword}>
          <View style={style.titleItem}>
            <Text style={style.textTitle}>Xác nhận mật khẩu mới</Text>
          </View>
          <TextInput
            style={style.textInput}
            placeholder="Xác nhận mật khẩu mới"
            placeholderTextColor={'#808080'}
            secureTextEntry={true}
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
            Lưu
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ChangePassword;
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: '#fff',
  },
  itemChangePassword: {
    top: 0,
    left: 12,
    width: 395,
    height: 79,
    gap: 11,
  },
  titleItem: {
    width: width - 24,
    height: 21,
    flexDirection: 'row',
  },
  textTitle: {
    width: 200,
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
    color: '#212121',
    fontSize: 15,
    fontWeight: 'regular',
    justifyContent: 'center',
    paddingLeft: 15,
  },
});
