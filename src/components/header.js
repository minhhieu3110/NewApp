// import * as React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   Pressable,
//   TextInput,
// } from 'react-native';
// import {icon} from '../../assets/index';
// export default function Header() {
//   const contentHeader = [
//     {navigate: '', textHeader: ''},
//   ];
//   return (
//     <View>
//       {contentHeader.map(header => (
//         <View style={style.titleContainer}>
//           <Pressable
//             style={style.title}
//             onPress={() => navigation.navigate(`${header.navigate}`)}>
//             <Image source={icon.icon_arrow_left} />
//             <Text style={style.textTitle}>{header.textHeader}</Text>
//           </Pressable>
//         </View>
//       ))}
//     </View>
//   );
// }
// const style = StyleSheet.create({
//   titleContainer: {
//     width: 428,
//     height: 54,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     backgroundColor: '#0060AF',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   title: {
//     width: 204,
//     height: 28,
//     position: 'absolute',
//     top: 13,
//     left: 3,
//   },
//   textTitle: {
//     width: 165,
//     height: 24,
//     position: 'absolute',
//     top: 2,
//     left: 36,
//     fontSize: 18,
//     fontWeight: 'medium',
//     fontFamily: 'Be Vietnam Pro',
//     color: '#ffffff',
//   },
// });
