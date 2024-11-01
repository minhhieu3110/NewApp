import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {icon} from '../../../assets/index';
export default function CenterHelp({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Trung tâm hỗ trợ</Text>
        </Pressable>
      </View>
      <View style={{width: 404, height: 100, left: 12, top: 69, gap: 15}}>
        <View style={style.itemHelp}>
          <View style={style.leftItemHelp}>
            <Image source={icon.icon_help_with_phone} />
            <Text style={style.textItemLeftHelp}>Hỗ trợ qua điện thoại</Text>
          </View>
          <Text
            style={{fontSize: 16, fontWeight: 'semibold', color: '#0060AF', left: 120}}>
            0123456789
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate('HelpWithEmail')} style={style.itemHelp}>
          <View style={style.leftItemHelp}>
            <Image source={icon.icon_help_with_email} />
            <Text style={style.textItemLeftHelp}>Hỗ trợ qua email</Text>
          </View>
          <Image style={{left: 230.8}} source={icon.icon_arrow_sub_menu}/>
        </Pressable>
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
  itemHelp: {
    width: 404,
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
