// import * as React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native'
// import { Image } from 'react-native';
// import AccountNoSignIn from '../components/user/accountNoSignIn';
// import Login from '../components/user/login';
// const Tab = createBottomTabNavigator();
// export default function BottomTabNavigator() {
//     // const iconHome = require('../assets/image/IconHome.png')
//     // const iconUser = require('../assets/image/IconUser.png')
//   return (
//     <NavigationContainer independent={true}>
//         <Tab.Navigator initialRouteName='AccountNoSignIn'
//             screenOptions={({route})=>({
//                 tabBarIcon: ({focused, color, size }) => {
//                     let img;
//                     if (route.name === 'Home') {
//                         img = focused ? "iconHome" : ''
//                     }
//                     if (route.name === 'AccountNoSignIn'){
//                         img = focused ? 'iconUser' : ''
//                     }
//                     if (route.name === 'User'){
//                         img = focused ? 'iconUser' : ''
//                     }
//                     return <Image source={img} color='#808080' size={24}/>
//                 },
//                 tabBarActiveTintColor: 'tomato',
//                 tabBarInactiveTintColor: 'gray',
//             })}
//         >
//           <Tab.Screen name="Home" component={Login}/>
//           <Tab.Screen name="AccountNoSignIn" component={AccountNoSignIn} />
//           {/* <Tab.Screen name='User' component={User}/> */}
//         </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
