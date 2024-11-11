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
import {icon, video} from '../../assets/index';
export default function Video({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('Home')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Video</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 66}}>
        <ScrollView contentContainerStyle={style.videoContainer} showsVerticalScrollIndicator={false}> 
          <View style={style.itemVideo}>
            <View style={style.video}>
              <Image source={video.video_1} />
              <Image style={style.btnPlayVideo} source={icon.icon_play_video} />
            </View>
            <Text style={style.descriptionVideo}>
              Tập đoàn GS và sự nỗ lực từ những bước chân đầu tiên
            </Text>
          </View>
          <View style={style.itemVideo}>
            <View style={style.video}>
              <Image source={video.video_2} />
              <Image style={style.btnPlayVideo} source={icon.icon_play_video} />
            </View>
            <Text style={style.descriptionVideo}>
              Tập đoàn GS và sự nỗ lực từ những bước chân đầu tiên
            </Text>
          </View>
          <View style={style.itemVideo}>
            <View style={style.video}>
              <Image source={video.video_2} />
              <Image style={style.btnPlayVideo} source={icon.icon_play_video} />
            </View>
            <Text style={style.descriptionVideo}>
              Tập đoàn GS và sự nỗ lực từ những bước chân đầu tiên
            </Text>
          </View>
          <View style={style.itemVideo}>
            <View style={style.video}>
              <Image source={video.video_2} />
              <Image style={style.btnPlayVideo} source={icon.icon_play_video} />
            </View>
            <Text style={style.descriptionVideo}>
              Tập đoàn GS và sự nỗ lực từ những bước chân đầu tiên
            </Text>
          </View>
          <View style={style.itemVideo}>
            <View style={style.video}>
              <Image source={video.video_2} />
              <Image style={style.btnPlayVideo} source={icon.icon_play_video} />
            </View>
            <Text style={style.descriptionVideo}>
              Tập đoàn GS và sự nỗ lực từ những bước chân đầu tiên
            </Text>
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
  videoContainer: {
    width: 428,
    top: 0,
    left: 0,
    gap: 38,
    paddingBottom: 1500
  },
  itemVideo: {
    width: 404,
    height: 272,
    alignItems: 'center',
    gap: 12,
  },
  video: {
    width: 428,
    height: 239,
    top: 0,
  },

  descriptionVideo: {
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
