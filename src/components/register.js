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
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message'
export default function Register({navigation}) {
  const [dataRegister, setDataRegister] = useState({
    email: '',
    password: '',
    rePassword: '',
  });
    const handlerRegister = async () => {
      try {
        const res = await fetch(
          'http://rpm.demo.app24h.net:81/api/v1/user/signup',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataRegister),
          },
        );
        const result = await res.json;
        console.log(dataRegister);
        if (res.ok) {
          // Alert.alert('Đăng Ký Thành Công !');
          Toast.show({
            type: 'success',
            text1: 'Đăng ký thành công'
          })
          navigation.navigate('Login');
        } else {
          // Alert.alert('Đăng Ký Thất Bại !');
          // Toast.show({
            
          // })
        }
      } catch (err) {
        Alert.alert('Không Thành Công');
        console.log(err);
      }
    };
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.headerImg}
        source={require('../assets/image/Image 2451.png')}
      /> */}
      <View style={styles.formContainer} >
        <Text style={styles.titleFrom}>Đăng Ký</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={email => setDataRegister({...dataRegister, email})}
        />
        <TextInput
          style={[styles.input, {top: 124}]}
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
          onChangeText={password => setDataRegister({...dataRegister, password})}
        />
        <TextInput
          style={[styles.input, {top: 181}]}
          placeholder="Xác nhận mật khẩu"
          secureTextEntry={true}
          onChangeText={rePassword => setDataRegister({...dataRegister, rePassword})}
        />
        <View style={styles.textAgree}>
          <Text style={{textAlign: 'center'}}>
            Bằng việc đăng ký tài khoản, bạn đã đồng ý với{' '}
            <Pressable>
              <Text style={{color: '#0060AF'}}>
                Chính sách & Quy định chung
              </Text>
            </Pressable>{' '}
            của chúng tôi
          </Text>
        </View>
        <Pressable onPress={handlerRegister} style={styles.button}>
          <Text style={styles.textButton}>Đăng Ký</Text>
        </Pressable>
        <Pressable style={styles.forgotPassword}>
          <Text style={styles.textForgotPassword}>Quên mật khẩu</Text>
        </Pressable>
        <View style={styles.line} />
          <Text style={styles.orTextLogin}>Hoặc đăng nhập bằng tài khoản</Text>
          <View style={styles.socialContainer}>
            <Pressable style={styles.socialButton}>
              <Icon name="facebook" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Icon name="facebook" size={24} color="#fff" />
            </Pressable>
          </View>
        <View style={styles.signUp}>
          <Text style={styles.textSignUp}>
            Bạn đã có tài khoản RPM VIETNAM ?
          </Text>
          <Pressable
            style={styles.textRegister}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textRegister}>Đăng Nhập</Text>
          </Pressable>
        </View>
      </View>
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
  headerImg: {
    zIndex: 100,
  },
  formContainer: {
    width: 404,
    height: 566,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    position: 'relative',
    bottom: 100,
    zIndex: 1000,
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
  textAgree: {
    width: 363,
    height: 39,
    position: 'absolute',
    top: 258,
    left: 21,
    fontSize: 13,
    fontWeight: 'regular',
    fontFamily: 'Be Vietnam Pro',
    color: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 363,
    height: 47,
    position: 'absolute',
    top: 316,
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
    top: 377,
    left: 147,
  },
  textForgotPassword: {
    color: '#0060AF',
  },
  line: {
    width: 239,
    position: 'absolute',
    top: 412,
    left: 82.5,
    borderWidth: 1,
    borderColor: '#F3F7FC',
  },
  orTextLogin: {
    width: 218,
    height: 20,
    position: 'absolute',
    top: 426,
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
    top: 461,
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
    top: 527,
    left: 61,
    flexDirection: 'row',
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
    fontFamily: 'Be Vietnam Pro, Regular',
  },
  gradient: {
    flex: 1,
  },
});
