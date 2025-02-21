import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from 'react-native';
import {icon, image} from '@assets';
import {root} from 'navigation/navigationRef';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {formatCurrency} from '@utils';
export default function Cart() {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable style={style.title} onPress={() => root.goBack()}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Giỏ hàng</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 12}}>
        <ScrollView
          style={{width: width - 24, left: 12}}
          showsVerticalScrollIndicator={false}>
          <View style={{rowGap: 15, paddingBottom: 100}}>
            {Array.from({length: 1}).map(item => (
              <View>
                <View style={style.itemIntoCart}>
                  <Pressable
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 3,
                      borderColor: '#808080',
                      top: 26,
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="checksquare" size={23} color="#0060af" />
                  </Pressable>
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 7,
                      left: 8,
                    }}>
                    <Image
                      source={image.image_product}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: width - 144,
                      height: 101,
                      right: 0,
                      position: 'absolute',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'regular',
                        color: '#000',
                      }}>
                      Kixx HYBRID - Dầu động cơ cao cấp
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'regular',
                        color: '#808080',
                        marginTop: 9,
                        marginBottom: 8,
                      }}>
                      Phân loại: {`1L`}
                    </Text>
                    <View
                      style={{
                        width: width - 144,
                        height: 41,
                        flexDirection: 'row',
                        columnGap: 83,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'medium',
                            color: '#FD6C31',
                          }}>
                          {formatCurrency(1500000)}
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: 'regular',
                            color: '#808080',
                            textDecorationLine: 'line-through',
                          }}>
                          {formatCurrency(1750000)}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 121,
                          height: 26,
                          right: 0,
                          position: 'absolute',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Entypo name="squared-minus" color="#aaa" size={28} />
                        <Text
                          style={{
                            fontWeight: 'medium',
                            fontSize: 16,
                            color: '#000',
                          }}>
                          1
                        </Text>
                        <Entypo name="squared-plus" color="#000" size={28} />
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: width - 24,
                    height: 1,
                    backgroundColor: '#f1f1f1',
                  }}></View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          width: width,
          height: 66,
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 41.66,
            left: 12,
            rowGap: 6.7,
          }}>
          <Pressable
            style={{
              width: 22,
              aspectRatio: 1 / 1,
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#808080',
            }}></Pressable>
          <Text style={{fontSize: 12, fontWeight: 'regular', color: '#212121'}}>
            Tất cả
          </Text>
        </View>
        <View
          style={{
            height: 45,
            position: 'absolute',
            right: 12,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View
            style={{
              height: 42,
              columnGap: 10,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'regular',
                color: '#212121',
              }}>
              Tổng Tiền
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'semibold',
                color: '#FD6C31',
              }}>
              {formatCurrency(1500000)}
            </Text>
          </View>
          <Pressable
            style={{
              width: 130,
              backgroundColor: '#0060af',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'medium', color: '#fff'}}>
              Thanh Toán
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
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
    top: 13,
    left: 3,
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  textTitle: {
    width: 165,
    height: 24,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#fff',
  },
  itemIntoCart: {
    width: width - 24,
    height: 101,
    flexDirection: 'row',
  },
});
