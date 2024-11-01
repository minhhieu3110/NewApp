import * as React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import BottomTabNavigator from '../../navigation/BottomTabContainer';
import { icon } from '../../assets/index';
export default function AccountNoSignIn({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.avatar}>
        <Image source={icon.icon_avatar} />
      </View>
      <View style={style.recommen}>
        <Text style={{color: '#ffffff'}}>
          Đăng nhập/Đăng Ký để xem nhiều thông tin hơn
        </Text>
      </View>
      <Pressable
        style={style.btnLogin}
        onPress={() => navigation.navigate('Login')}>
        <Text style={style.textBtnLogin}>Đăng Nhập</Text>
      </Pressable>
      <View style={style.menu}>
        <View style={[style.settingInfo, {top: 5}]}>
          <Pressable onPress={()=> navigation.navigate('Setting')} style={[style.titleSettingInfo]}>
            <View>
              <Image
                style={[style.iconTitleSettingInfo, {top: 5}]}
                source={icon.icon_gear_setting}
              />
              <Text style={[style.textTitleSettingInfo, {top: 6}]}>
                Cài đặt
              </Text>
            </View>
            <View style={[style.arrowToSubMenu, {top: 12}]}>
              <Image source={icon.icon_arrow_sub_menu} />
            </View>
          </Pressable>
          <View style={style.separator} />
          <Pressable onPress={() => navigation.navigate('CenterHelp')} style={[style.titleSettingInfo, {top: 59}]}>
            <View>
              <Image
                style={[style.iconTitleSettingInfo, {top: 5}]}
                source={icon.icon_center_help}
              />
              <Text style={[style.textTitleSettingInfo, {top: 6, width: 120}]}>
                Trung tâm hỗ trợ
              </Text>
            </View>
            <View style={[style.arrowToSubMenu, {top: 12}]}>
              <Image source={icon.icon_arrow_sub_menu} />
            </View>
          </Pressable>
          <View style={[style.separator, {top: 98}]} />
          <View style={[style.titleSettingInfo, {top: 113}]}>
            <View>
              <Image
                style={[style.iconTitleSettingInfo, {top: 5}]}
                source={icon.icon_term_policies}
              />
              <Text style={[style.textTitleSettingInfo, {top: 6, width: 182}]}>
                Điều khoản và chính sách
              </Text>
            </View>
            <View style={[style.arrowToSubMenu, {top: 12}]}>
              <Image source={icon.icon_arrow_sub_menu} />
            </View>
          </View>
        </View>
        <View style={style.separator2} />
        <Text
          style={{
            width: 113,
            height: 21,
            position: 'absolute',
            left: 12,
            top: 171,
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Be Vietnam Pro',
            color: '#212121',
          }}>
          Thông Tin RPM
        </Text>
        <View style={[style.settingInfo, {top: 207}]}>
          <Pressable onPress={() => navigation.navigate('AboutCompany')} style={[style.titleSettingInfo]}>
            <View>
              <Image
                style={[style.iconTitleSettingInfo, {top: 5}]}
                source={icon.icon_company}
              />
              <Text style={[style.textTitleSettingInfo, {top: 6, width: 126}]}>
                Giới thiệu công ty
              </Text>
            </View>
            <View style={[style.arrowToSubMenu, {top: 12}]}>
              <Image source={icon.icon_arrow_sub_menu} />
            </View>
          </Pressable>
          <View style={style.separator} />
          <Pressable onPress={() => navigation.navigate('Recruitment')} style={[style.titleSettingInfo, {top: 59}]}>
            <View>
              <Image
                style={[style.iconTitleSettingInfo, {top: 5}]}
                source={icon.icon_recruitment}
              />
              <Text style={[style.textTitleSettingInfo, {top: 6, height: 84}]}>
                Tuyển dụng
              </Text>
            </View>
            <View style={[style.arrowToSubMenu, {top: 12}]}>
              <Image source={icon.icon_arrow_sub_menu} />
            </View>
          </Pressable>
          <View style={[style.separator, {top: 98}]} />
          <Pressable onPress={() => navigation.navigate('Video')}  style={[style.titleSettingInfo, {top: 113}]}>
            <View>
              <Image
                style={[style.iconTitleSettingInfo, {top: 5}]}
                source={icon.icon_video}
              />
              <Text style={[style.textTitleSettingInfo, {top: 6, width: 41}]}>
                Video
              </Text>
            </View>
            <View style={[style.arrowToSubMenu, {top: 12}]}>
              <Image source={icon.icon_arrow_sub_menu} />
            </View>
          </Pressable>
        </View>
        <View style={[style.separator2, {top: 354}]} />
        {/* <View style={style.tabNavigationBottom}>
          <BottomTabNavigator/>
        </View> */}
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0060AF',
  },
  avatar: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: 15,
    left: 169,
  },
  recommen: {
    width: 304,
    height: 19,
    position: 'absolute',
    top: 119,
    left: 62,
  },
  btnLogin: {
    width: 175,
    height: 47,
    position: 'absolute',
    top: 153,
    left: 127,
    backgroundColor: '#FD6C31',
    borderRadius: 10,
  },
  textBtnLogin: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'medium',
    position: 'absolute',
    top: 14,
    left: 50,
  },
  menu: {
    width: 428,
    height: 709,
    position: 'absolute',
    top: 230,
    left: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  settingInfo: {
    width: 404,
    height: 132,
    position: 'absolute',
    left: 12,
  },
  titleSettingInfo: {
    width: 403.93,
    height: 24,
    position: 'absolute',
    left: 12,
    justifyContent: 'space-between',
  },
  textTitleSettingInfo: {
    height: 21,
    position: 'absolute',
    left: 30,
    color: '#212121',
    fontSize: 16,
    fontWeight: 'regular',
    fontFamily: 'Be Vietnam Pro',
  },
  iconTitleSettingInfo: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 0,
  },
  separator: {
    width: 404,
    height: 0,
    position: 'absolute',
    top: 44,
    left: 12,
    borderWidth: 1,
    borderColor: '#F3F7FC',
  },
  arrowToSubMenu: {
    width: 6.1,
    height: 10.17,
    position: 'absolute',
    left: 355,
  },
  separator2: {
    width: 428,
    height: 5,
    position: 'absolute',
    top: 152,
    backgroundColor: '#F1F1F1',
  },
  tabNavigationBottom: {
    width: 428,
    height: 65,
    position: 'absolute',
    top: 515,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth: 1,
  },
});
