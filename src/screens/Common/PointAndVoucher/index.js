import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import {icon} from '@assets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
export default function CumulativePoints({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Điểm tích lũy</Text>
        </Pressable>
      </View>
      <View style={{width: 395, left: 12, top: 64, rowGap: 11}}>
        <View
          style={{
            width: 395,
            height: 94,
            borderRadius: 8,
            backgroundColor: '#fff',
            rowGap: 12,
          }}>
          <View
            style={{
              width: 361,
              height: 40,
              top: 10,
              left: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 183.39,
                height: 34.39,
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 10,
              }}>
              <Image
                source={icon.icon_rpm}
                style={{width: 34.39, height: 34.39}}
              />
              <Text
                style={{
                  height: 20,
                  fontSize: 15,
                  fontWeight: 'regular',
                  color: '#212121',
                }}>
                Điểm tích lũy hiện có
              </Text>
            </View>
            <Text
              style={{
                height: 40,
                fontSize: 30,
                fontWeight: 'bold',
                color: '#FD6C31',
                right: 0,
                position: 'absolute',
              }}>
              {5000}
            </Text>
          </View>
          <View style={{height: 20}}>
            <Pressable
              onPress={() => navigation.navigate('VoucherRedeemed')}
              style={{
                width: 117.93,
                right: 20,
                position: 'absolute',
                alignItems: 'center',
                flexDirection: 'row',
                columnGap: 11.8,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'regular',
                  color: '#0060af',
                }}>
                Voucher đã đổi
              </Text>
              <Icon name="arrow-forward-ios" color="#0060af" />
            </Pressable>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: 395,
            rowGap: 12,
            paddingBottom: 500,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#212121'}}>
            Đổi điểm
          </Text>
          {Array.from({length: 10}).map((_, index) => (
            <Pressable
              onPress={() => navigation.navigate('DetailVoucher')}
              key={index}
              style={{
                width: 395,
                height: 121,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                backgroundColor: '#fff',
                flexDirection: 'row',
                columnGap: 10.1,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 138.87,
                  height: 120.96,
                  backgroundColor: '#0060af',
                  borderStyle: 'dotted',
                  borderLeftWidth: 5,
                  borderColor: '#fff',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 33,
                    fontWeight: 'bold',
                    color: '#fff',
                    top: 25,
                  }}>
                  200K
                </Text>
                <Pressable
                  style={{
                    width: 70,
                    height: 25,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    top: 42,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'medium',
                      color: '#0060af',
                    }}>
                    Đổi ngay
                  </Text>
                </Pressable>
              </View>
              <View style={{width: 231, height: 102}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#0060af',
                    fontSize: 16,
                  }}>
                  Giảm 200k
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#212121',
                    top: 5,
                  }}>
                  Giảm 200K cho đơn hàng từ 3 triệu
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#808080',
                    top: 14,
                  }}>
                  5 lượt sử dụng
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    columnGap: 4,
                    alignItems: 'center',
                    top: 23,
                  }}>
                  <Image
                    source={icon.icon_rpm}
                    style={{width: 20, height: 20}}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    X {2500}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
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
