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
import {icon} from '@assets';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Video from 'react-native-video';
import {root} from 'navigation/navigationRef';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'redux/actions';
export default function Videos() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_VIDEO,
    });
  }, []);
  const videos = useSelector(state => state.getVideo?.data || []);
  console.log(videos);

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable style={style.title} onPress={() => root.goBack()}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Video</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 12}}>
        <ScrollView
          contentContainerStyle={style.videoContainer}
          showsVerticalScrollIndicator={false}>
          {videos.map(item => (
            <View style={style.itemVideo} key={item.id}>
              <View style={style.video}>
                <Video
                  source={{uri: `${item.video_file}`}}
                  repeat={true}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>
              <Text style={style.descriptionVideo}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
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
    color: '#ffffff',
  },
  videoContainer: {
    width: width,
    top: 0,
    left: 0,
    rowGap: 19,
    paddingBottom: 200,
  },
  itemVideo: {
    width: width,
    height: 272,
    alignItems: 'center',
    gap: 12,
  },
  video: {
    width: width,
    height: 239,
    top: 0,
  },

  descriptionVideo: {
    width: width,
    left: 12,
    fontSize: 16,
    fontWeight: 'semibold',
    lineHeight: 24,
    color: '#000000',
  },
  btnPlayVideo: {
    top: 94,
    left: 188,
    position: 'absolute',
    zIndex: 300,
  },
});
