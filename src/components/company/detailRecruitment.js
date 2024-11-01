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
  Button,
} from 'react-native';
import {icon} from '../../assets/index';
import {useState, useCallback} from 'react';
import DocumentPicker from 'react-native-document-picker';
import { types } from 'react-native-document-picker';
export default function DetailRecuitment({navigation}) {
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
  const fakeJobDescription = [
    {
      description: [
        'Tổ chức, giám sát việc thực hiện các chiến lược phát triển sản phẩm dịch vụ, triển khai dịch vụ CNTT.',
        'Đánh giá xu hướng công nghệ để có phương án tư vấn, chuyển đổi chiến lược và xây dựng sản phẩm dịch vụ CNTT theo xu hướng công nghệ.',
        'Định hướng và phát triển nguồn lực kỹ thuật đáp ứng nhu cầu thực hiện dịch vụ CNTT.',
        'Nghiên cứu, tư vấn đề xuất giải pháp công nghệ, sản phẩm phục vụ mục tiêu kinh doanh và phát triển công ty',
        'Tham mưu lãnh đạo trong việc định hướng phát triển sản phẩm phục vụ nhu cầu khách hàng và mục tiêu kinh doanh từng giai đoạn theo xu hướng công nghệ.',
      ],
      candidateRecruitment: [
        'Tốt nghiệp Đại học trở lên chuyên ngành Công nghệ thông tin. Có ít nhất 2 năm kinh nghiệm ở vị trí tương đương.',
        'Có kiến thức chuyên môn và tổng quát rộng về lĩnh vực CNTT, khả năng tư vấn sản phẩm cho khách hàng đối tác...',
        'Có kỹ năng quản lý đội, nhóm tốt. ',
      ],
      benefit: [
        'Mức lương : Thương lượng khi phỏng vấn',
        ' Tăng lương theo định kỳ: 1 năm /1 lần',
        'Được hưởng chế độ thưởng dự án tuỳ thuộc vào mức độ đóng góp trong từng dự án',
        'Thưởng các dịp lễ tết, du lịch hàng năm……',
        'Được hưởng đầy đủ các chế độ theo quy định của công ty: Bảo hiểm xã hội, bảo hiểm y tế, Nghỉ chiều thứ 7, chủ nhật',
        'Đài thọ 100% chi phí học và thi chứng chỉ',
        'Được làm việc trong môi trường chuyên nghiệp, năng động. Học hỏi từ những thành viên giàu kinh nghiệm;',
        ' Có cơ hội phát triển, thăng tiến. Công ty luôn tạo ra một môi trường làm việc tôn trọng, trong đó mỗi cá nhân có cơ hội để đạt được tiềm năng cao nhất của mình.',
        ' Được đào tạo bởi các chuyên gia của các hãng hàng đầu thế giới trong lĩnh vực CNTT',
      ],
      howToApply: [
        'Ứng viên nộp hồ sơ trực tuyến bằng cách bấm vào nút Ứng tuyển ngay.',
      ],
    },
  ];
  const handlerAplly = () => {
    setShowFormApply(!showFormApply);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={[
          style.container,
          {
            position: 'relative',
            zIndex: 200,
            opacity: showFormApply ? 0.6 : 1,
            backgroundColor: showFormApply ? '#212121' : '#ffffff',
          },
        ]}>
        <View style={style.titleContainer}>
          <Pressable
            style={style.titleAddressSaved}
            onPress={() => navigation.navigate('AccountNoSignIn')}>
            <Image source={icon.icon_arrow_left} />
            <Text style={style.textTitleAddressSaved}>Chi tiết tuyển dụng</Text>
          </Pressable>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'semibold',
            color: '#212121',
            top: 67,
            left: 12,
            textTransform: 'uppercase',
          }}>
          Nhân viên phòng pháp chế đối ngoại
        </Text>
        <View style={[style.seperator, {top: 79}]} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'semibold',
            color: '#212121',
            top: 90,
            left: 12,
          }}>
          Thông tin chung
        </Text>
        <View style={{width: 167, height: 316, top: 101, left: 12, gap: 14}}>
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
              <Text style={style.valueItemInfo}>Toàn thời gian</Text>
            </View>
          </View>
          <View style={style.itemInfo}>
            <View>
              <Image source={icon.icon_experience} />
            </View>
            <View>
              <Text style={style.titleItemInfo}>Kinh nghiệm</Text>
              <Text style={style.valueItemInfo}>Không yêu cầu</Text>
            </View>
          </View>
          <View style={style.itemInfo}>
            <View>
              <Image source={icon.icon_quantity} />
            </View>
            <View>
              <Text style={style.titleItemInfo}>Số lượng</Text>
              <Text style={style.valueItemInfo}>{10} người</Text>
            </View>
          </View>
          <View style={style.itemInfo}>
            <View>
              <Image source={icon.icon_rank} />
            </View>
            <View>
              <Text style={style.titleItemInfo}>Cấp bậc</Text>
              <Text style={style.valueItemInfo}>Thực tập sinh</Text>
            </View>
          </View>
          <View style={style.itemInfo}>
            <View>
              <Image source={icon.icon_sex} />
            </View>
            <View>
              <Text style={style.titleItemInfo}>Giới tính</Text>
              <Text style={style.valueItemInfo}>Không yêu cầu</Text>
            </View>
          </View>
        </View>
        <View style={[style.seperator, {top: 113}]} />

        {fakeJobDescription.map(jd => (
          <View style={style.jobDecription}>
            <View style={style.itemJobDescription}>
              <Text style={style.titleItemJobDescription}>Mô tả công việc</Text>
              <View style={style.valueItemJobDescription}>
                {jd.description.map((item, index) => (
                  <Text
                    key={index}
                    style={style.textValue}>{`\u2011 ${item}`}</Text>
                ))}
              </View>
            </View>
            <View style={style.itemJobDescription}>
              <Text style={style.titleItemJobDescription}>
                Yêu cầu ứng viên
              </Text>
              <View style={style.valueItemJobDescription}>
                {jd.candidateRecruitment.map((item, index) => (
                  <Text
                    key={index}
                    style={style.textValue}>{`\u2011 ${item}`}</Text>
                ))}
              </View>
            </View>
            <View style={style.itemJobDescription}>
              <Text style={style.titleItemJobDescription}>Quyền lợi</Text>
              <View style={style.valueItemJobDescription}>
                {jd.benefit.map((item, index) => (
                  <Text
                    key={index}
                    style={style.textValue}>{`\u2011 ${item}`}</Text>
                ))}
              </View>
            </View>
            <View style={style.itemJobDescription}>
              <Text style={style.titleItemJobDescription}>
                Cách thức ứng tuyển
              </Text>
              <View style={style.valueItemJobDescription}>
                {jd.howToApply.map((item, index) => (
                  <Text key={index} style={style.textValue}>{`${item}`}</Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      {showFormApply && (
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
          <View style={{width: 380, height: 351, left: 12, top: 11, gap: 10}}>
            <Text
              style={{fontSize: 16, fontWeight: 'semibold', color: '#212121'}}>
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
              <Pressable onPress={handlerChooseFile}
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
                <Text style={{fontSize: 15, fontWeight: 'regular', color: '#212121'}}>Chọn tệp</Text>
              </Pressable>
              {/* {responeFile.map((item, index) => ( */}
                <Text
                  // key={index.toString()}
                  numberOfLines={1}
                  ellipsizeMode= 'middle'
                  style={{fontSize: 14, fontWeight: 'regular', color: '#7A7A7A'}}
                  >
                  Chưa có tệp nào được chọn
                </Text>
              {/* ))} */}
            </View>
          </View>
          <View
            style={{
              width: 380,
              height: 45,
              left: 6,
              top: 30,
              flexDirection: 'row',
              gap: 10,
            }}>
            <Pressable
              style={{
                width: 185,
                height: 45,
                backgroundColor: '#E0F3FF',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 15, fontWeight: 'medium', color: '#0060af'}}>
                Quay lại
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 185,
                height: 45,
                backgroundColor: '#0060AF',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 15, fontWeight: 'medium', color: '#ffffff'}}>
                Gửi
              </Text>
            </Pressable>
          </View>
        </View>
      )}
      <View
        style={{
          width: 400,
          height: 65,
          left: 6.5,
          top: 800,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={handlerAplly}
          style={{
            width: 395,
            height: 45,
            backgroundColor: '#0060af',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'medium'}}>
            Ứng tuyển ngay
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingBottom: 'auto',
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
  seperator: {
    width: 428,
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
    width: 395,
    left: 12,
    top: 124,
    gap: 10,
  },
  itemJobDescription: {
    width: 395,
    left: 0,
    gap: 12,
    height: 450,
  },
  titleItemJobDescription: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
    top: 0,
  },
  valueItemJobDescription: {
    top: 28,
    width: 395,
    position: 'absolute',
    gap: 2,
  },
  textValue: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#212121',
    lineHeight: 25,
  },
  formApply: {
    width: 395,
    height: 475,
    left: 12,
    top: 221,
    position: 'absolute',
    zIndex: 100,
    borderWidth: 1,
    backgroundColor: '#ffffff',
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
    height: 47,
    alignItems: 'center',
    gap: 10
  },
});
