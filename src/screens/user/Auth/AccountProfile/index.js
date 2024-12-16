import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import {icon, image} from '../../../../assets/index';
const Account = ({navigation}) => {
  // const data = {routeName: [
  //   {id: 1, route: 'SaveProducts'}
  // ]}
  // console.log(data);

  return (
    <View style={style.container}>
      <View style={{width: width, height: 235, backgroundColor: '#0060af'}}>
        <View style={{width: width - 24, left: 12, top: 7}}>
          <View
            style={{
              width: 255,
              height: 98,
              left: 157,
              flexDirection: 'row',
              columnGap: 130,
            }}>
            <View style={style.avatar}>
              <Image source={image.img_avatar} />
            </View>
            <Pressable
              style={[style.editContainer]}
              onPress={() => navigation.navigate('InfoAccount')}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  borderRadius: 18,
                }}
                source={icon.icon_edit}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            top: 11,
            left: 118,
            width: 200,
            height: 42,
            rowGap: 4,
            alignItems: 'center',
          }}>
          <Text style={style.usernameText}>Trung Nguyen</Text>
          <Text style={style.emailText}>{`Trungnguyen123@gmail.com`}</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('CumulativePoints')}
          style={style.accumulatedpoints}>
          <Text style={style.accumulatedpointsText}>Điểm tích lũy : 1200</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: -18}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.containerMenuAccount}>
          <View style={style.ordersTitle}>
            <Text style={style.orders}>Đơn hàng</Text>
            <View style={style.seeAll}>
              <Text style={style.seeAllText}>Xem tất cả</Text>
              <Image source={icon.icon_arrow} />
            </View>
          </View>
          <View style={{flex: 1, top: 26}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={style.ordersItem}
              horizontal>
              <View style={[style.item]}>
                <View style={style.iconItem}>
                  <Image source={icon.icon_wait_confirm_order} />
                </View>
                <Text style={style.iconItemText}>Chờ xác nhận</Text>
              </View>
              <View style={[style.item]}>
                <View style={style.iconItem}>
                  <Image source={icon.icon_wait_get_order} />
                </View>
                <Text style={style.iconItemText}>Chờ lấy hàng</Text>
              </View>
              <View style={[style.item]}>
                <View style={style.iconItem}>
                  <Image source={icon.icon_processing_order} />
                </View>
                <Text style={style.iconItemText}>Đang giao</Text>
              </View>
              <View style={[style.item]}>
                <View style={style.iconItem}>
                  <Image source={icon.icon_finished_order} />
                </View>
                <Text style={style.iconItemText}>Đã giao</Text>
              </View>
            </ScrollView>
          </View>
          <View style={style.seperator}></View>
          <View style={style.accountMenu}>
            <Pressable
              onPress={() => navigation.navigate('InfoAccount')}
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_user_around}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Thông tin tài khoản
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            {/* // */}
            <Pressable
              onPress={() => navigation.navigate('ProductsSeen')}
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image style={style.iconMenuAccount} source={icon.icon_seen} />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Sản phẩm đã xem
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            {/* // */}
            <Pressable
              onPress={() =>
                navigation.navigate('ProductsFavorite', {
                  routeName: 'ProductsFavorite',
                })
              }
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image style={style.iconMenuAccount} source={icon.icon_heart} />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Sản phẩm yêu thích
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            {/* // */}
            <Pressable
              onPress={() =>
                navigation.navigate('ProductsSave', {routeName: 'ProductsSave'})
              }
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_save_product}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Sản phẩm mua sau
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            {/* // */}
            <Pressable
              onPress={() => navigation.navigate('AddressSaved')}
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_save_address}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Địa chỉ đã lưu
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            {/* // */}
            <Pressable
              onPress={() => navigation.navigate('Contract')}
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_contract}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>Hợp đồng</Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            {/* // */}
            <Pressable
              onPress={() => navigation.navigate('Debt')}
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image style={style.iconMenuAccount} source={icon.icon_debt} />
                <Text style={[style.textMenuAccount, {top: 1}]}>Công nợ</Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            {/* // */}
            <Pressable
              onPress={() => navigation.navigate('Setting')}
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_gear_setting}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>Cài đặt</Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            {/* // */}
            <Pressable
              onPress={() => navigation.navigate('CenterHelp')}
              style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_center_help}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Trung tâm hỗ trợ
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2]} />
            <View style={[style.menuAccountTitle]}>
              <View style={style.iconTextMenuAccount}>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_term_policies}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Điều khoản và chính sách
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </View>
          </View>
          <View style={[style.seperator, {top: 714, left: 0}]} />
          <Pressable
            style={{
              width: 72,
              height: 21,
              top: 732,
              left: 161,
              position: 'absolute',
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text
              style={{
                color: '#FD6C31',
                fontSize: 16,
                fontWeight: 'medium',
                fontFamily: 'Be Vietnam Pro',
              }}>
              Đăng xuất
            </Text>
          </Pressable>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};
export default Account;
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    top: 8,
  },
  usernameText: {
    width: 150,
    height: 21,
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  emailText: {
    // width: 168,
    height: 17,
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'regular',
    textAlign: 'center',
  },
  accumulatedpoints: {
    width: 215,
    height: 42,
    position: 'absolute',
    top: 163,
    left: 107,
    backgroundColor: '#FEC007',
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accumulatedpointsText: {
    width: 144,
    height: 21,
    fontSize: 16,
    fontFamily: 'Be Vietnam Pro',
    fontWeight: 'bold',
    color: '#0060AF',
  },
  containerMenuAccount: {
    width: width,
    paddingBottom: 800,
    left: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  ordersTitle: {
    width: width - 24,
    height: 21,
    left: 12,
    alignItems: 'center',
    flexDirection: 'row',
    top: 14,
  },
  orders: {
    width: 74,
    height: 21,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    fontFamily: 'Be Vietnam Pro',
  },
  seeAll: {
    width: 'auto',
    height: 16,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  seeAllText: {
    height: 16,
    fontSize: 12,
    fontWeight: 'regular',
    fontFamily: 'Be Vietnam Pro',
    color: '#808080',
  },
  ordersItem: {
    height: 106,
    left: 6,
    flexDirection: 'row',
    columnGap: 24,
    paddingRight: 100,
  },
  item: {
    width: 80,
    height: 106,
  },
  iconItem: {
    width: 80,
    height: 80,
  },
  iconItemText: {
    width: 80,
    height: 17,
    position: 'absolute',
    top: 75,
    fontSize: 13,
    fontWeight: 'regular',
    fontFamily: 'Be Vietnam Pro',
    color: '#212121',
    textAlign: 'center',
  },
  seperator: {
    width: width,
    height: 5,
    position: 'absolute',
    top: 154,
    backgroundColor: '#F1F1F1',
  },
  accountMenu: {
    width: width - 24,
    height: 510,
    left: 12,
    top: 174,
    position: 'absolute',
    rowGap: 15,
  },
  menuAccountTitle: {
    width: width - 24.7,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconTextMenuAccount: {
    width: 350,
    height: 24,
    flexDirection: 'row',
    columnGap: 6,
  },
  iconMenuAccount: {
    width: 24,
    height: 24,
  },
  textMenuAccount: {
    width: 300,
    height: 21,
    fontSize: 16,
    fontWeight: 'regular',
    color: '#212121',
  },
  iconSubMenuAccount: {
    width: 6.1,
    height: 10.17,
  },
  seperator2: {
    width: 404,
    height: 0,
    borderWidth: 1,
    borderColor: '#F3F7FC',
    left: 12,
  },
  editContainer: {
    width: 35,
    height: 35,
    top: 0,
  },
  iconEditContainer: {
    width: 18.27,
    height: 18,
    top: 8,
    left: 8.36,
  },
});
