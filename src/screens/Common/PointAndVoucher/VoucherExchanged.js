import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {icon} from '@assets';
import {commonRoot, root} from 'navigation/navigationRef';
import router from '@router';
export default function VoucherRedeemed({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable style={style.title} onPress={() => root.goBack()}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Voucher đã đổi</Text>
        </Pressable>
      </View>
      <View style={{top: 10, flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            left: 12,
            width: width - 24,
            rowGap: 12,
            paddingBottom: 500,
          }}>
          <Pressable
            onPress={() => commonRoot.navigate(router.DETAIL_VOUCHER)}
            style={{
              width: width - 24,
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
                  backgroundColor: '#FEC007',
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
                  Sao chép
                </Text>
              </Pressable>
            </View>
            <View style={{width: 231, height: 102}}>
              <Text
                style={{fontWeight: 'bold', color: '#0060af', fontSize: 16}}>
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
                <Image source={icon.icon_rpm} style={{width: 20, height: 20}} />
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
          <Pressable
            onPress={() => commonRoot.navigate(router.DETAIL_VOUCHER)}
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
                  backgroundColor: '#FEC007',
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
                  Sao chép
                </Text>
              </Pressable>
            </View>
            <View style={{width: 231, height: 102}}>
              <Text
                style={{fontWeight: 'bold', color: '#0060af', fontSize: 16}}>
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
                <Image source={icon.icon_rpm} style={{width: 20, height: 20}} />
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
          <Pressable
            disabled={true}
            onPress={() => commonRoot.navigate(router.DETAIL_VOUCHER)}
            style={{
              width: 395,
              height: 121,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              backgroundColor: '#f1f1f1',
              flexDirection: 'row',
              columnGap: 10.1,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 138.87,
                height: 120.96,
                backgroundColor: '#808080',
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
                    color: '#808080',
                  }}>
                  Sao chép
                </Text>
              </Pressable>
            </View>
            <View style={{width: 231, height: 102}}>
              <Text
                style={{fontWeight: 'bold', color: '#808080', fontSize: 16}}>
                Giảm 200k
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'regular',
                  color: '#808080',
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
                <Image source={icon.icon_rpm} style={{width: 20, height: 20}} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'semibold',
                    color: '#808080',
                  }}>
                  X {2500}
                </Text>
              </View>
            </View>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}
const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FC',
  },
  titleContainer: {
    width: width,
    height: 54,
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
