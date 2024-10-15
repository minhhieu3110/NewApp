import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/A';
import BottomTabNavigator from '../navigation/BottomTabContainer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Login({navigation}) {
  const [dataLogin, setDataLogin] = useState({username: '', password: ''});
  
  const handlerLogin = async () => {
    try {
      const res = await fetch(
        'http://rpm.demo.app24h.net:81/api/v1/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataLogin),
        },
      );
      const result = await res.json;
      console.log(dataLogin);
      if (res.ok) {
        Alert.alert('Đăng Nhập Thành Công !');
      } else {
        Alert.alert('Đăng Nhập Thất Bại !');
      }
    } catch (err) {
      Alert.alert('Không Thành Công');
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.titleFrom}>Đăng Nhập</Text>
          <TextInput
            style={styles.input}
            placeholder="Tài Khoản"
            onChangeText={(username) => setDataLogin({...dataLogin, username})}
          />
          <TextInput
            style={[styles.input, {top: 124}]}
            placeholder="Mật Khẩu"
            secureTextEntry={true}
            onChangeText={(password) => setDataLogin({...dataLogin, password})}
          />
          <Pressable onPress={handlerLogin} style={styles.button}>
            <Text style={styles.textButton}>Đăng Nhập</Text>
          </Pressable>
          <Pressable style={styles.forgotPassword}>
            <Text style={styles.textForgotPassword}>Quên mật khẩu</Text>
          </Pressable>
          <View style={styles.line} />
          <Text style={styles.orTextLogin}>Hoặc đăng nhập bằng tài khoản</Text>
          <View style={styles.socialContainer}>
            <Pressable style={styles.socialButton}>
              <Icon name="storefront-outline" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Icon name="facebook" size={24} color="#fff" />
            </Pressable>
          </View>
          <View style={styles.signUp}>
            <Text style={styles.textSignUp}>Bạn chưa có tài khoản RPM VIETNAM ?</Text>
            <Pressable style={styles.textRegister} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textRegister}>Đăng Ký</Text>
            </Pressable>
          </View>
        </View>
        {/* <BottomTabNavigator/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0060AF',
  },
  headerImg:{
    zIndex: 100
  },
  formContainer: {
    width: 404,
    height: 506,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    position: 'relative',
    bottom: 75,
    zIndex:  1000,
  },
  titleFrom: {
    fontSize: 22,
    color: '#0060AF',
    textAlign: 'center',
    width: 126,
    height: 27,
    position: 'absolute',
    left: 139,
    top: 20,
  },
  input: {
    width: 364,
    height: 47,
    position: 'absolute',
    left: 20,
    top: 67,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'left',
    paddingLeft: 15,
    paddingTop: 13,
    color: '#808080',
  },
  button: {
    width: 363,
    height: 47,
    position: 'absolute',
    top: 201,
    left: 20,
    backgroundColor: '#FD6C31',
    borderRadius: 10,
  },
  textButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 92,
    height: 19,
    fontSize: 16,
    position: 'absolute',
    top: 14,
    left: 136,
  },
  forgotPassword: {
    width: 102,
    height: 20,
    position: 'absolute',
    top: 262,
    left: 147,
  },
  textForgotPassword: {
    color: '#0060AF',
  },
  line: {
    width: 239,
    position: 'absolute',
    top: 297,
    left: 82.5,
    borderWidth: 1,
    borderColor: '#F3F7FC',
  },
  orTextLogin: {
    width: 218,
    height: 20,
    position: 'absolute',
    top: 311,
    left: 96,
    fontSize: 15,
    color: '#808080',
    fontFamily: 'Be Vietnam Pro, Regular',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 114.45,
    height: 47,
    position: 'absolute',
    top: 346,
    left: 145,
  },
  socialButton: {
    width: 47,
    height: 47,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 10.45,
  },
  signUp: {
    width: 298,
    height: 20,
    position: 'absolute',
    top: 412,
    left: 61,
    flexDirection: 'row'
  },
  textSignUp: {
    width: 250,
    height: 19,
    color: '#212121',
    fontSize: 14,
    font: 'Be Vietnam Pro',
    fontWeight: 'regular',
    textAlign: 'left',
  },
  textRegister: {
    color: '#0060AF',
    textAlign: 'right',
    // width: 55,
    // height: 20,
    // fontSize: 15,
    fontFamily: 'Be Vietnam Pro, Regular'
  },
  gradient: {
    flex: 1,
  },
});
