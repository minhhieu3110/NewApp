// import React, { useState } from 'react';
// import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

// const Login = () => {
//   const [dataLogin, setDataLogin] = useState({ username: '', password: '' });
//   const handlerSubmit = async () => {
//     try {
//       const response = await fetch('http://rpm.demo.app24h.net:81/api/v1/user/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataLogin),
//       });

//       const result = await response.json();
//       console.log(dataLogin);
//       if (response.ok) {
//         Alert.alert('Login successful');
//       } else {
//         Alert.alert('Login failed', result.message || 'Please try again');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       Alert.alert('Login failed', 'Something went wrong');
//     }
//   };

//   return (
//     <SafeAreaView>
//       <View>
//         <Text/>
//         <TextInput
//           style={style.input}
//           placeholder="Username"
//           value={dataLogin.username}
//           onChangeText={(username)=> setDataLogin({...dataLogin, username})}
//         />
//         <TextInput
//           style={style.input}
//           placeholder="Password"
//           secureTextEntry={true}
//           value={dataLogin.password}
//           onChangeText={(password)=> setDataLogin({...dataLogin, password})}
//         />
//         <Button title="Login" onPress={handlerSubmit} />
//         <Text style={style.footer}>Don't have an account ?
//           <View>
//             <Text>Register</Text>
//           </View>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   input: {
//     height: 40,
//     borderWidth: 1,
//     margin: 10,
//     paddingLeft: 10,
//   },
//   footer:{
//     textAlign:'center',
//     flex: 1,
//   },
// });

// export default Login;
