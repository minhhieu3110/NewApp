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
import {icon, image} from '../../assets/index';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { ConvertTimeStamp } from '../../utils/convertTimeStamp';
export default function News({navigation}) {
  const [news, setNews] = useState([
    {
      id: '',
      item_id: '',
      title: '',
      picture: '',
      short: '',
      content: '',
      created_at: '',
      updated_at: '',
      group: ''
    },
  ]);
  useEffect(()=>{
    axios.get('http://rpm.demo.app24h.net:81/api/v1/news').then(res => {
      const  news = res.data.data;
      setNews(
        news.map(item => ({
          id: item.id,
          item_id: item.item_id,
          title: item.title,
          picture: item.picture,
          short: item.short,
          content: item.content,
          created_at: item.created_at,
          created_at: item.updated_at,
          group: item.group.title
        }))
      )
    })
  },[])
  console.log(news);
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
        <View style={{width: 395, top: 11, left: 12, rowGap: 11}}>
          {news.map((item, index) => (
            <View
              key={index}
              style={{
                width: width -24,
                height: 111,
                flexDirection: 'row',
                columnGap: 10,
                backgroundColor: '#fff',
              }}>
              <View>
                <Image
                  source={{uri: item.picture}}
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
                    }}>{ConvertTimeStamp(item.created_at)}</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#0060af',
                    }}>
                    {item.group}
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
                    {item.title}
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
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FC',
    paddingBottom: 100,
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
});
