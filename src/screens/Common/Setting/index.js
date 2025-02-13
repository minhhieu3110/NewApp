import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import {icon} from '@assets';
import {useState, useEffect} from 'react';
import {root} from 'navigation/navigationRef';
import Switch from 'components/base/Switch';
import {useSharedValue} from 'react-native-reanimated';
export default function Setting({navigation}) {
  const [offNotification, setOffNotification] = useState(
    `${icon.icon_set_default_on}`,
  );
  const [hiddenLanguage, setHiddenLanguage] = useState(
    `${icon.icon_arrow_sub_menu}`,
  );
  const [hiddenLanguageMenu, setHiddenLanguageMenu] = useState(false);
  const [offLanguageVietNamese, setOffLanguageVietNamese] = useState(
    `${icon.icon_set_default_on}`,
  );
  const [onLanguageEnglish, setOnLanguageEnglish] = useState(
    `${icon.icon_set_default_off}`,
  );
  const handlerOffNotification = () => {
    setOffNotification(prevOffNotification =>
      prevOffNotification === `${icon.icon_set_default_on}`
        ? `${icon.icon_set_default_off}`
        : `${icon.icon_set_default_on}`,
    );
  };
  const handlerHiddenLanguage = () => {
    setHiddenLanguage(prevHiddenLanguage =>
      prevHiddenLanguage === `${icon.icon_arrow_sub_menu}`
        ? `${icon.icon_arrow_sub_down}`
        : `${icon.icon_arrow_sub_menu}`,
    );
    setHiddenLanguageMenu(!hiddenLanguageMenu);
  };
  const handlerLanguageVN = () => {
    setOffLanguageVietNamese(prevOffLanguageVietNamese => {
      const newStatus =
        prevOffLanguageVietNamese === `${icon.icon_set_default_on}`
          ? `${icon.icon_set_default_off}`
          : `${icon.icon_set_default_on}`;

      if (newStatus === `${icon.icon_set_default_on}`) {
        setOnLanguageEnglish(`${icon.icon_set_default_off}`);
      }
      if (newStatus === `${icon.icon_set_default_off}`) {
        setOnLanguageEnglish(`${icon.icon_set_default_on}`);
      }
      return newStatus;
    });
  };

  const handlerLanguageEN = () => {
    setOnLanguageEnglish(prevOnLanguageEnglish => {
      const newStatus =
        prevOnLanguageEnglish === `${icon.icon_set_default_off}`
          ? `${icon.icon_set_default_on}`
          : `${icon.icon_set_default_off}`;

      if (newStatus === `${icon.icon_set_default_on}`) {
        setOffLanguageVietNamese(`${icon.icon_set_default_off}`);
      }
      if (newStatus === `${icon.icon_set_default_off}`) {
        setOffLanguageVietNamese(`${icon.icon_set_default_on}`);
      }
      return newStatus;
    });
  };
  const isOn = useSharedValue(false);
  const offNotificatin = () => {
    isOn.value = !isOn.value;
  };
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable style={style.title} onPress={() => root.goBack()}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Cài đặt</Text>
        </Pressable>
      </View>
      <View style={style.settingContainer}>
        <View style={style.itemSettingContainer}>
          <View style={style.textIcon}>
            <Image source={icon.icon_notification_setting} />
            <Text style={style.textSetting}>Tắt thông báo</Text>
          </View>
          <Pressable onPress={handlerOffNotification} style={style.interactive}>
            <Image source={offNotification} />
          </Pressable>
          {/* <Switch
            style={style.interactive}
            trackColors={{on: '#00C707', off: '#fff'}}
            value={isOn}
            onPress={offNotificatin}
          /> */}
        </View>
        <Pressable
          onPress={handlerHiddenLanguage}
          style={style.itemSettingContainer}>
          <View style={style.textIcon}>
            <Image source={icon.icon_language} />
            <Text style={style.textSetting}>Ngôn ngữ</Text>
          </View>
          <View style={style.interactive}>
            <Image source={hiddenLanguage} />
          </View>
        </Pressable>
        {hiddenLanguageMenu && (
          <View
            style={{
              width: width - 24,
              height: 82,
              backgroundColor: '#ffffff',
              borderRadius: 10,
              borderColor: '#0092CE',
              borderWidth: 1,
              gap: 12,
              justifyContent: 'center',
            }}>
            <Pressable
              onPress={handlerLanguageVN}
              style={style.languageContainer}>
              <View style={style.textIcon}>
                <Image source={icon.icon_language_vietnamese} />
                <Text style={style.textSetting}>Tiếng Việt</Text>
              </View>
              <View style={style.interactive}>
                <Image source={offLanguageVietNamese} />
              </View>
            </Pressable>
            <Pressable
              onPress={handlerLanguageEN}
              style={style.languageContainer}>
              <View style={style.textIcon}>
                <Image source={icon.icon_language_united_states} />
                <Text style={style.textSetting}>Tiếng Anh</Text>
              </View>
              <View style={style.interactive}>
                <Image source={onLanguageEnglish} />
              </View>
            </Pressable>
          </View>
        )}
        <Pressable
          onPress={() => navigation.navigate('ChangePassword')}
          style={style.itemSettingContainer}>
          <View style={style.textIcon}>
            <Image source={icon.icon_change_password} />
            <Text style={style.textSetting}>Đổi mật khẩu</Text>
          </View>
          <View style={style.interactive}>
            <Image source={icon.icon_arrow_sub_menu} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: '#ffffff',
  },
  settingContainer: {
    width: width - 24,
    height: 194,
    left: 12,
    top: 13,
    gap: 15,
  },
  itemSettingContainer: {
    width: width - 24,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  interactive: {
    right: 0,
    position: 'absolute',
  },
  textSetting: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#212121',
  },
  languageContainer: {
    width: 370,
    height: 23,
    left: 12,
    flexDirection: 'row',
  },
});
