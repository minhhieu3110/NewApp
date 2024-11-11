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
export default function Evaluate({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('DetailProducts')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Tất cả đánh giá</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 65}}>
        <ScrollView contentContainerStyle={{top: 0, backgroundColor: '#fff', paddingBottom: 1500}}>
          <View style={{width: 390, height: 65, top: 0, left: 12, rowGap: 7}}>
            <View
              style={{
                width: 390,
                height: 31,
                flexDirection: 'row',
                columnGap: 10,
              }}>
              <View style={[style.itemEvaluate, {backgroundColor: '#0060af'}]}>
                <Text style={style.contentItemEvaluate}>
                  <Text style={style.textContentItemEvaluate}>Tất cả</Text>
                  <Text style={style.textContentItemEvaluate}>(715)</Text>
                </Text>
              </View>
              <View style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                <View style={style.contentItemEvaluate}>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    5
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    (715)
                  </Text>
                </View>
              </View>
              <View style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                <View style={style.contentItemEvaluate}>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    4
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    (715)
                  </Text>
                </View>
              </View>
              <View style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                <View style={style.contentItemEvaluate}>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    3
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    (715)
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 390,
                height: 31,
                columnGap: 10,
                flexDirection: 'row',
              }}>
              <View style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                <View style={style.contentItemEvaluate}>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    2
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    (715)
                  </Text>
                </View>
              </View>
              <View style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                <View style={style.contentItemEvaluate}>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    1
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    (715)
                  </Text>
                </View>
              </View>
              <View style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                <View style={style.contentItemEvaluate}>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    Ảnh
                  </Text>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    (715)
                  </Text>
                </View>
              </View>
              <View style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                <View style={style.contentItemEvaluate}>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    Bình luận
                  </Text>
                  <Text
                    style={[style.textContentItemEvaluate, {color: '#212121'}]}>
                    (715)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 428,
              height: 5,
              top: 12,
              left: 0,
              backgroundColor: '#F1F1F1',
            }}></View>
          <View
            style={{
              width: 395,
              height: 1000,
              top: 24,
              left: 12,
              gap: 12,
            }}>
            <View style={style.itemEvaluateContainer}>
              <View style={{width: 25, height: 25}}>
                <Image source={icon.icon_avatar_comment} />
              </View>
              <View style={style.contentComment}>
                <Text
                  style={{
                    height: 20,
                    fontSize: 15,
                    fontWeight: 'medium',
                    fontFamily: 'Be Vietnam Pro',
                  }}>
                  Hoàng Trung
                </Text>
                <Image source={icon.icon_range_rate_star} />
                <Text
                  style={{
                    width: 371,
                    height: 37,
                    lineHeight: 18,
                    fontSize: 14,
                    fontWeight: 'regular',
                  }}>
                  Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính
                  hãng 100%, nguyên seal, giao nhanh
                </Text>
                <View
                  style={{
                    width: 284,
                    height: 65,
                    flexDirection: 'row',
                    gap: 8,
                  }}>
                  <Image source={image.image_comment_demo_1} />
                  <Image source={image.image_comment_demo_2} />
                  <Image source={image.image_comment_demo_1} />
                  <Image source={image.image_comment_demo_2} />
                </View>
                <Text style={{height: 19}}>15:24 , 24/10/2024</Text>
              </View>
            </View>
            <View style={{width: 395, height: 1, backgroundColor: '#F1F1F1'}} />
            <View style={style.itemEvaluateContainer}>
              <View style={{width: 25, height: 25}}>
                <Image source={icon.icon_avatar_comment} />
              </View>
              <View style={style.contentComment}>
                <Text
                  style={{
                    height: 20,
                    fontSize: 15,
                    fontWeight: 'medium',
                    fontFamily: 'Be Vietnam Pro',
                  }}>
                  Hoàng Trung
                </Text>
                <Image source={icon.icon_range_rate_star} />
                <Text
                  style={{
                    width: 371,
                    height: 37,
                    lineHeight: 18,
                    fontSize: 14,
                    fontWeight: 'regular',
                  }}>
                  Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính
                  hãng 100%, nguyên seal, giao nhanh
                </Text>
                <View
                  style={{
                    width: 284,
                    height: 65,
                    flexDirection: 'row',
                    gap: 8,
                  }}>
                  <Image source={image.image_comment_demo_1} />
                  <Image source={image.image_comment_demo_2} />
                </View>
                <Text style={{height: 19}}>15:24 , 24/10/2024</Text>
              </View>
            </View>
            <View style={{width: 395, height: 1, backgroundColor: '#F1F1F1'}} />
            <View style={style.itemEvaluateContainer}>
              <View style={{width: 25, height: 25}}>
                <Image source={icon.icon_avatar_comment} />
              </View>
              <View style={style.contentComment}>
                <Text
                  style={{
                    height: 20,
                    fontSize: 15,
                    fontWeight: 'medium',
                    fontFamily: 'Be Vietnam Pro',
                  }}>
                  Hoàng Trung
                </Text>
                <Image source={icon.icon_range_rate_star} />
                <Text
                  style={{
                    width: 371,
                    height: 37,
                    lineHeight: 18,
                    fontSize: 14,
                    fontWeight: 'regular',
                  }}>
                  Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính
                  hãng 100%, nguyên seal, giao nhanh
                </Text>
                <Text style={{height: 19}}>15:24 , 24/10/2024</Text>
              </View>
            </View>
            <View style={{width: 395, height: 1, backgroundColor: '#F1F1F1'}} />
            <View style={style.itemEvaluateContainer}>
              <View style={{width: 25, height: 25}}>
                <Image source={icon.icon_avatar_comment} />
              </View>
              <View style={style.contentComment}>
                <Text
                  style={{
                    height: 20,
                    fontSize: 15,
                    fontWeight: 'medium',
                    fontFamily: 'Be Vietnam Pro',
                  }}>
                  Hoàng Trung
                </Text>
                <Image source={icon.icon_range_rate_star} />
                
                <Text style={{height: 19}}>15:24 , 24/10/2024</Text>
              </View>
            </View>
            <View style={{width: 395, height: 1, backgroundColor: '#F1F1F1'}} />
            <View style={style.itemEvaluateContainer}>
              <View style={{width: 25, height: 25}}>
                <Image source={icon.icon_avatar_comment} />
              </View>
              <View style={style.contentComment}>
                <Text
                  style={{
                    height: 20,
                    fontSize: 15,
                    fontWeight: 'medium',
                    fontFamily: 'Be Vietnam Pro',
                  }}>
                  Hoàng Trung
                </Text>
                <Image source={icon.icon_range_rate_star} />
                <Text
                  style={{
                    width: 371,
                    height: 37,
                    lineHeight: 18,
                    fontSize: 14,
                    fontWeight: 'regular',
                  }}>
                  Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính
                  hãng 100%, nguyên seal, giao nhanh
                </Text>
                <View
                  style={{
                    width: 284,
                    height: 65,
                    flexDirection: 'row',
                    gap: 8,
                  }}>
                  <Image source={image.image_comment_demo_1} />
                  <Image source={image.image_comment_demo_2} />
                  <Image source={image.image_comment_demo_1} />
                  <Image source={image.image_comment_demo_2} />
                </View>
                <Text style={{height: 19}}>15:24 , 24/10/2024</Text>
              </View>
            </View>
            <View style={{width: 395, height: 1, backgroundColor: '#F1F1F1'}} />
            <View style={style.itemEvaluateContainer}>
              <View style={{width: 25, height: 25}}>
                <Image source={icon.icon_avatar_comment} />
              </View>
              <View style={style.contentComment}>
                <Text
                  style={{
                    height: 20,
                    fontSize: 15,
                    fontWeight: 'medium',
                    fontFamily: 'Be Vietnam Pro',
                  }}>
                  Hoàng Trung
                </Text>
                <Image source={icon.icon_range_rate_star} />
                <Text
                  style={{
                    width: 371,
                    height: 37,
                    lineHeight: 18,
                    fontSize: 14,
                    fontWeight: 'regular',
                  }}>
                  Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính
                  hãng 100%, nguyên seal, giao nhanh
                </Text>
                <View
                  style={{
                    width: 284,
                    height: 65,
                    flexDirection: 'row',
                    gap: 8,
                  }}>
                  <Image source={image.image_comment_demo_1} />
                  <Image source={image.image_comment_demo_2} />
                </View>
                <Text style={{height: 19}}>15:24 , 24/10/2024</Text>
              </View>
            </View>
            <View style={{width: 395, height: 1, backgroundColor: '#F1F1F1'}} />
            <View style={style.itemEvaluateContainer}>
              <View style={{width: 25, height: 25}}>
                <Image source={icon.icon_avatar_comment} />
              </View>
              <View style={style.contentComment}>
                <Text
                  style={{
                    height: 20,
                    fontSize: 15,
                    fontWeight: 'medium',
                    fontFamily: 'Be Vietnam Pro',
                  }}>
                  Hoàng Trung
                </Text>
                <Image source={icon.icon_range_rate_star} />
                <Text
                  style={{
                    width: 371,
                    height: 37,
                    lineHeight: 18,
                    fontSize: 14,
                    fontWeight: 'regular',
                  }}>
                  Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính
                  hãng 100%, nguyên seal, giao nhanh
                </Text>
                <Text style={{height: 19}}>15:24 , 24/10/2024</Text>
              </View>
            </View>
            <View style={{width: 395, height: 1, backgroundColor: '#F1F1F1'}} />
            <View style={style.itemEvaluateContainer}>
              <View style={{width: 25, height: 25}}>
                <Image source={icon.icon_avatar_comment} />
              </View>
              <View style={style.contentComment}>
                <Text
                  style={{
                    height: 20,
                    fontSize: 15,
                    fontWeight: 'medium',
                    fontFamily: 'Be Vietnam Pro',
                  }}>
                  Hoàng Trung
                </Text>
                <Image source={icon.icon_range_rate_star} />
                
                <Text style={{height: 19}}>15:24 , 24/10/2024</Text>
              </View>
            </View>
            <View style={{width: 395, height: 1, backgroundColor: '#F1F1F1'}} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  itemEvaluate: {
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // padding: 15,
  },
  contentItemEvaluate: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    gap: 5,
  },
  textContentItemEvaluate: {
    height: 19,
    fontSize: 14,
    fontWeight: 'regular',
    color: '#fff',
  },
  itemEvaluateContainer: {
    width: 395,
    height: 'auto',
    flexDirection: 'row',
  },
  contentComment: {
    width: 371,
    height: 'auto',
    left: 33,
    gap: 8,
  },
});
