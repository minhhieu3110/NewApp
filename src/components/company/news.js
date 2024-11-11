import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import {icon, image} from '../../assets/index';
export default function News({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={style.titleContainer}>
          <Pressable
            style={style.title}
            onPress={() => navigation.navigate('Home')}>
            <Image source={icon.icon_arrow_left} />
            <Text style={style.textTitle}>Tin tức</Text>
          </Pressable>
        </View>
        <View style={{width: 395, top: 65, left: 12, rowGap: 11}}>
          {Array.from({length: 8}).map((_, index) => (
            <View
              key={index}
              style={{
                width: 395,
                height: 111,
                flexDirection: 'row',
                columnGap: 10,
                backgroundColor: '#fff',
              }}>
              <View>
                <Image
                  source={image.image_news}
                  style={{width: 147, height: 110, borderRadius: 5}}
                />
              </View>
              <View>
                <View style={{height: 19, flexDirection: 'row'}}>
                  <Image source={icon.icon_calendar_gay} />
                  <Text
                    style={{
                      fontWeight: 'regular',
                      color: '#808080',
                      marginLeft: 5.3,
                      marginRight: 24,
                    }}>{`22/01/2024`}</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#0060af',
                    }}>
                    Kiến thức
                  </Text>
                </View>
                <View style={{width: 227, height: 45, marginTop: 15}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                      lineHeight: 24,
                    }}>
                    Cách chọn dầu nhớt cho xe côn tay và phân khối lớn
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FC',
    paddingBottom: 100
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
