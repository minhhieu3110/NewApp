import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {icon} from '../../../assets/index';
export default function HelpWithEmail({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('CenterHelp')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Hỗ trợ qua Email</Text>
        </Pressable>
      </View>
      <View style={{width: 404, height: 86, left: 12, top: 69}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'regular',
            color: '#212121',
            lineHeight: 22,
          }}>
          Cảm ơn Quý khách hàng đã quan tâm đến chúng tôi. Để biết thêm thông
          tin chi tiết, Quý khách hàng vui lòng liên hệ trực tiếp với chúng tôi
          hoặc để lại thông tin liên hệ theo mẫu bên dưới. Chúng tôi sẽ phản hồi
          trong thời gian sớm nhất
        </Text>
      </View>
      <View style={{width: 404, height: 500, left: 12, top: 101, gap: 11}}>
        <View style={style.userInfo}>
          <View>
            <Text style={style.nameAttribute}>
              Họ Tên<Text style={style.sub}>*</Text>
            </Text>
          </View>
          <View style={style.valueAttribute}>
            <TextInput style={style.inputUserInfo}>Nguyễn Ngọc Trung</TextInput>
          </View>
        </View>
        <View style={style.userInfo}>
          <View>
            <Text style={style.nameAttribute}>
              Số Điện Thoại<Text style={style.sub}>*</Text>
            </Text>
          </View>
          <View style={style.valueAttribute}>
            <TextInput style={style.inputUserInfo}>012456789</TextInput>
          </View>
        </View>
        <View style={style.userInfo}>
          <View>
            <Text style={style.nameAttribute}>
              Email<Text style={style.sub}>*</Text>
            </Text>
          </View>
          <View style={style.valueAttribute}>
            <TextInput style={style.inputUserInfo}>
              TrungNguyen123@gmail.com
            </TextInput>
          </View>
        </View>
        <View style={{width: 404, height: 101, backgroundColor: '#ffffff'}}>
          <View>
            <Text style={style.nameAttribute}>
              Nội dung<Text style={style.sub}>*</Text>
            </Text>
          </View>
          <View style={style.valueAttribute}>
            <TextInput
              placeholder="Nhập nội dung"
              style={{
                left: 15,
                fontSize: 15,
                height: 70,
                borderColor: '#F3F7FC',
                fontWeight: 'regular',
                color: '#212121',
              }}></TextInput>
          </View>
        </View>
        <View
          style={{
            width: 400,
            height: 65,
            left: -6.5,
            top: 610,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Pressable
            style={{
              width: 395,
              height: 45,
              backgroundColor: '#0060af',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{color: '#ffffff', fontSize: 15, fontWeight: 'medium'}}>
              Gửi
            </Text>
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
  userInfo: {
    width: 404,
    height: 78,
    backgroundColor: '#ffffff',
    // flexDirection: 'row',
    // position: 'relative',
  },
  attributeContainer: {
    width: 404,
    height: 78,
    left: 12,
  },
  nameAttribute: {
    height: 21,
    // position: 'absolute',
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
  valueAttribute: {
    width: 404,
    height: 47,
    top: 10,
    borderColor: '#F1F1F1',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  inputUserInfo: {
    left: 15,
    fontSize: 15,
    fontWeight: 'regular',
    color: '#212121',
  },
});
