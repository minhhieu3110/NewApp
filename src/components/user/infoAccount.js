import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {icon, image} from '../../assets/index';
export default function InfoAccount({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleInfoAccount}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleInfoAccount}>Thông tin tài khoản</Text>
        </Pressable>
      </View>
      <View style={style.avatarContainer}>
        <Image style={style.imgAvatar} source={image.img_avatar} />
        <Image style={style.changeAvatar} source={icon.icon_change_avatar} />
      </View>
      <View style={[style.attributeContainer, {top: 173}]}>
        <Text style={[style.nameAttribute, {width: 59}]}>
          Họ tên<Text style={style.sub}>*</Text>
        </Text>
        <TextInput style={style.inputContentEdit} value="Nguyễn Ngọc Trung" />
      </View>
      <View style={[style.attributeContainer, {top: 262}]}>
        <Text style={[style.nameAttribute, {width: 104}]}>
          Số điện thoại<Text style={style.sub}>*</Text>
        </Text>
        <TextInput style={style.inputContentEdit} value="123456789" />
      </View>
      <View style={[style.attributeContainer, {top: 351}]}>
        <Text style={style.nameAttribute}>
          Email<Text style={style.sub}>*</Text>
        </Text>
        <TextInput
          style={style.inputContentEdit}
          value="trungnguyen123@gmail.com"
        />
      </View>
      <View style={[style.attributeContainer, {top: 440}]}>
        <Text style={style.nameAttribute}>Ngày sinh</Text>
        <TextInput style={style.inputContentEdit} value="22/05/1999" />
        <Image style={style.iconCalendar} source={icon.icon_calendar} />
      </View>
      <View style={[style.attributeContainer, {top: 529}]}>
        <Text style={style.nameAttribute}>Giới tính</Text>
        <TextInput style={style.inputContentEdit} value="Nam" />
      </View>
      <View style={style.footerInfoAccount}>
        <Pressable style={style.btnUpdate}>
          <Text style={{width: 80, height: 20, position: 'absolute', left: 184, top: 12, color: '#ffffff', fontSize: 15, fontWeight: 'medium'}}>Cập nhập</Text>
        </Pressable>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    width: 428,
    height: 109,
    backgroundColor: '#0060AF',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  titleInfoAccount: {
    width: 204,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
  },
  textTitleInfoAccount: {
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
  iconTitleInfoAccount: {
    width: 28,
    height: 28,
    position: 'absolute',
    top: 0,
    left: 0,
    borderWidth: 1,
    borderColor: '#707070',
  },
  avatarContainer: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: 64,
    left: 169,
  },
  imgAvatar: {
    width: 84,
    height: 84,
    position: 'absolute',
    top: 3,
    left: 3,
  },
  changeAvatar: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 65,
    left: 67,
  },
  attributeContainer: {
    width: 404,
    height: 78,
    position: 'absolute',
    left: 12,
  },
  nameAttribute: {
    height: 21,
    position: 'absolute',
    left: 12,
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
  },
  sub: {
    height: 21,
    position: 'absolute',
    left: 12,
    marginTop: -10,
    fontSize: 16,
    color: '#FF0000',
  },
  inputContentEdit: {
    width: 404,
    height: 47,
    position: 'absolute',
    left: 12,
    top: 31,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  iconCalendar: {
    width: 17,
    height: 17,
    position: 'absolute',
    left: 389,
    top: 42,
  },
  footerInfoAccount: {
    width: 428,
    height: 65,
    position: 'absolute',
    top: 800,
    left: 0,
    backgroundColor: '#FFFFFF',
  },
  btnUpdate: {
    width: 404,
    height: 45,
    position: 'absolute',
    top: 10,
    left: 12,
    backgroundColor: '#0060AF',
    borderRadius: 5,
  },
});
