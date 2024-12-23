import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';
import {icon, image} from '@assets';
const InfoUser = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleInfoAccount}
          onPress={() => navigation.navigate('Account')}>
          <View style={style.iconTitleInfoAccount}>
            <Image
              source={icon.icon_arrow_left}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            />
          </View>
          <Text style={style.textTitleInfoAccount}>Thông tin tài khoản</Text>
        </Pressable>
      </View>
      <View style={style.avatarContainer}>
        <Image style={style.imgAvatar} source={image.img_avatar} />
        <Image style={style.changeAvatar} source={icon.icon_change_avatar} />
      </View>
      <View style={{width: width - 24, left: 12, top: 63, rowGap: 11}}>
        <View style={[style.attributeContainer]}>
          <Text style={[style.nameAttribute]}>
            Họ tên<Text style={style.sub}>*</Text>
          </Text>
          <TextInput style={style.inputContentEdit} value="Nguyễn Ngọc Trung" />
        </View>
        <View style={[style.attributeContainer]}>
          <Text style={[style.nameAttribute]}>
            Số điện thoại<Text style={style.sub}>*</Text>
          </Text>
          <TextInput style={style.inputContentEdit} value="123456789" />
        </View>
        <View style={[style.attributeContainer]}>
          <Text style={style.nameAttribute}>
            Email<Text style={style.sub}>*</Text>
          </Text>
          <TextInput
            style={style.inputContentEdit}
            value="trungnguyen123@gmail.com"
          />
        </View>
        <View style={[style.attributeContainer]}>
          <Text style={style.nameAttribute}>Ngày sinh</Text>
          <View
            style={{
              width: width - 24,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput style={style.inputContentEdit} value="22/05/1999" />
            <Image style={style.iconCalendar} source={icon.icon_calendar} />
          </View>
        </View>
        <View style={[style.attributeContainer]}>
          <Text style={style.nameAttribute}>Giới tính</Text>
          <TextInput style={style.inputContentEdit} value="Nam" />
        </View>
      </View>
      <View style={style.footerInfoAccount}>
        <Pressable style={style.btnUpdate}>
          <Text
            style={{
              width: 80,
              height: 20,
              position: 'absolute',
              left: 184,
              top: 12,
              color: '#ffffff',
              fontSize: 15,
              fontWeight: 'medium',
            }}>
            Cập nhập
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default InfoUser;
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    width: width,
    height: 109,
    backgroundColor: '#0060AF',
    left: 0,
    top: 0,
  },
  titleInfoAccount: {
    width: 188,
    height: 28,
    top: 13,
    left: 3,
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  textTitleInfoAccount: {
    width: 165,
    height: 24,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
  iconTitleInfoAccount: {
    width: 28,
    height: 28,
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
    rowGap: 10,
  },
  nameAttribute: {
    height: 21,
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
    width: width - 24,
    height: 47,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    fontSize: 15,
    fontWeight: 'regular',
    color: '#212121',
    paddingLeft: 15,
  },
  iconCalendar: {
    width: 17,
    height: 17,
    position: 'absolute',
    right: 0,
  },
  footerInfoAccount: {
    width: width,
    height: 65,
    position: 'absolute',
    top: height - 65,
    left: 0,
    backgroundColor: '#FFFFFF',
  },
  btnUpdate: {
    width: width - 24,
    height: 45,
    position: 'absolute',
    top: 10,
    left: 12,
    backgroundColor: '#0060AF',
    borderRadius: 5,
  },
});
