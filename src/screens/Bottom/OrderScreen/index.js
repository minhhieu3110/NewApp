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
import TopTabContainer from 'navigation/TopTabContainer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function OrderScreen({navigation, route}) {
  const TopStack = createNativeStackNavigator();
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
      <TopStack.Navigator
        initialRouteName="TopTapContainer"
        screenOptions={{headerShown: false}}>
        <TopStack.Screen name="TopTapContainer" component={TopTabContainer} />
      </TopStack.Navigator>
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
