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
import {image, icon} from '@assets';
import Carousel from 'react-native-reanimated-carousel';
import {useEffect} from 'react';
import Video from 'react-native-video';
import {formatNumber, formatCurrency, ConvertTimeStamp} from 'utils';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'redux/actions';
import Icon from 'react-native-vector-icons/AntDesign';
import RenderHTML from 'react-native-render-html';
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_BEST_SELLER,
    });
    dispatch({
      type: actions.GET_NEW,
    });
    dispatch({
      type: actions.GET_PRODUCT_LIST,
    });
    dispatch({
      type: actions.GET_RECRUITMENT,
    });
    dispatch({
      type: actions.GET_BRAND_PARTNER,
    });
    dispatch({
      type: actions.GET_CERTIFICATE,
      params: {type: 5},
    });
    dispatch({
      type: actions.GET_VIDEO,
    });
    dispatch({type: actions.GET_TOKEN});
    dispatch({
      type: actions.GET_ABOUT,
      params: {type: 0},
    });
    dispatch({
      type: actions.GET_BANNER,
    });
  }, []);

  const news = useSelector(state => state.getNew?.data || []);
  const limitNews = news.slice(0, 6);
  const products = useSelector(state => state.getProductsList?.data || []);
  const bestSeller = useSelector(
    state => state.getProductsBestSeller?.data || [],
  );

  const certificate = useSelector(state => state.getCertificate?.data || []);
  const videos = useSelector(state => state.getVideo?.data || []);
  const recruitment = useSelector(state => state.getRecruitment?.data || []);
  const about = useSelector(state => state.getAbout?.data || []);
  const banner = useSelector(state => state.getBanner?.data || []);
  const limitRecruitment = recruitment.slice(0, 5);
  const videoHome = videos.filter(item => item.id === 31);
  const partner = banner.filter(item => item.group_name === 'brand');
  const bannerMain = banner.filter(
    item => item.group_name === 'app-banner-main',
  );
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
              columnGap: 15,
            }}>
            <TextInput
              style={style.searchInput}
              placeholder="Tìm kiếm sản phẩm"
              placeholderTextColor="#808080"
              returnKeyType="search"
              accessibilityLabel="Search products input"
            />
            <Pressable
              onPress={() => commonRoot.navigate(router.CART)}
              style={{
                width: 35,
                right: 3,
                position: 'absolute',
                aspectRatio: 1 / 1,
                borderRadius: 18,
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={icon.icon_cart} />
            </Pressable>
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
              borderRadius: 10,
              backgroundColor: '#fff',
              gap: 23,
            }}>
            <View
              style={{
                width: width - 44,
                height: 58,
                left: 10,
                top: 13,
                flexDirection: 'row',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#212121',
                    fontFamily: '',
                  }}>
                  Kixx
                </Text>
                <Text
                  style={{fontSize: 25, fontWeight: 'bold', color: '#0060af'}}>
                  All Way With You
                </Text>
              </View>
              <Pressable
                onPress={() => commonRoot.navigate(router.ABOUT_COMPANY)}
                style={{
                  height: 16,
                  top: 31,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  right: 10,
                  position: 'absolute',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'regular',
                    color: '#808080',
                  }}>
                  Tìm hiểu thêm
                </Text>
                <Icon name="arrowright" size={12.8} color="#808080" />
              </Pressable>
            </View>
            <View
              style={{
                width: width - 44,
                height: 216,
                left: 10,
                borderRadius: 5,
              }}>
              {videoHome.map(item => (
                <Video
                  source={{uri: `${item.video_file}`}}
                  style={{width: '100%', height: '100%', borderRadius: 5}}
                  repeat={true}
                  muted={true}
                />
              ))}
            </View>
            <View style={{width: width - 44}}>
              <RenderHTML
                source={{html: about.content}}
                contentWidth={width}
                tagsStyles={{
                  p: {
                    fontSize: 15,
                    fontWeight: 'regular',
                    color: '#212121',
                    lineHeight: 25,
                    left: 10,
                    position: 'absolute',
                    bottom: 19,
                    marginBottom: -10,
                  },
                }}
              />
            </View>
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
                justifyContent: 'space-between',
              }}>
              <Image source={icon.icon_text_best_seller} />
              <View
                style={{
                  width: 72,
                  height: 16,
                  flexDirection: 'row',
                  columnGap: 5,
                  alignItems: 'center',
                  position: 'absolute',
                  right: 12,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: 'regular', color: '#fff'}}>
                  Xem tất cả
                </Text>
                <Icon name="arrowright" color="#fff" size={12.8} />
              </View>
            </View>
            <View style={{top: 12, width: width - 48, left: 12, rowGap: 12}}>
              {bestSeller.map(item => (
                <Pressable
                  onPress={() =>
                    commonRoot.navigate(router.PRODUCT_DETAIL, {
                      item_id: item.item_id,
                      group_id: item.group.group_id,
                    })
                  }
                  key={item.id}
                  style={style.itemBestSeller}>
                  <View style={style.imageBestSeller}>
                    {item.price_sale !== item.price && (
                      <View style={style.percentDiscounts}>
                        <Text style={style.textPercentDiscount}>
                          {((item.price - item.price_sale) * 100) / item.price}%
                        </Text>
                      </View>
                    )}
                    {item.price_sale !== item.price && (
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
                      {item.price_sale !== item.price ? (
                        <>
                          <Text style={style.priceDiscount}>{`${formatCurrency(
                            item.price_sale,
                          )}`}</Text>
                          <Text style={style.priceOriginal}>
                            {`${formatCurrency(item.price)}`}
                          </Text>
                        </>
                      ) : (
                        <Text style={style.priceDiscount}>{`${formatCurrency(
                          item.price,
                        )}`}</Text>
                      )}
                      {item.price_sale === '' && (
                        <Text style={style.priceDiscount}>
                          {`${formatCurrency(item.price)}`}
                        </Text>
                      )}
                    </View>
                    <View style={style.footerBestSeller}>
                      <Text style={style.numberRate}>
                        {' '}
                        {formatNumber(item.rate_avg)}
                      </Text>
                      <Image
                        style={style.iconRateStar}
                        source={icon.icon_rate_star}
                      />
                      <Text style={style.numberPersonInteract}>
                        ({item.num_view})
                      </Text>
                    </View>
                  </View>
                </Pressable>
              ))}
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
            {products.map(item =>
              item.children.slice(0, 3).map(child =>
                child.product.slice(0, 2).map(pro => (
                  <Pressable
                    onPress={() =>
                      commonRoot.navigate(router.PRODUCT_DETAIL, {
                        item_id: pro.item_id,
                        group_id: item.group_id,
                      })
                    }
                    style={style.itemProducts}>
                    <View style={style.imageProduct}>
                      {pro.percent_discount !== 0 && (
                        <View style={style.percentDiscounts}>
                          <Text style={style.textPercentDiscount}>
                            {pro.percent_discount} %
                          </Text>
                        </View>
                      )}
                      {pro.percent_discount !== 0 && (
                        <Image
                          style={[style.discountTicket, {top: 164.5}]}
                          source={icon.icon_discount}
                        />
                      )}
                      <Image
                        source={{uri: `${pro.picture}`}}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                    </View>
                    <View style={style.titleProduct}>
                      <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={style.nameProduct}>
                        {pro.title}
                      </Text>
                      <View
                        style={{
                          width: (width - 24) / 2 - 22,
                          borderWidth: 1,
                          borderColor: '#F3F7FC',
                        }}></View>
                      <View style={style.priceProduct}>
                        {pro.percent_discount !== 0 && (
                          <>
                            <Text style={style.priceDiscount}>
                              {`${formatCurrency(
                                pro.price -
                                  pro.price * (pro.percent_discount / 100),
                              )}`}
                            </Text>
                            <Text
                              style={style.priceOriginal}>{`${formatCurrency(
                              pro.price,
                            )}`}</Text>
                          </>
                        )}
                        {pro.percent_discount === 0 && (
                          <Text style={style.priceDiscount}>
                            {`${formatCurrency(pro.price)}`}
                          </Text>
                        )}
                      </View>
                      <View style={style.interactProduct}>
                        <Text style={style.numberRate}>
                          {formatNumber(4.1)}
                        </Text>
                        <Image
                          style={style.iconRateStar}
                          source={icon.icon_rate_star}
                        />
                        <Text style={style.numberPersonInteract}>
                          ({pro.num_view})
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                )),
              ),
            )}
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
            {certificate.length === 0
              ? ''
              : certificate[0].item.slice(0, 4).map(item => (
                  <View style={style.certificate} key={item.item_id}>
                    <View style={style.imageCertificate}>
                      <Image
                        source={{uri: item.picture}}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'cover',
                        }}
                      />
                    </View>
                    <View style={style.nameCertificate}>
                      <Text style={style.textNameCertificate}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                ))}
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
              onPress={() => commonRoot.navigate(router.NEW)}
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
            {limitNews.map((item, index) => (
              <Pressable
                onPress={() => commonRoot.navigate(router.NEW)}
                style={style.news}
                key={index}>
                <View style={style.imageNews}>
                  <Image
                    source={{uri: `${item.picture}`}}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View style={style.cateNews}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'medium',
                      color: '#0060af',
                    }}>
                    {item.group.title}
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
                    {item.title}
                  </Text>
                </View>
              </Pressable>
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
              onPress={() => commonRoot.navigate(router.RECRUITMENT)}
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
            {limitRecruitment.map(item => (
              <Pressable
                key={item.item_id}
                onPress={() => commonRoot.navigate(router.RECRUITMENT)}
                style={{
                  width: width - 24,
                  height: 102,
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                  justifyContent: 'center',
                  marginBottom: 10,
                }}>
                <View style={{left: 12, height: 79, rowGap: 10}}>
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
          </View>
          <View
            style={{
              width: width - 24,
              flexDirection: 'row',
              rowGap: 12,
              columnGap: 30,
              flexWrap: 'wrap',
            }}>
            {partner.map(item => (
              <View style={{width: width / 3 - 30, height: 57}}>
                <Image
                  source={{uri: `${item.content}`}}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
            ))}
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
                onPress={() => commonRoot.navigate(router.ABOUT_COMPANY)}
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
                onPress={() => commonRoot.navigate(router.RECRUITMENT)}
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
                onPress={() => commonRoot.navigate(router.VIDEO)}
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
                onPress={() => commonRoot.navigate(router.CATALOGUE)}
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
  searchInput: {
    width: width - 75,
    height: 35,
    marginLeft: 13,
    backgroundColor: '#fff',
    borderRadius: 23,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 13,
    fontWeight: '400',
    includeFontPadding: false,
    textAlignVertical: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  bestSellerContainer: {
    width: width - 24,
    backgroundColor: '#0060af',
    rowGap: 12,
    borderRadius: 10,
    paddingBottom: 24,
  },
  itemBestSeller: {
    width: width - 48,
    height: 159.26,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageBestSeller: {
    width: 141,
    height: 143.26,
    backgroundColor: '#fff',
    left: 8,
  },
  infoProductBestSeller: {
    width: 202.45,
    height: 123.26,
  },
  titleBestSeller: {
    width: width - 227,
  },
  priceBestSeller: {
    height: 40,
    top: 8,
    gap: 4,
    justifyContent: 'center',
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
    fontSize: 12,
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
    rowGap: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imageProduct: {
    width: (width - 24) / 2 - 6,
    height: 197.68,
  },
  titleProduct: {
    width: (width - 24) / 2 - 22,
    height: 129,
    rowGap: 10,
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
    lineHeight: 22,
  },
  priceProduct: {
    width: 100,
    height: 41,
    gap: 4,
    justifyContent: 'center',
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
