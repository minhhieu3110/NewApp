import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
  Modal,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import {icon} from '@assets';
import {useState, useEffect, useCallback} from 'react';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import RenderHTML from 'react-native-render-html';
import {ConvertTimeStamp} from 'utils';
import {bottomRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'redux/actions';
export default function Recruitment() {
  const [showFormApply, setShowFormApply] = useState(false);
  const [responeFile, setResponeFile] = useState([]);
  const handlerChooseFile = useCallback(async () => {
    try {
      const respone = await DocumentPicker.pick({
        // types: 'application/pdf',
        type: DocumentPicker.types.allFiles,
        presentationStyle: 'fullScreen',
      });
      setResponeFile(respone);
    } catch (error) {
      console.warn(error);
    }
  });
  const handlerAplly = () => {
    setShowFormApply(!showFormApply);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_RECRUITMENT,
    });
  }, []);
  const dataRecruitment = useSelector(
    state => state.getRecruitment?.data || [],
  );
  const [visbleModalDetailRecruitment, setVisibleModalDetailRecruitment] =
    useState(false);
  const [detailRecruitment, setDetailRecruitment] = useState([
    {
      id: '',
      item_id: '',
      title: '',
      wage: '',
      quantity: '',
      work: '',
      rank: '',
      experience: '',
      sex: '',
      short: '',
      content: '',
      benefits: '',
      apply_type: '',
      date_end: [{human: '', timestamp: ''}],
    },
  ]);
  const handlerDetailRecruitment = itemId => {
    setVisibleModalDetailRecruitment(true);
    const detailRecruitment = dataRecruitment.filter(
      item => item.item_id === itemId,
    );
    setDetailRecruitment(
      detailRecruitment.map(item => ({
        id: item.id,
        item_id: item.item_id,
        title: item.title,
        wage: item.wage,
        quantity: item.quantity,
        work: item.work,
        rank: item.rank,
        experience: item.experience,
        sex: item.sex,
        short: item.short,
        content: item.content,
        benefits: item.benefits,
        apply_type: item.apply_type,
        date_end: item.date_end,
      })),
    );
  };

  return (
    <View style={[style.container, {flex: 1}]}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => bottomRoot.navigate(router.HOME_SCREEN)}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Tuyển dụng</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 10, left: 12}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{width: width - 24, paddingBottom: 150}}>
          {dataRecruitment.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => handlerDetailRecruitment(item.item_id)}
              style={{
                width: width - 24,
                height: 102,
                backgroundColor: '#ffffff',
                borderRadius: 8,
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <View style={{left: 12, height: 79, gap: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'regular',
                    color: '#808080',
                  }}>
                  Số lượng: {item.quantity}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'regular',
                    color: '#0060af',
                  }}>
                  Hạn ứng tuyển: {ConvertTimeStamp(item.date_end.timestamp)}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <Modal animationType="fade" visible={visbleModalDetailRecruitment}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            style.container,
            {backgroundColor: '#fff', paddingBottom: 300},
          ]}>
          <View style={style.titleContainer}>
            <Pressable
              style={style.title}
              onPress={() => setVisibleModalDetailRecruitment(false)}>
              <Image source={icon.icon_arrow_left} />
              <Text style={style.textTitle}>Chi tiết tuyển dụng</Text>
            </Pressable>
          </View>
          {detailRecruitment.map(item => (
            <View>
              <Text
                key={item.id}
                style={{
                  fontSize: 18,
                  fontWeight: 'semibold',
                  color: '#212121',
                  top: 13,
                  left: 12,
                  textTransform: 'uppercase',
                }}>
                {item.title}
              </Text>
              <View style={[style.seperator, {top: 25}]} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'semibold',
                  color: '#212121',
                  top: 36,
                  left: 12,
                }}>
                Thông tin chung
              </Text>
              <View
                style={{width: 167, height: 316, top: 47, left: 12, gap: 14}}>
                <View style={style.itemInfo}>
                  <View>
                    <Image source={icon.icon_salary} />
                  </View>
                  <View>
                    <Text style={style.titleItemInfo}>Mức lương</Text>
                    <Text style={style.valueItemInfo}>Thỏa thuận</Text>
                  </View>
                </View>
                <View style={style.itemInfo}>
                  <View>
                    <Image source={icon.icon_time_work} />
                  </View>
                  <View>
                    <Text style={style.titleItemInfo}>Hình thức làm việc</Text>
                    <Text style={style.valueItemInfo}>{item.work}</Text>
                  </View>
                </View>
                <View style={style.itemInfo}>
                  <View>
                    <Image source={icon.icon_experience} />
                  </View>
                  <View>
                    <Text style={style.titleItemInfo}>Kinh nghiệm</Text>
                    <Text style={style.valueItemInfo}>{item.experience}</Text>
                  </View>
                </View>
                <View style={style.itemInfo}>
                  <View>
                    <Image source={icon.icon_quantity} />
                  </View>
                  <View>
                    <Text style={style.titleItemInfo}>Số lượng</Text>
                    <Text style={style.valueItemInfo}>
                      {item.quantity} người
                    </Text>
                  </View>
                </View>
                <View style={style.itemInfo}>
                  <View>
                    <Image source={icon.icon_rank} />
                  </View>
                  <View>
                    <Text style={style.titleItemInfo}>Cấp bậc</Text>
                    <Text style={style.valueItemInfo}>{item.rank}</Text>
                  </View>
                </View>
                <View style={style.itemInfo}>
                  <View>
                    <Image source={icon.icon_sex} />
                  </View>
                  <View>
                    <Text style={style.titleItemInfo}>Giới tính</Text>
                    <Text style={style.valueItemInfo}>{item.sex}</Text>
                  </View>
                </View>
              </View>
              <View style={[style.seperator, {top: 59}]} />
              <View style={style.jobDecription}>
                <View style={style.itemJobDescription}>
                  <Text style={style.titleItemJobDescription}>
                    Mô tả công việc
                  </Text>
                  <View style={style.valueItemJobDescription}>
                    <RenderHTML
                      contentWidth={width}
                      source={{html: item.short}}
                      tagsStyles={{
                        p: {
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                          marginBottom: -10,
                        },
                      }}
                    />
                  </View>
                </View>
                <View style={style.itemJobDescription}>
                  <Text style={style.titleItemJobDescription}>
                    Yêu cầu ứng viên
                  </Text>
                  <View style={style.valueItemJobDescription}>
                    <RenderHTML
                      // style={style.textValue}
                      contentWidth={width}
                      source={{html: item.content}}
                      tagsStyles={{
                        p: {
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                          marginBottom: -10,
                        },
                      }}
                    />
                  </View>
                </View>
                <View style={style.itemJobDescription}>
                  <Text style={style.titleItemJobDescription}>Quyền lợi</Text>
                  <View style={style.valueItemJobDescription}>
                    <RenderHTML
                      style={style.textValue}
                      contentWidth={width}
                      source={{html: item.benefits}}
                      tagsStyles={{
                        p: {
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                          marginBottom: -10,
                        },
                      }}
                    />
                  </View>
                </View>
                <View style={style.itemJobDescription}>
                  <Text style={style.titleItemJobDescription}>
                    Cách thức ứng tuyển
                  </Text>
                  <View style={style.valueItemJobDescription}>
                    <RenderHTML
                      style={style.textValue}
                      contentWidth={width}
                      source={{html: item.apply_type}}
                      tagsStyles={{
                        p: {
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                          marginBottom: -10,
                        },
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            width: width,
            height: 65,
            top: height - 80,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Pressable
            onPress={handlerAplly}
            style={{
              width: width - 24,
              height: 45,
              backgroundColor: '#0060af',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{color: '#ffffff', fontSize: 15, fontWeight: 'medium'}}>
              Ứng tuyển ngay
            </Text>
          </Pressable>
        </View>
        {showFormApply && (
          <Modal
            visible={showFormApply}
            transparent={true}
            animationType="fade">
            <TouchableOpacity
              activeOpacity={1}
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={style.formApply}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#0060af',
                    left: 12,
                  }}>
                  Ứng tuyển ngay
                </Text>
                <View
                  style={{
                    width: width - 48,
                    height: 351,
                    left: 12,
                    top: 11,
                    gap: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Thông tin ứng viên
                  </Text>
                  <TextInput
                    style={style.textInput}
                    placeholderTextColor={'#808080'}
                    placeholder="Họ tên ứng viên *"
                  />
                  <TextInput
                    style={style.textInput}
                    placeholderTextColor={'#808080'}
                    placeholder="Số điện thoại *"
                  />
                  <TextInput
                    style={style.textInput}
                    placeholderTextColor={'#808080'}
                    placeholder="Email *"
                  />
                  <TextInput
                    style={style.textInput}
                    placeholderTextColor={'#808080'}
                    placeholder="Địa chỉ"
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                      top: 10,
                    }}>
                    File PDF đính kèm (nếu có)
                  </Text>
                  <View style={style.textInput}>
                    <Pressable
                      onPress={handlerChooseFile}
                      style={{
                        backgroundColor: '#E8E8E8',
                        borderColor: '#7A7A7A',
                        width: 87,
                        height: 35,
                        borderRadius: 3,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                        }}>
                        Chọn tệp
                      </Text>
                    </Pressable>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="middle"
                      style={{
                        fontSize: 14,
                        fontWeight: 'regular',
                        color: '#7A7A7A',
                      }}>
                      Chưa có tệp nào được chọn
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: width - 48,
                    height: 45,
                    left: 12,
                    top: 30,
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <Pressable
                    onPress={handlerAplly}
                    style={{
                      width: (width - 48) / 2 - 5,
                      height: 45,
                      backgroundColor: '#E0F3FF',
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        color: '#0060af',
                      }}>
                      Quay lại
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      width: (width - 48) / 2 - 5,
                      height: 45,
                      backgroundColor: '#0060AF',
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        color: '#ffffff',
                      }}>
                      Gửi
                    </Text>
                  </Pressable>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        )}
      </Modal>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
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
  seperator: {
    width: width,
    height: 5,
    left: 0,
    backgroundColor: '#f1f1f1',
  },
  itemInfo: {
    width: 127,
    height: 41,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  valueItemInfo: {
    fontSize: 15,
    fontWeight: 'semibold',
    color: '#212121',
  },
  titleItemInfo: {
    fontSize: 14,
    fontWeight: 'regular',
    color: '#212121',
  },
  jobDecription: {
    width: width - 24,
    left: 12,
    top: 70,
    rowGap: 20,
  },
  itemJobDescription: {
    width: width - 24,
    left: 0,
  },
  titleItemJobDescription: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
    top: 0,
  },
  valueItemJobDescription: {
    width: width - 24,
    gap: 2,
    marginBottom: 10,
  },
  textValue: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#212121',
    // lineHeight: 25,
  },
  formApply: {
    width: width - 24,
    height: 475,
    left: 12,
    top: 221,
    position: 'absolute',
    // zIndex: 100,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderRadius: 3,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    fontSize: 15,
    fontWeight: 'regular',
    paddingLeft: 15,
    flexDirection: 'row',
    width: width - 48,
    height: 47,
    alignItems: 'center',
    gap: 10,
  },
});
