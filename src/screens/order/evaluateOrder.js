import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {icon, image} from '../../assets/index';
import {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Toast from 'react-native-toast-message';
export default function EvaluateOrder({navigation, route}) {
  const [files, setFiles] = useState([]);
  const uploadImage = () => {
    const options = {
      mediaType: 'photo',
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 5,
      includeBase64: false,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const newImages =
          response.assets?.map(asset => ({uri: asset.uri})) || [];
        if (files.length + newImages.length <= 5) {
          setFiles(prevFiles => [...prevFiles, ...newImages]);
        } else {
          const remainingSlots = 5 - files.length;
          setFiles(prevFiles => [
            ...prevFiles,
            ...newImages.slice(0, remainingSlots),
          ]);
        }
      }
    });
  };
  const [rating, setRating] = useState(0);
  const handleStarPress = index => {
    setRating(index + 1);
  };
  console.log(rating);
  const [shareFelling, setShareFelling] = useState('');

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <View
          style={{
            flexDirection: 'row',
            top: 13,
            height: 24,
            alignItems: 'center',
          }}>
          <Pressable
            style={style.title}
            onPress={() => navigation.navigate('OrderDetails', {flag: 4})}>
            <Image source={icon.icon_arrow_left} />
            <Text style={style.textTitle}>Đánh giá đơn hàng</Text>
          </Pressable>
          <Text
            style={{
              height: 24,
              fontSize: 16,
              fontWeight: 'semibold',
              color: '#fff',
              textTransform: 'uppercase',
              right: 5,
              position: 'absolute',
            }}>
            #{`2314abc`}
          </Text>
        </View>
      </View>
      <View style={{width: 412, height: 77, top: 66, rowGap: 12}}>
        <View
          style={{
            width: 369,
            height: 60,
            left: 12,
            flexDirection: 'row',
            columnGap: 12,
          }}>
          <Image
            source={image.image_product_demo_1}
            style={{width: 60, height: 60, borderRadius: 7}}
          />
          <View style={{width: 297, height: 48, rowGap: 8}}>
            <Text
              style={{fontSize: 16, fontWeight: 'regular', color: '#212121'}}>
              KIXX HYBRID - Dầu động cơ cao cấp
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: 'regular', color: '#808080'}}>
              Phân loại: <Text>1L</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 412,
            height: 5,
            backgroundColor: '#f1f1f1',
            bottom: 0,
          }}></View>
      </View>
      <Text
        style={{
          width: 395,
          fontWeight: 'regular',
          fontSize: 14,
          color: '#212121',
          lineHeight: 20,
          top: 78,
          left: 12,
        }}>
        Chúng tôi sẽ cải thiện dịch vụ dựa trên đánh giá của bạn!
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'semibold',
          color: '#212121',
          lineHeight: 24,
          top: 88,
          left: 12,
        }}>
        Chất lượng đơn hàng
      </Text>
      <View style={{width: 226.49, height: 36.5, top: 98, left: 12}}>
        <View style={{flexDirection: 'row'}}>
          {Array.from({length: 5}).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleStarPress(index)}>
              <Icon
                name="star"
                size={39.45}
                color={index < rating ? '#FEC007' : '#f1f1f1'}
                style={{marginHorizontal: 7.8}}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View
        style={{
          width: 395,
          height: 76,
          left: 12,
          top: 110,
          borderWidth: 1,
          borderColor: '#f1f1f1',
        }}>
        <TextInput
          style={{left: 10, fontSize:14, fontWeight: 'regular', color: '#212121'}}
          multiline={true}
          placeholder="Chia sẻ cảm nhận của bạn"placeholderTextColor={'#808080'}
          onChangeText={text => setShareFelling(text)}
        />
      </View>
      <View style={{width: 106, height: 111, top: 121.5, left: 12, rowGap: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'semibold', color: '#212121'}}>
          Thêm hình ảnh
        </Text>
        <View style={{height: 71, flexDirection: 'row', gap: 10}}>
          {files.map((img, index) => (
            <Image
              source={{uri: img.uri}}
              style={{borerRadius: 5, width: 71, height: 71}}
              key={index}
            />
          ))}
          <Pressable
            onPress={uploadImage}
            style={{
              borderWidth: 1,
              borderStyle: 'dashed',
              borderColor: '#aaa',
              width: 71,
              height: 71,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              display: files.length < 5 ? 'flex' : 'none',
            }}>
            <Image source={icon.icon_upload_image} />
            <Text style={{fontSize: 12, fontWeight: 'regular', color: '#aaa'}}>{files.length}/5</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          width: 412,
          height: 65,
          top: 450,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
        onPress={()=> navigation.navigate('Order')}
          disabled={rating === 0 ? true : false}
          style={{
            width: 395,
            height: 45,
            backgroundColor: rating === 0 ? '#f1f1f1' : '#0060AF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'medium',
              color: rating === 0 ? '#808080' : '#ffffff',
            }}>
            Gửi đánh giá
          </Text>
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
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    position: 'absolute',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  title: {
    width: 204,
    height: 28,
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
