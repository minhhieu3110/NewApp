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
export default function DetailVoucher({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('VoucherRedeemed')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Chi tiết Voucher</Text>
        </Pressable>
      </View>
      <View
        style={{
          width: 395,
          height: 1000,
          left: 12,
          top: 66,
          borderRadius: 8,
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            height: 33,
            left: 10,
            top: 12,
            color: '#0060af',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Giảm 10K
        </Text>
        <View style={{width: 384, top: 21, left: 10, rowGap: 10}}>
          <Text
            style={{
              height: 21,
              fontSize: 16,
              fontWeight: 'semibold',
              color: '#0060af',
            }}>
            Hạn sử dụng ưu đãi
          </Text>
          <Text
            style={{
              height: 20,
              fontSize: 15,
              fontWeight: 'regular',
              color: '#212121',
            }}>
            Ngày 25/11/2024
          </Text>
          <View style={{borderWidth: 1, borderColor: '#f1f1f1'}}></View>
          <View style={{rowGap: 4}}>
            <Text
              style={{fontSize: 16, fontWeight: 'semibold', color: '#0060af'}}>
              Điều kiện áp dụng
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'regular',
                lineHeight: 25,
                color: '#212121',
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
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
    width: 428,
    height: 54,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    width: 204,
    height: 28,
    position: 'absolute',
    top: 13,
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
