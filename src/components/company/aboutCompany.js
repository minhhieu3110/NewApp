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
  ImageBackground,
  Dimensions,
} from 'react-native';
import {icon, image} from '../../assets/index';
import {useState} from 'react';
// import Carousel from 'react-native-snap-carousel';
export default function AboutCompany({navigation}) {
  const imageDemo = [
    {id: 1, image: `${image.image_about_company_demo_1}`},
    {id: 2, image: `${image.image_about_company_demo_2}`},
    {id: 3, image: `${image.image_about_company_demo_3}`},
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? imageDemo.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === imageDemo.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('Home')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Giới thiệu về công ty</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 12}}>
        <ScrollView
          contentContainerStyle={style.aboutContainer}
          showsVerticalScrollIndicator={false}>
          <View style={{width: width-24, height: 477, borderRadius: 10, gap: 12}}>
            <View style={{width: 332, height: 22, top: 12, left: 12}}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#0060af'}}>
                Về chúng tôi
              </Text>
            </View>
            <View style={{width: 380, left: 12}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'regular',
                  lineHeight: 25,
                  color: '#212121',
                }}>
                Lorem Ipsum is simply dummy text of the printin and typesetting
                industry. Lorem Ipsum has be industry'si standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type ani scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electroniic typesetting, remaining essentially unchanged. I was
                popularised in the 1960s with the release tf Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                LoremuiyIt is a long established fact that a reader will be
                distracted byn the readable content of a page when looking at
                iots layout. The point of using Lorem Ipsum is that it hais a
                more-or-less normal distribution of lette opposed to using
                'Content here, content here', making it looiik like readable
                English.
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width-24,
              height: 621,
              flexDirection: 'row',
              left: 0,
              gap: 12,
            }}>
            <View style={{width: width-24, height: 569, left: 6}}>
              <Image source={`${imageDemo[currentIndex].image}`} />
            </View>
            <View
              style={{
                width: 90,
                height: 40,
                gap: 10,
                top: 581,
                left: 169,
                position: 'absolute',
                flexDirection: 'row',
              }}>
              <Pressable
                style={[style.btnPrevNext, {backgroundColor: '#ffffff'}]}
                onPress={handlePrevious}>
                <Image source={icon.icon_subtraction_left} />
              </Pressable>
              <Pressable
                style={[style.btnPrevNext, {backgroundColor: '#0060af'}]}
                onPress={handleNext}>
                <Image source={icon.icon_subtraction_right} />
              </Pressable>
            </View>
          </View>
          <View style={{width: 395, height: 546, left: 0, gap: 12}}>
            <Text
              style={{
                width: 332,
                height: 50,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#0060af',
                lineHeight: 28,
                fontFamily: 'Montserrat',
              }}>
              Korea’s No.1{'\n'}Lubricants Brand
            </Text>
            <Image source={image.image_about_company_demo_4} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'regular',
                lineHeight: 25,
                color: '#212121',
              }}>
              Trong suốt hơn 50 năm qua, nhờ nghiên cứu sâu rộng và không ngừng
              đổi mới, Dầu nhớt Số 1 Hàn Quốc* _ Kixx luôn là thương hiệu dẫn
              đầu thị trường. Dầu nhớt Kixx được tinh chế từ dầu gốc chất lượng
              cao của GS Caltex, cung ứng đa dạng các loại sản phẩm từ dầu nhớt
              cho động cơ xe đến dầu nhớt dùng trong công nghiệp, và luôn nhận
              được niềm tin yêu của khách hàng trên toàn thế giới.
            </Text>
          </View>
          <ImageBackground
            source={image.image_background}
            style={{
              width: width,
              height: 852,
              borderWidth: 1,
              left: -12,
              gap: 14,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ffffff',
                textTransform: 'uppercase',
                left: 12,
                top: 20,
              }}>
              Lịch sử hình thành
            </Text>
            <View
              style={{
                width: 418,
                height: 777,
                left: -2,
                top: 34,
                gap: 21,
              }}>
              <View style={style.event}>
                <View style={style.year}>
                  <Text style={style.textYear}>1997</Text>
                  <View style={[style.verticalLine, {height: 138.5}]}></View>
                </View>
                <View style={style.horizontalLine}></View>
                <View style={style.eventContent}>
                  <Text style={style.textContent}>Thành lập RPM Korea</Text>
                  <Text style={style.description}>
                    RPM Korea được thành lập và hiện đang xuất khẩu dầu nhờn GS
                    sang 10 quốc gia trong đó có Việt Nam (Mông Cổ, Bangladesh,
                    Ả Rập Saudi, Irag, Jordan, Malaysia,...)
                  </Text>
                </View>
              </View>
              <View style={style.event}>
                <View style={style.year}>
                  <Text style={style.textYear}>2005</Text>
                  <View style={[style.verticalLine, {height: 36}]}></View>
                </View>
                <View style={style.horizontalLine}></View>
                <View style={style.eventContent}>
                  <Text style={style.textContent}>Xuất khẩu</Text>
                  <Text style={style.description}>
                    Bắt đầu xuất khẩu về Việt Nam
                  </Text>
                </View>
              </View>
              <View style={style.event}>
                <View style={style.year}>
                  <Text style={style.textYear}>2011</Text>
                  <View style={[style.verticalLine, {height: 58}]}></View>
                </View>
                <View style={style.horizontalLine}></View>
                <View style={style.eventContent}>
                  <Text style={style.textContent}>Thành lập RPM Việt Nam</Text>
                  <Text style={style.description}>
                    Thành lập RPM Việt Nam và tang doanh số 20~30% mỗi năm
                  </Text>
                </View>
              </View>
              <View style={style.event}>
                <View style={style.year}>
                  <Text style={style.textYear}>2022</Text>
                  <View style={[style.verticalLine, {height: 83}]}></View>
                </View>
                <View style={style.horizontalLine}></View>
                <View style={style.eventContent}>
                  <Text style={style.textContent}>
                    Khai trương showroom và nhà kho
                  </Text>
                  <Text style={style.description}>
                    Khai trương showroom và nhà kho RPM Việt Nam tại Quận 9
                    Thành phố Hồ Chí Minh
                  </Text>
                </View>
              </View>
              <View style={style.event}>
                <View style={style.year}>
                  <Text style={style.textYear}>Nay</Text>
                </View>
                <View style={style.horizontalLine}></View>
                <View style={style.eventContent}>
                  <Text style={style.textContent}>
                    Lorem Ipsum is simply dum of galley printing and typesetting
                  </Text>
                  <Text style={style.description}>
                    Lorem Ipsum is simply dummy gallttey printing and
                    typesetting indust. Lorem Ipsum has the standard dummy
                    texthe 1500s, when an unknown printer toik a galley of type
                    and scrambl
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#212121',
              left: 12,
            }}>
            Chứng nhận
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{width: 734, height: 284, flexDirection: 'row', gap: 12}}>
            <View style={style.certificate}>
              <View style={style.imageCertificate}>
                <Image source={image.image_certificate}/>
              </View>
              <View style={style.nameCertificate}>
                <Text style={style.textNameCertificate}>(KS) MACHINERY OIL</Text>
              </View>
            </View>
            <View style={style.certificate}>
              <View style={style.imageCertificate}>
                <Image source={image.image_certificate}/>
              </View>
              <View style={style.nameCertificate}>
                <Text style={style.textNameCertificate}>(KS) MACHINERY OIL</Text>
              </View>
            </View>
            <View style={style.certificate}>
              <View style={style.imageCertificate}>
                <Image source={image.image_certificate}/>
              </View>
              <View style={style.nameCertificate}>
                <Text style={style.textNameCertificate}>(KS) MACHINERY OIL</Text>
              </View>
            </View>
            <View style={style.certificate}>
              <View style={style.imageCertificate}>
                <Image source={image.image_certificate}/>
              </View>
              <View style={style.nameCertificate}>
                <Text style={style.textNameCertificate}>(KS) MACHINERY OIL</Text>
              </View>
            </View>
          </ScrollView>
          <Image style={{left: -3}} source={image.image_about_company_demo_5}/>
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
    color: '#fff',
  },
  aboutContainer: {
    width: width-24,
    left: 12,
    top: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingBottom: 100,
    gap: 12,
  },
  btnPrevNext: {
    width: 40,
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E9E9E9',
  },
  event: {
    width: 418,
    flexDirection: 'row',
  },
  year: {
    width: 'auto',
    height: 60,
  },
  eventContent: {
    width: 280,
    left: 40,
    top: 24,
    gap: 14,
  },
  textYear: {
    fontSize: 45,
    fontWeight: 'regular',
    fontFamily: 'SFU Bodoni BoldCondensed',
    color: '#ffffff',
    width: 102,
  },
  textContent: {
    fontSize: 15,
    fontWeight: 'semibold',
    color: '#ffffff',
    lineHeight: 30,
  },
  description: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#ffffff',
    lineHeight: 25,
  },
  horizontalLine: {
    width: 30,
    height: 0,
    borderWidth: 2,
    borderColor: '#ffffff',
    left: 20,
    top: 34.5,
  },
  verticalLine: {
    borderWidth: 2,
    borderColor: '#ffffff',
    position: 'absolute',
    left: 47, // Adjust to align with the vertical line
    top: 60,
    transform: [{translateY: -4}],
  },
  certificate: {
    width: 170, height: 284, gap: 12
  },
  imageCertificate: {
    width: 170,
    height: 229,
  },
  nameCertificate: {
    width: 155,height: 43,
  },
  textNameCertificate: {
    fontSize: 16, fontWeight: 'bold', lineHeight: 22,
    color: '#212121'
  }
});
