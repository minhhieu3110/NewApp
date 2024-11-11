import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {icon, image} from '../../assets/index';
export default function Account({navigation}) {
  // const data = {routeName: [
  //   {id: 1, route: 'SaveProducts'}
  // ]}
  // console.log(data);
  
  return (
    <View style={style.container}>
      <Pressable
        style={style.editContainer}
        onPress={() => navigation.navigate('InfoAccount')}>
        <Image style={style.iconEditContainer} source={icon.icon_edit} />
      </Pressable>
      <View style={style.avatar}>
        <Image source={image.img_avatar} />
      </View>
      <Text style={style.usernameText}>Trung Nguyen</Text>
      <Text style={style.emailText}>trungnguyen123@gmail.com</Text>
      <View style={style.accumulatedpoints}>
        <Text style={style.accumulatedpointsText}>Điểm tích lũy : 1200</Text>
      </View>
      <View style={{flex: 1, top: 217}}>
        <ScrollView contentContainerStyle={style.containerMenuAccount}>
          <View style={style.ordersTitle}>
            <Text style={style.orders}>Đơn hàng</Text>
            <View style={style.seeAll}>
              <Text style={style.seeAllText}>Xem tất cả</Text>
            </View>
          </View>
          <View style={{flex: 1, top: 47}}>
            <ScrollView contentContainerStyle={style.ordersItem} horizontal>
              <View style={[style.item, {left: 18}]}>
                <View style={style.iconItem}>
                  <Image source={icon.icon_wait_confirm_order} />
                </View>
                <Text style={style.iconItemText}>Chờ xác nhận</Text>
              </View>
              <View style={[style.item, {left: 122}]}>
                <View style={style.iconItem}>
                  <Image source={icon.icon_wait_get_order} />
                </View>
                <Text style={style.iconItemText}>Chờ lấy hàng</Text>
              </View>
              <View style={[style.item, {left: 226}]}>
                <View style={style.iconItem}>
                  <Image source={icon.icon_processing_order} />
                </View>
                <Text style={style.iconItemText}>Đang giao</Text>
              </View>
              <View style={[style.item, {left: 330}]}>
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
              style={[style.menuAccountTitle, {top: 0}]}>
              <View>
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
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 39}]} />
            {/* // */}
            <Pressable
              onPress={() => navigation.navigate('ProductsSeen')}
              style={[style.menuAccountTitle, {top: 54}]}>
              <View>
                <Image style={style.iconMenuAccount} source={icon.icon_seen} />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Sản phẩm đã xem
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 93}]} />
            {/* // */}
            <Pressable
              onPress={() => navigation.navigate('ProductsFavorite', {routeName: 'ProductsFavorite'})}
              style={[style.menuAccountTitle, {top: 108}]}>
              <View>
                <Image style={style.iconMenuAccount} source={icon.icon_heart} />
                <Text style={[style.textMenuAccount, {top: 1}]}>
                  Sản phẩm yêu thích
                </Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 147}]} />
            {/* // */}
            <Pressable onPress={() => navigation.navigate('ProductsSave', {routeName: 'ProductsSave'})} style={[style.menuAccountTitle, {top: 162}]}>
              <View>
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
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 201}]} />
            {/* // */}
            <Pressable onPress={() => navigation.navigate('AddressSaved')} style={[style.menuAccountTitle, {top: 216}]}>
              <View>
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
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 255}]} />
            {/* // */}
            <Pressable onPress={() => navigation.navigate('Contract')} style={[style.menuAccountTitle, {top: 270}]}>
              <View>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_contract}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>Hợp đồng</Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 309}]} />
            {/* // */}
            <Pressable onPress={() =>navigation.navigate('Debt')} style={[style.menuAccountTitle, {top: 324}]}>
              <View>
                <Image style={style.iconMenuAccount} source={icon.icon_debt} />
                <Text style={[style.textMenuAccount, {top: 1}]}>Công nợ</Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 363}]} />
            {/* // */}
            <Pressable onPress={()=>navigation.navigate('Setting')} style={[style.menuAccountTitle, {top: 378}]}>
              <View>
                <Image
                  style={style.iconMenuAccount}
                  source={icon.icon_gear_setting}
                />
                <Text style={[style.textMenuAccount, {top: 1}]}>Cài đặt</Text>
              </View>
              <View>
                <Image
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 417}]} />
            {/* // */}
            <Pressable onPress={() => navigation.navigate('CenterHelp')} style={[style.menuAccountTitle, {top: 432}]}>
              <View>
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
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </Pressable>
            <View style={[style.seperator2, {top: 471}]} />
            <View style={[style.menuAccountTitle, {top: 490}]}>
              <View>
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
                  style={[style.iconSubMenuAccount, {top: 7}]}
                  source={icon.icon_arrow_sub_menu}
                />
              </View>
            </View>
            <View style={[style.seperator, {top: 531}]} />
            <Pressable style={{width: 72, height: 21, top: 550, left: 173}} onPress={() =>navigation.navigate('Home')}>
              <Text style={{color: '#FD6C31', fontSize: 16, fontWeight: 'medium', fontFamily: 'Be Vietnam Pro'}}>Đăng xuất</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0060AF',
  },
  avatar: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: 15,
    left: 169,
  },
  usernameText: {
    width: 100,
    height: 21,
    position: 'absolute',
    left: 164,
    top: 109,
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#FFFFFF',
    fontFamily: 'Be Vietnam Pro',
  },
  emailText: {
    width: 200,
    height: 17,
    position: 'absolute',
    left: 130,
    top: 134,
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'regular',
    fontFamily: 'Be Vietnam Pro',
  },
  accumulatedpoints: {
    width: 215,
    height: 42,
    position: 'absolute',
    top: 163,
    left: 107,
    backgroundColor: '#FEC007',
    borderRadius: 21,
  },
  accumulatedpointsText: {
    width: 144,
    height: 21,
    position: 'absolute',
    top: 10,
    left: 36,
    fontSize: 16,
    fontFamily: 'Be Vietnam Pro',
    fontWeight: 'bold',
    color: '#0060AF',
  },
  containerMenuAccount: {
    width: 428,
    height: 1156,
    // position: 'absolute',
    // top: 217,
    left: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  ordersTitle: {
    flexDirection: 'row',
  },
  orders: {
    width: 74,
    height: 21,
    position: 'absolute',
    top: 14,
    left: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    fontFamily: 'Be Vietnam Pro',
  },
  seeAll: {
    width: 71,
    height: 16,
    position: 'absolute',
    left: 345,
    top: 17,
  },
  seeAllText: {
    width: 56,
    height: 16,
    fontSize: 12,
    fontWeight: 'regular',
    fontFamily: 'Be Vietnam Pro',
    color: '#808080',
  },
  ordersItem: {
    width: 404,
    height: 106,
  },
  item: {
    width: 80,
    height: 106,
    position: 'absolute',
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
    width: 428,
    height: 5,
    position: 'absolute',
    top: 168,
    backgroundColor: '#F1F1F1',
  },
  accountMenu: {
    width: 404,
    height: 510,
    left: 12,
    top: 185,
    position: 'absolute',
  },
  menuAccountTitle: {
    width: 403.93,
    height: 24,
    position: 'absolute',
    left: 12,
    // borderWidth: 1,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
  },
  iconMenuAccount: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 12,
  },
  textMenuAccount: {
    width: 138,
    height: 21,
    position: 'absolute',
    left: 42,
  },
  iconSubMenuAccount: {
    width: 6.1,
    height: 10.17,
    left: 355,
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
    left: 389,
    top: 7,
  },
  iconEditContainer: {
    width: 18.27,
    height: 18,
    top: 8,
    left: 8.36,
  },
});
