import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import {icon} from '@assets';
export default function CenterHelp({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Trung tâm hỗ trợ</Text>
        </Pressable>
      </View>
      <View style={{width: 404, height: 100, left: 12, top: 15, gap: 15}}>
        <View style={style.itemHelp}>
          <View style={style.leftItemHelp}>
            <Image source={icon.icon_help_with_phone} />
            <Text style={style.textItemLeftHelp}>Hỗ trợ qua điện thoại</Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'semibold',
              color: '#0060AF',
              right: 0,
              position: 'absolute',
            }}>
            0123456789
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('HelpWithEmail')}
          style={style.itemHelp}>
          <View style={style.leftItemHelp}>
            <Image source={icon.icon_help_with_email} />
            <Text style={style.textItemLeftHelp}>Hỗ trợ qua email</Text>
          </View>
          <Image
            style={{right: 0, position: 'absolute'}}
            source={icon.icon_arrow_sub_menu}
          />
        </Pressable>
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
  itemHelp: {
    width: width - 24,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftItemHelp: {
    flexDirection: 'row',
    gap: 6,
  },
  textItemLeftHelp: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#212121',
  },
});
