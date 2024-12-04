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
} from 'react-native';
import {icon, video} from '../../assets/index';
import {image} from '../../assets/index';
import {formatCurrency} from '../../utils/fomatCurrency';
import Carousel from 'react-native-reanimated-carousel';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {ConvertTimeStamp} from '../../utils/convertTimeStamp';
export default function Home({navigation}) {
  const fakeDataBestSeller = [
    {
      id: 1,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      priceOriginal: '223000',
      percentDiscount: '15',
      image: `${image.image_product_demo_1}`,
    },
    {
      id: 2,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      priceOriginal: '223000',
      percentDiscount: '',
      image: `${image.image_product_demo_2}`,
    },
    {
      id: 3,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      priceOriginal: '223000',
      percentDiscount: '15',
      image: `${image.image_product_demo_4}`,
    },
    {
      id: 4,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      priceOriginal: '223000',
      percentDiscount: '',
      image: `${image.image_product_demo_1}`,
    },
  ];
  const [bestSeller, setBestSeller] = useState([
    {
      id: '',
      item_id: '',
      option_id: '',
      group_id: '',
      short: '',
      title: '',
      price: '',
      price_sale: '',
      picture: '',
      num_sold: '',
      num_view: '',
      group: [{group_id: '', title: ''}],
    },
  ]);
  useEffect(() => {
    axios
      .get(
        'http://rpm.demo.app24h.net:81/api/v1/product?page=1&limit=6&filter[bestseller]=true',
      )
      .then(res => {
        const bestSeller = res.data.data;
        console.log(bestSeller);

        setBestSeller(
          bestSeller.map(item => ({
            id: item.id,
            item_id: item.item_id,
            option_id: item.option_id,
            group_id: item.group_id,
            short: item.short,
            title: item.title,
            price: item.price,
            price_sale: item.price_sale,
            picture: item.picture,
            num_sold: item.num_sold,
            num_view: item.num_view,
            group: item.group,
          })),
        );
        console.log(bestSeller);
      });
  }, []);
  const fakeDataProducts = [
    {
      id: 1,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      image: `${image.image_home_product_3}`,
      priceOriginal: '1300000',
      percentDiscount: '15',
    },
    {
      id: 2,
      nameProduct: 'Kixx CVTF/ATF Dual',
      image: `${image.image_home_product_1}`,
      priceOriginal: '143000',
      percentDiscount: '',
    },
    {
      id: 3,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      image: `${image.image_home_product_2}`,
      priceOriginal: '143000',
      percentDiscount: '',
    },
    {
      id: 4,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      image: `${image.image_home_product_3}`,
      priceOriginal: '1300000',
      percentDiscount: '15',
    },
    {
      id: 5,
      nameProduct: 'Kixx CVTF/ATF Dual',
      image: `${image.image_home_product_1}`,
      priceOriginal: '143000',
      percentDiscount: '',
    },
    {
      id: 6,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      image: `${image.image_home_product_2}`,
      priceOriginal: '143000',
      percentDiscount: '',
    },
    {
      id: 7,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      image: `${image.image_home_product_3}`,
      priceOriginal: '1300000',
      percentDiscount: '15',
    },
    {
      id: 8,
      nameProduct: 'Kixx CVTF/ATF Dual',
      image: `${image.image_home_product_1}`,
      priceOriginal: '143000',
      percentDiscount: '',
    },
    {
      id: 9,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      image: `${image.image_home_product_3}`,
      priceOriginal: '143000',
      percentDiscount: '',
    },
    {
      id: 10,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      image: `${image.image_home_product_2}`,
      priceOriginal: '1300000',
      percentDiscount: '15',
    },
  ];
  const fakeDataNews = [
    {
      id: 1,
      titleNews: `"Nhớt thật - Nhớt giả" - Thực trạng thị trường nhớt ở Việt Nam`,
      image: `${image.image_news_1}`,
      cateNews: 'Tin thị trường',
    },
    {
      id: 2,
      titleNews: `Cách chọn dầu nhớt cho xe côn tay và phân khối lớn`,
      image: `${image.image_news_2}`,
      cateNews: 'Kiến thức',
    },
    {
      id: 3,
      titleNews: `Cách chọn dầu nhớt cho xe côn tay và phân khối lớn`,
      image: `${image.image_news_3}`,
      cateNews: 'Kiến thức',
    },
    {
      id: 4,
      titleNews: `"Nhớt thật - Nhớt giả" - Thực trạng thị trường nhớt ở Việt Nam`,
      image: `${image.image_news_1}`,
      cateNews: 'Tin thị trường',
    },
    {
      id: 5,
      titleNews: `Cách chọn dầu nhớt cho xe côn tay và phân khối lớn`,
      image: `${image.image_news_2}`,
      cateNews: 'Kiến thức',
    },
    {
      id: 6,
      titleNews: `Cách chọn dầu nhớt cho xe côn tay và phân khối lớn`,
      image: `${image.image_news_3}`,
      cateNews: 'Kiến thức',
    },
  ];

  const imageHeader = [
    {id: 1, image: `${image.image_header_home_1}`},
    {id: 2, image: `${image.image_header_home_2}`},
  ];

  const topImageBannerProduct = [
    {id: 1, image: `${image.image_product_banner_home_1}`},
    {id: 2, image: `${image.image_product_banner_home_2}`},
  ];
  const midImageBannerProduct = [
    {id: 1, image: `${image.image_product_banner_home_1}`},
    {id: 3, image: `${image.image_product_banner_home_3}`},
  ];
  const bottomImageBannerProduct = [
    {id: 1, image: `${image.image_product_banner_home_1}`},
    {id: 2, image: `${image.image_product_banner_home_2}`},
  ];
  const [dataRecruitment, setDataRecruitment] = useState([
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
  useEffect(() => {
    axios.get('http://rpm.demo.app24h.net:81/api/v1/recruitment').then(res => {
      const recruitment = res.data.data;
      setDataRecruitment(
        recruitment.map(item => ({
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
      // console.log(dataRecruitment);
    });
  }, []);
  const limitRecruitment = dataRecruitment.slice(0, 5);
  console.log(limitRecruitment);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={style.headerContainer}>
          <Carousel
            loop
            autoPlay={true}
            width={width}
            height={width}
            data={imageHeader}
            renderItem={({item, index}) => (
              <View style={{flex: 1, left: 0}} key={index}>
                <Image
                  source={item.image}
                  style={{width: width, height: 294}}
                />
              </View>
            )}
          />
          <View
            style={{
              width: width,
              height: 35,
              position: 'absolute',
              top: 15,
              flexDirection: 'row',
              gap: 15,
            }}>
            <TextInput
              style={{
                width: 353,
                height: 35,
                left: 13,
                backgroundColor: '#fff',
                borderRadius: 23,
                paddingTop: 8,
                paddingLeft: 12,
                alignItems: 'center',
              }}
              placeholder="Tìm kiếm sản phẩm"
              placeholderTextColor={'#808080'}
            />
            <View>
              <Image source={icon.icon_cart} />
            </View>
          </View>
        </View>
        <View
          style={{
            width: width - 24,
            height: 'auto',
            left: 12,
            top: -19.5,
            zIndex: 100,
            backgroundColor: '#F3F7FC',
            borderRadius: 10,
            gap: 15,
          }}>
          <View
            style={{
              width: width - 24,
              height: 396,
              borderRadius: 10,
              backgroundColor: '#fff',
              gap: 23,
            }}>
            <View
              style={{
                width: 375,
                height: 58,
                left: 10,
                top: 13,
                flexDirection: 'row',
                gap: 88,
              }}>
              <View>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#212121'}}>
                  Kixx
                </Text>
                <Text
                  style={{fontSize: 25, fontWeight: 'bold', color: '#0060af'}}>
                  All Way With You
                </Text>
              </View>
              <Pressable
                onPress={() => navigation.navigate('AboutCompany')}
                style={{
                  width: 92,
                  height: 16,
                  top: 35,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'regular',
                    color: '#808080',
                  }}>
                  Tìm hiểu thêm
                </Text>
                <Image source={icon.icon_arrow} />
              </Pressable>
            </View>
            <View
              style={{
                width: 375,
                height: 216,
                left: 10,
                borderWidth: 1,
                borderColor: '#707070',
                backgroundColor: '#ffffff',
              }}>
              <Image source={video.video_1} style={{width: 375, height: 216}} />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'regular',
                color: '#212121',
                left: 10,
                lineHeight: 25,
                width: 375,
              }}>
              Dầu nhớt Số 1 Hàn Quốc _ Kixx luôn là thương hiệu dẫn đầu thị
              trường. Xếp thứ nhất trong các hạng mục khảo sát về mức độ hài
              lòng của người tiêu dùng.
            </Text>
          </View>
          <View style={style.bestSellerContainer}>
            <View
              style={{
                width: width - 48,
                height: 22.57,
                top: 15,
                left: 12,
                flexDirection: 'row',
                gap: 135,
              }}>
              <Image source={icon.icon_text_best_seller} />
              <View
                style={{
                  width: 71,
                  height: 16,
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff'}}>Xem tất cả</Text>
                <Image style={{color: '#fff'}} source={icon.icon_arrow_white} />
              </View>
            </View>
            <View style={{top: 12, width: width - 48, left: 12}}>
              <FlatList
                scrollEnabled={false}
                keyExtractor={item => item.id}
                data={bestSeller}
                renderItem={({item}) => (
                  <View style={style.itemBestSeller}>
                    <View style={style.imageBestSeller}>
                      {item.price_sale !== 0 && (
                        <View style={style.percentDiscounts}>
                          <Text style={style.textPercentDiscount}>
                            {(item.price_sale * 100) / item.price}%
                          </Text>
                        </View>
                      )}
                      {item.price_sale !== 0 && (
                        <Image
                          style={style.discountTicket}
                          source={icon.icon_discount}
                        />
                      )}
                      <Image
                        source={{uri: item.picture}}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'cover',
                          borderRadius: 5,
                        }}
                      />
                    </View>
                    <View style={style.infoProductBestSeller}>
                      <View style={style.titleBestSeller}>
                        <Text style={style.textTitleBestSeller}>
                          {item.title}
                        </Text>
                      </View>
                      <View style={style.priceBestSeller}>
                        {item.price_sale !== '' && (
                          <>
                            <Text
                              style={style.priceDiscount}>{`${formatCurrency(
                              item.price,
                            )}`}</Text>
                            <Text style={style.priceOriginal}>
                              {`${formatCurrency(item.price)}`}
                            </Text>
                          </>
                        )}
                        {item.price_sale === '' && (
                          <Text style={style.priceDiscount}>
                            {`${formatCurrency(item.price)}`}
                          </Text>
                        )}
                      </View>
                      <View style={style.footerBestSeller}>
                        <Text style={style.numberRate}> 4.1</Text>
                        <Image
                          style={style.iconRateStar}
                          source={icon.icon_rate_star}
                        />
                        <Text style={style.numberPersonInteract}>(246)</Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={{width: width - 24, height: 150}}>
            <Carousel
              loop
              autoPlay={true}
              width={width - 24}
              height={150}
              data={topImageBannerProduct}
              renderItem={({item, index}) => (
                <View style={{flex: 1}} key={index}>
                  <Image
                    source={item.image}
                    style={{width: width - 24, height: 150}}
                  />
                </View>
              )}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#0060af',
              textTransform: 'uppercase',
            }}>
            Sản phẩm
          </Text>
          <View
            style={{
              width: width - 24,
              height: 'auto',
              flexWrap: 'wrap',
              gap: 12,
              flexDirection: 'row',
            }}>
            {fakeDataProducts.map((item, index) => (
              <Pressable
                onPress={() => navigation.navigate('DetailProducts')}
                style={style.itemProducts}
                key={index}>
                <View style={style.imageProduct}>
                  {item.percentDiscount !== '' && (
                    <View style={style.percentDiscounts}>
                      <Text style={style.textPercentDiscount}>
                        {item.percentDiscount} %
                      </Text>
                    </View>
                  )}
                  {item.percentDiscount !== '' && (
                    <Image
                      style={[style.discountTicket, {top: 164.5}]}
                      source={icon.icon_discount}
                    />
                  )}
                  <Image
                    source={`${item.image}`}
                    style={{
                      width: '100%',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                </View>
                <View style={style.titleProduct}>
                  <Text style={style.nameProduct}>{item.nameProduct}</Text>
                  <View
                    style={{
                      width: 180,
                      borderWidth: 1,
                      borderColor: '#F3F7FC',
                    }}></View>
                  <View style={style.priceProduct}>
                    {item.percentDiscount !== '' && (
                      <>
                        <Text style={style.priceDiscount}>
                          {`${formatCurrency(
                            item.priceOriginal * (item.percentDiscount / 100),
                          )}`}
                        </Text>
                        <Text style={style.priceOriginal}>{`${formatCurrency(
                          item.priceOriginal,
                        )}`}</Text>
                      </>
                    )}
                    {item.percentDiscount === '' && (
                      <Text style={style.priceDiscount}>
                        {`${formatCurrency(item.priceOriginal)}`}
                      </Text>
                    )}
                  </View>
                  <View style={style.interactProduct}>
                    <Text style={style.numberRate}> 4.1</Text>
                    <Image
                      style={style.iconRateStar}
                      source={icon.icon_rate_star}
                    />
                    <Text style={style.numberPersonInteract}>(246)</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
          <View style={{width: width - 24, height: 150}}>
            <Carousel
              loop
              autoPlay={true}
              width={width - 24}
              height={150}
              data={midImageBannerProduct}
              renderItem={({item, index}) => (
                <View style={{flex: 1}} key={index}>
                  <Image
                    source={item.image}
                    style={{width: width - 24, height: 150}}
                  />
                </View>
              )}
            />
          </View>
          <View
            style={{
              width: width - 24,
              height: 22,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#0060af',
                textTransform: 'uppercase',
              }}>
              Chứng nhận
            </Text>
            <Pressable
              onPress={() => navigation.navigate('AboutCompany')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                right: 0,
                position: 'absolute',
              }}>
              <Text
                style={{fontWeight: 'regular', fontSize: 12, color: '#808080'}}>
                Xem tất cả
              </Text>
              <Image source={icon.icon_arrow} />
            </Pressable>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              width: 734,
              height: 284,
              flexDirection: 'row',
              gap: 12,
            }}>
            <View style={style.certificate}>
              <View style={style.imageCertificate}>
                <Image source={image.image_certificate} />
              </View>
              <View style={style.nameCertificate}>
                <Text style={style.textNameCertificate}>
                  (KS) MACHINERY OIL
                </Text>
              </View>
            </View>
            <View style={style.certificate}>
              <View style={style.imageCertificate}>
                <Image source={image.image_certificate} />
              </View>
              <View style={style.nameCertificate}>
                <Text style={style.textNameCertificate}>
                  (KS) MACHINERY OIL
                </Text>
              </View>
            </View>
            <View style={style.certificate}>
              <View style={style.imageCertificate}>
                <Image source={image.image_certificate} />
              </View>
              <View style={style.nameCertificate}>
                <Text style={style.textNameCertificate}>
                  (KS) MACHINERY OIL
                </Text>
              </View>
            </View>
            <View style={style.certificate}>
              <View style={style.imageCertificate}>
                <Image source={image.image_certificate} />
              </View>
              <View style={style.nameCertificate}>
                <Text style={style.textNameCertificate}>
                  (KS) MACHINERY OIL
                </Text>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              width: width - 24,
              height: 22,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#0060af',
                textTransform: 'uppercase',
              }}>
              Tin tức
            </Text>
            <Pressable
              onPress={() => navigation.navigate('News')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                right: 0,
                position: 'absolute',
              }}>
              <Text
                style={{fontSize: 12, fontWeight: 'regular', color: '#808080'}}>
                Xem tất cả
              </Text>
              <Image source={icon.icon_arrow} />
            </Pressable>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              width: 1560,
              height: 261,
              flexDirection: 'row',
              gap: 12,
              backgroundColor: '#fff',
            }}>
            {fakeDataNews.map((item, index) => (
              <View style={style.news} key={index}>
                <View style={style.imageNews}>
                  <Image source={item.image} />
                </View>
                <View style={style.cateNews}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'medium',
                      color: '#0060af',
                    }}>
                    {item.cateNews}
                  </Text>
                </View>
                <View style={style.titleNews}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      color: '#212121',
                      lineHeight: 20,
                    }}>
                    {item.titleNews}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={{width: width - 24, height: 150}}>
            <Carousel
              loop
              autoPlay={true}
              width={width - 24}
              height={150}
              data={bottomImageBannerProduct}
              renderItem={({item, index}) => (
                <View style={{flex: 1}} key={index}>
                  <Image
                    source={item.image}
                    style={{width: width - 24, height: 150}}
                  />
                </View>
              )}
            />
          </View>
          <View
            style={{
              width: width - 24,
              height: 22,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#0060af',
                textTransform: 'uppercase',
              }}>
              Tuyển dụng
            </Text>
            <Pressable
              onPress={() => navigation.navigate('Recruitment')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                right: 0,
                position: 'absolute',
              }}>
              <Text
                style={{fontSize: 12, fontWeight: 'regular', color: '#808080'}}>
                Xem tất cả
              </Text>
              <Image source={icon.icon_arrow} />
            </Pressable>
          </View>
          <View style={{width: width - 24, height: 550}}>
            <FlatList
              data={limitRecruitment}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => navigation.navigate('Recruitment')}
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
              )}
            />
          </View>
          <View
            style={{
              width: width - 24,
              height: 195,
              flexDirection: 'row',
              rowGap: 12,
              columnGap: 30,
              flexWrap: 'wrap',
            }}>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_1} />
            </View>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_2} />
            </View>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_1} />
            </View>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_2} />
            </View>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_1} />
            </View>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_2} />
            </View>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_1} />
            </View>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_2} />
            </View>
            <View style={{width: width / 3 - 30, height: 57}}>
              <Image source={image.image_logo_brand_demo_1} />
            </View>
          </View>
          <View
            style={{
              width: width - 24,
              height: 202,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <Text
              style={{
                height: 27,
                fontSize: 20,
                fontWeight: 'semibold',
                color: '#0060af',
                textTransform: 'uppercase',
                left: 19,
                top: 18,
              }}>
              Thông tin RPM
            </Text>
            <View
              style={{
                width: 130,
                height: 118,
                rowGap: 14,
                left: 19,
                top: 37,
              }}>
              <Pressable
                onPress={() => navigation.navigate('AboutCompany')}
                style={{flexDirection: 'row', gap: 13, alignItems: 'center'}}>
                <Image source={icon.icon_arrow_full_right} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Giới thiệu công ty
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('Recruitment')}
                style={{flexDirection: 'row', gap: 13, alignItems: 'center'}}>
                <Image source={icon.icon_arrow_full_right} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Tuyển dụng
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('Video')}
                style={{flexDirection: 'row', gap: 13, alignItems: 'center'}}>
                <Image source={icon.icon_arrow_full_right} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Video
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('Catalogue')}
                style={{flexDirection: 'row', gap: 13, alignItems: 'center'}}>
                <Image source={icon.icon_arrow_full_right} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Catalogue
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FC',
    paddingBottom: 'auto',
  },
  headerContainer: {
    width: width,
    height: 294,
  },
  bestSellerContainer: {
    width: width - 24,
    paddingBottom: 12.4,
    backgroundColor: '#0060af',
    gap: 12,
    borderRadius: 10,
  },
  itemBestSeller: {
    width: width - 48,
    height: 159.26,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  imageBestSeller: {
    width: 141,
    height: 143.26,
    backgroundColor: '#fff',
  },
  infoProductBestSeller: {
    width: 202.45,
    height: 123.26,
  },
  titleBestSeller: {
    width: 201,
    height: 43,
  },
  priceBestSeller: {
    height: 40,
    top: 8,
    gap: 4,
  },
  footerBestSeller: {
    width: 68,
    height: 20,
    top: 16.3,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9.4,
  },
  textTitleBestSeller: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
    lineHeight: 22,
  },
  priceDiscount: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 21,
    color: '#0060af',
  },
  priceOriginal: {
    fontSize: 12,
    fontWeight: 'regular',
    lineHeight: 22,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  numberRate: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fd6c31',
  },
  iconRateStar: {
    width: 10.35,
    height: 9.92,
  },
  numberPersonInteract: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#aaaaaa',
  },
  percentDiscounts: {
    width: 41,
    height: 22,
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#FF0000',
    zIndex: 10,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textPercentDiscount: {
    textAlign: 'center',
    color: '#ffffff',
  },
  discountTicket: {
    position: 'absolute',
    top: 110.95,
    zIndex: 10,
  },
  itemProducts: {
    width: (width - 24) / 2 - 6,
    height: 348.68,
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imageProduct: {
    width: (width - 24) / 2 - 6,
    height: 197.68,
  },
  titleProduct: {
    width: 180,
    height: 129,
    gap: 10,
  },
  nameProduct: {
    height: 43,
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
    lineHeight: 22,
  },
  priceProduct: {
    width: 100,
    height: 41,
    gap: 4,
  },
  interactProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9.4,
  },
  certificate: {
    width: 170,
    height: 284,
    gap: 12,
  },
  imageCertificate: {
    width: 170,
    height: 229,
  },
  nameCertificate: {
    width: 155,
    height: 43,
  },
  textNameCertificate: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
    color: '#212121',
  },
  news: {
    width: 250,
    height: 261,
  },
  imageNews: {
    height: 188,
    width: 250,
    marginBottom: 9,
    borderRadius: 10,
  },
  cateNews: {
    height: 19,
    marginBottom: 5,
  },
  titleNews: {
    height: 40,
  },
});
