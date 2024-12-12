import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {icon, image} from '../../assets/index';
import {useEffect, useState} from 'react';
import TopTabContainer from '../../navigation/TopTabContainer';
import TopTabStackNavigation from '../../navigation/TopTabStackNavigation';
import {Screen} from 'react-native-screens';

export default function Order({navigation, route}) {
  // useEffect(() => {
  //   if (route.params?.flag) {
  //     const flag = route.params.flag;
  //   }
  // });
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text
          style={{
            width: 79,
            height: 24,
            fontSize: 18,
            fontWeight: 'medium',
            color: '#fff',
            top: 15,
            left: 12,
          }}>
          Đơn hàng
        </Text>
      </View>
      <TopTabStackNavigation />
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: width,
    height: 54,
    backgroundColor: '#0060AF',
    gap: 21,
  },
});
