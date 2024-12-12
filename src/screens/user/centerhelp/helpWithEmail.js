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
import {icon} from '../../../assets/index';
export default function HelpWithEmail({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('CenterHelp')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Hỗ trợ qua Email</Text>
        </Pressable>
      </View>
      <View style={{width: width - 24, height: 86, left: 12, top: 12}}>
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
      <View style={{width: width - 24, height: 500, left: 0, top: 44, gap: 11}}>
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
                borderWidth: 1,
                paddingLeft: 15,
              }}
              placeholderTextColor={'#808080'}></TextInput>
          </View>
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
          style={{
            width: width - 24,
            height: 45,
            backgroundColor: '#0060af',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'medium'}}>
            Gửi
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  userInfo: {
    width: width - 24,
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
    borderWidth: 1,
    borderColor: '#f1f1f1',
    paddingLeft: 15,
  },
});
