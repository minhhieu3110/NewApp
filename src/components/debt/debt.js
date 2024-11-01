import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {icon} from '../../assets/index';
export default function Debt({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Công nợ</Text>
        </Pressable>
      </View>
      <View
        style={{
          width: 404,
          height: 179,
          left: 12,
          top: 69,
          backgroundColor: '#ffffff',
          borderRadius: 8,
        }}>
        <View
          style={{
            width: 168,
            height: 21,
            left: 10,
            top: 6,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 16, fontWeight: 'semibold', color: '#46CC37'}}>
            Mã Khách Hàng:{' '}
          </Text>
          <Text
            style={{fontSize: 16, fontWeight: 'semibold', color: '#46CC37'}}>
            131298
          </Text>
        </View>
        <View style={[style.seperator, {top: 20}]} />
        <View style={{width: 384, height: 113, left: 10, top: 39, gap: 11}}>
          <View style={style.itemUserDebtContainer}>
            <Text style={style.textItemUserDebt}>Số dư đầu kỳ</Text>
            <Text style={style.numberItemUserDebt}>387.250.000đ</Text>
          </View>
          <View style={style.itemUserDebtContainer}>
            <Text style={style.textItemUserDebt}>Doanh thu bán hàng</Text>
            <Text style={style.numberItemUserDebt}>1.687.605.810đ</Text>
          </View>
          <View style={style.itemUserDebtContainer}>
            <Text style={style.textItemUserDebt}>Tổng tiền thanh toán</Text>
            <Text style={style.numberItemUserDebt}>1.574.855.810đ</Text>
          </View>
          <View style={style.itemUserDebtContainer}>
            <Text style={style.textItemUserDebt}>Số dư cuối kỳ</Text>
            <Text style={[style.numberItemUserDebt, {color: '#FEC007'}]}>
              500.000.000đ
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, top: 79}}>
      <ScrollView contentContainerStyle={style.debtContainer} showsVerticalScrollIndicator={false}>
        <View style={style.itemDebtContainer}>
          <View style={style.titileDebtAndDate}>
            <Text style={style.textTitle}>Xuất bán hàng</Text>
            <View
              style={{
                width: 96,
                height: 27,
                right: 10,
                position: 'absolute',
                backgroundColor: '#F3F7FC',
                borderRadius: 17,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={style.textDate}>02/01/2024</Text>
            </View>
          </View>
          <View style={style.contentDebt}>
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Phát sinh nợ</Text>
              <Text style={style.textRight}>112.750.000đ</Text>
            </View>
            <View style={style.seperator} />
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Phát sinh có</Text>
              <Text style={style.textRight}>0đ</Text>
            </View>
            <View style={style.seperator} />
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Số dư cuối kỳ</Text>
              <Text style={style.textRight}>500.000.000đ</Text>
            </View>
          </View>
        </View>
        <View style={style.seperator2}></View>
        <View style={style.itemDebtContainer}>
          <View style={style.titileDebtAndDate}>
            <Text style={style.textTitle}>Thu tiền bán hàng</Text>
            <View
              style={{
                width: 96,
                height: 27,
                right: 10,
                position: 'absolute',
                backgroundColor: '#F3F7FC',
                borderRadius: 17,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={style.textDate}>02/01/2024</Text>
            </View>
          </View>
          <View style={style.contentDebt}>
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Phát sinh nợ</Text>
              <Text style={style.textRight}>112.750.000đ</Text>
            </View>
            <View style={style.seperator} />
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Phát sinh có</Text>
              <Text style={style.textRight}>0đ</Text>
            </View>
            <View style={style.seperator} />
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Số dư cuối kỳ</Text>
              <Text style={style.textRight}>500.000.000đ</Text>
            </View>
          </View>
        </View>
        <View style={style.seperator2} />
        <View style={style.itemDebtContainer}>
          <View style={style.titileDebtAndDate}>
            <Text style={style.textTitle}>Xuất bán hàng</Text>
            <View
              style={{
                width: 96,
                height: 27,
                right: 10,
                position: 'absolute',
                backgroundColor: '#F3F7FC',
                borderRadius: 17,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={style.textDate}>02/01/2024</Text>
            </View>
          </View>
          <View style={style.contentDebt}>
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Phát sinh nợ</Text>
              <Text style={style.textRight}>112.750.000đ</Text>
            </View>
            <View style={style.seperator} />
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Phát sinh có</Text>
              <Text style={style.textRight}>0đ</Text>
            </View>
            <View style={style.seperator} />
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Số dư cuối kỳ</Text>
              <Text style={style.textRight}>500.000.000đ</Text>
            </View>
          </View>
        </View>
        <View style={style.seperator2}></View>
        <View style={style.itemDebtContainer}>
          <View style={style.titileDebtAndDate}>
            <Text style={style.textTitle}>Thu tiền bán hàng</Text>
            <View
              style={{
                width: 96,
                height: 27,
                right: 10,
                position: 'absolute',
                backgroundColor: '#F3F7FC',
                borderRadius: 17,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={style.textDate}>02/01/2024</Text>
            </View>
          </View>
          <View style={style.contentDebt}>
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Phát sinh nợ</Text>
              <Text style={style.textRight}>112.750.000đ</Text>
            </View>
            <View style={style.seperator} />
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Phát sinh có</Text>
              <Text style={style.textRight}>0đ</Text>
            </View>
            <View style={style.seperator} />
            <View
              style={{
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={style.textLeft}>Số dư cuối kỳ</Text>
              <Text style={style.textRight}>500.000.000đ</Text>
            </View>
          </View>
        </View>
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
  titleAddressSaved: {
    width: 204,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
  },
  textTitleAddressSaved: {
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
  seperator: {
    width: 404,
    height: 0,
    borderWidth: 1,
    left: 0,
    top: 30,
    borderColor: '#F3F7FC',
  },
  itemUserDebtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItemUserDebt: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#212121',
    left: 0,
  },
  numberItemUserDebt: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#212121',
    right: 0,
    position: 'absolute',
  },
  debtContainer: {
    width: 404,
    left: 12,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    gap: 11,
    // top: 79,
    borderWidth: 1,
    paddingBottom: 1500,
  },
  itemDebtContainer: {
    width: 404,
    height: 169,
    top: 13,
    gap: 12,
  },
  titileDebtAndDate: {
    flexDirection: 'row',
    height: 27,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#0060af',
    left: 9,
  },
  textDate: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#0060af',
  },
  contentDebt: {
    width: 404,
    height: 120,
    gap: 10,
    justifyContent: 'center',
    top: 12,
    borderTopWidth: 1,
    borderColor: '#F3F7FC',
  },
  textLeft: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#808080',
  },
  textRight: {
    right: 20,
    position: 'absolute',
    color: '#212121',
    fontSize: 15,
    fontWeight: 'regular',
  },
  seperator: {
    width: 404,
    height: 0,
    borderWidth: 1,
    left: 0,
    borderColor: '#F3F7FC',
  },
  seperator2: {
    width: 384,
    borderWidth: 5,
    borderColor: '#F3F7FC',
    left: 10,
  },
});
