import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import {icon} from '../../assets/index';
export default function OrderDetails({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <View
          style={{
            flexDirection: 'row',
            top: 13,
            height: 24,
            alignItems: 'center',
          }}>
          <Pressable
            style={style.title}
            onPress={() => navigation.navigate('Order')}>
            <Image source={icon.icon_arrow_left} />
            <Text style={style.textTitle}>Chi tiết đơn hàng</Text>
          </Pressable>
          <Text
            style={{
              height: 24,
              fontSize: 16,
              fontWeight: 'semibold',
              color: '#fff',
              textTransform: 'uppercase',
              right: 5,
              position: 'absolute',
            }}>
            #{`2314abc`}
          </Text>
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
    width: 412,
    height: 54,
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    width: 204,
    height: 28,
    // top: 13,
    left: 3,
  },
  textTitle: {
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
});
