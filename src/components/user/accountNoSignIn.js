import * as React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
// import FastImage from 'react-native-fast-image'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
export default function AccountNoSignIn({navigation}) {
  const avatar = require('../../assets/image/Group60347.png');
  return (
    <View style={style.container}>
      <View style={style.avatar}>
        <Image source={avatar} />
      </View>
      <View style={style.recommen}>
        <Text style={{color: '#ffffff'}}>Đăng nhập/Đăng Ký để xem nhiều thông tin hơn</Text>
      </View>
      <Pressable style={style.btnLogin} onPress={() =>navigation.navigate('Login')}>
        <Text style={style.textBtnLogin}>Đăng Nhập</Text>
      </Pressable>
      <View style={style.menu}>
        <View style={style.setting}>
            <View>
            {/* <FontAwesomeIcon name={faGear} /><Text>Cài đặt</Text> */}
            </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0060AF',
  },
  avatar: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: 15,
    left: 169,
  },
  recommen: {
    width: 304,
    height: 19,
    position: 'absolute',
    top: 119,
    left: 62,
  },
  btnLogin: {
    width: 175,
    height: 47,
    position: 'absolute',
    top: 153,
    left: 127,
    backgroundColor: '#FD6C31',
    borderRadius: 10,
  },
  textBtnLogin: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'medium',
    position: 'absolute',
    top: 14,
    left: 50
  },
  menu: {
    width: 428,
    height: 709,
    position: 'absolute',
    top: 230,
    left: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  setting: {
    width: 404,
    height: 132,
    position: 'absolute',
    top: 5,
    left: 12,
    borderWidth: 1
  }
});
