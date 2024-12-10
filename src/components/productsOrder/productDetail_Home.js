import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {icon, image} from '../../assets/index';
import Carousel from 'react-native-reanimated-carousel';
import axios from 'axios';
import {formatNumber} from '../../utils/formatNumber';
import {formatCurrency} from '../../utils/fomatCurrency';
import RenderHTML from 'react-native-render-html';
import {formatToHTML} from '../../utils/formatToHTML';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ConvertTimeStamp} from '../../utils/convertTimeStamp';
export default function ProductDetail_Home({navigation, route}) {
  const [showChooseProduct, setShowChooseProduct] = useState(false);
  const [numberImg, setNumberImg] = useState(1);
  const [showModalEvalate, setShowModalEvaluate] = useState(false);
  const [saveProduct, setSaveProduct] = useState('Lưu sản phẩm');
  const [iconSaveProduct, setIconSaveProduct] = useState(
    `${icon.icon_save_product_gray}`,
  );
  const [favoriteProduct, setFavoriteProduct] = useState('Yêu thích');
  const [iconFavoriteProduct, setIconFavoriteProduct] = useState(
    `${icon.icon_like}`,
  );
  const [displayMenuThreePoint, setDisplayMenuThreePoint] = useState(false);
  const handlerSaveProduct = () => {
    setSaveProduct(prevSaveProduct =>
      prevSaveProduct === 'Lưu sản phẩm' ? 'Bỏ lưu sản phẩm' : 'Lưu sản phẩm',
    );
    setIconSaveProduct(prevIconSaveProduct =>
      prevIconSaveProduct === `${icon.icon_save_product_gray}`
        ? `${icon.icon_unsave_product}`
        : `${icon.icon_save_product_gray}`,
    );
  };
  const handlerFavoriteProduct = () => {
    setFavoriteProduct(prevFavoriteProduct =>
      prevFavoriteProduct === 'Bỏ thích' ? 'Yêu thích' : 'Bỏ thích',
    );
    setIconFavoriteProduct(prevIconFavoriteProduct =>
      prevIconFavoriteProduct === `${icon.icon_unlike}`
        ? `${icon.icon_like}`
        : `${icon.icon_unlike}`,
    );
  };
  const handlerMenuThreePoint = () => {
    setDisplayMenuThreePoint(!displayMenuThreePoint);
  };
  const handlerShowChooseProduct = () => {
    if (chooseType === null) {
      setChooseType(productInfo.option[0]);
    }
    setShowChooseProduct(!showChooseProduct);
  };
  const [productInfo, setProductInfo] = useState(null);
  const [productsRelated, setProductsRelated] = useState(null);
  useEffect(() => {
    if (route.params?.item_id && route.params?.group_id) {
      const item_id = route.params.item_id;
      const group_id = route.params.group_id;
      console.log('Item_iid: ' + item_id);
      axios
        .get(`http://rpm.demo.app24h.net:81/api/v1/product/${item_id}`)
        .then(res => {
          const product = res.data.data;
          setProductInfo(product);
        });
      axios
        .get(
          `http://rpm.demo.app24h.net:81/api/v1/product?filter[group_id]=${group_id}`,
        )
        .then(res => {
          const productsRelated = res.data.data;
          setProductsRelated(productsRelated);
        });
    }
  }, [route.params.item_id, route.params.group_id]);
  // console.log('Product Info');
  // console.log(productInfo);
  const [chooseType, setChooseType] = useState(null);
  const handlerChooseType = id => {
    const chooseProductType = productInfo.option.find(
      option => option.id === id,
    );
    setChooseType(chooseProductType);
  };
  console.log(chooseType);
  return (
    <View style={{flex: 1}}>
      {productInfo && (
        <ScrollView
          contentContainerStyle={[style.container, {paddingBottom: 500}]}
          showsVerticalScrollIndicator={false}>
          <StatusBar hidden={false} />
          <View>
            <View style={{width: width, height: width, top: 0}}>
              <View
                style={{
                  width: width,
                  height: width,
                  top: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {productInfo?.arr_picture &&
                Array.isArray(productInfo.arr_picture) ? (
                  <Carousel
                    loop
                    width={width}
                    height={width}
                    autoPlay
                    data={productInfo.arr_picture}
                    scrollAnimationDuration={1000}
                    onSnapToItem={index => setNumberImg(index + 1)}
                    renderItem={({item, index}) => (
                      <View style={{flex: 1}} key={index}>
                        <Image
                          source={{uri: item}}
                          style={{width: width, height: width}}
                        />
                      </View>
                    )}
                  />
                ) : (
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#212121',
                    }}>
                    No images available
                  </Text>
                )}
              </View>
            </View>
            <Pressable
              style={style.goBack}
              onPress={() => navigation.navigate('Home')}>
              <Image source={icon.icon_arrow_left} />
            </Pressable>
            <View style={style.topRightDetailProduct}>
              <View style={style.cart}>
                <Image source={icon.icon_cart} />
              </View>
              <Text style={style.numberProducts}>99+</Text>
              <Pressable
                onPress={handlerMenuThreePoint}
                style={style.menuThreePoint}>
                <Image source={icon.icon_menu_three_point} />
              </Pressable>
              {displayMenuThreePoint && (
                <View style={style.menuContainerThreePoint}>
                  <View style={[style.titleMenuThreePoint, {top: 11}]}>
                    <Image
                      style={style.iconTitleMenuThreePoint}
                      source={icon.icon_share}
                    />
                    <Text style={style.textTitleMenuThreePoint}>Chia sẻ</Text>
                  </View>
                  <View style={[style.seperator, {top: 29}]} />
                  <Pressable style={[style.titleMenuThreePoint, {top: 49}]}>
                    <Image
                      style={style.iconTitleMenuThreePoint}
                      source={iconSaveProduct}
                    />
                    <Text style={style.textTitleMenuThreePoint}>
                      {saveProduct}
                    </Text>
                  </Pressable>
                  <View style={[style.seperator, {top: 67}]} />
                  <Pressable style={[style.titleMenuThreePoint, {top: 87}]}>
                    <Image
                      style={style.iconTitleMenuThreePoint}
                      source={iconFavoriteProduct}
                    />
                    <Text style={style.textTitleMenuThreePoint}>
                      {favoriteProduct}
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>
            {productInfo.percent_discount !== 0 && (
              <View style={style.discountTicket}>
                <Image source={icon.icon_discount} />
              </View>
            )}
            {productInfo?.arr_picture &&
            Array.isArray(productInfo.arr_picture) ? (
              <View style={style.numberImage}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>
                  {numberImg + '/' + productInfo.arr_picture.length}
                </Text>
              </View>
            ) : (
              ''
            )}
          </View>
          <View style={{flex: 1, top: 13}}>
            <Text style={style.titleProduct}>{productInfo.group.title}</Text>
            <View style={[style.subTitleProduct]}>
              <Text style={style.nameProduct}>{productInfo.title}</Text>
              <Text style={style.numberCodeProduct}>
                SKU: {productInfo.item_code}
              </Text>
              <View style={style.interactPeopleWithProduct}>
                <View style={style.starRating}>
                  <Image source={icon.icon_range_rate_star} />
                  <Text
                    style={{
                      width: 20,
                      height: 19,
                      left: 10,
                      fontSize: 14,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    {formatNumber(productInfo.rate_avg)}
                  </Text>
                  <Text
                    style={{
                      width: 35,
                      height: 19,
                      left: 16,
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#212121',
                    }}>
                    ({productInfo.rate_count})
                  </Text>
                </View>
                <Text
                  style={{
                    width: 3,
                    height: 19,
                    left: 16,
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#808080',
                  }}>
                  |
                </Text>
                <Text
                  style={{
                    width: 25,
                    height: 19,
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#212121',
                    left: 20,
                  }}>
                  {productInfo.num_view}
                </Text>
                <Image style={{left: 25}} source={icon.icon_eye_seen} />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: width - 24,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
            </View>
            <View style={{rowGap: 5}}>
              <View style={[style.priceDiscount]}>
                <Text
                  style={{
                    height: 21,
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#FD6C31',
                  }}>
                  {formatCurrency(productInfo.price_sale)}
                </Text>
                {productInfo.percent_discount !== 0 && (
                  <View style={style.discount}>
                    <Text
                      style={{top: 4, color: '#ffffff', textAlign: 'center'}}>
                      - {productInfo.percent_discount}%
                    </Text>
                  </View>
                )}
              </View>
              {productInfo.percent_discount !== 0 && (
                <Text
                  style={{
                    width: 75,
                    height: 19,
                    left: 12,
                    top: 16,
                    textDecorationLine: 'line-through',
                  }}>
                  {formatCurrency(productInfo.price)}
                </Text>
              )}
            </View>
            <View style={style.seperator} />
            <View style={{width: width - 24}}>
              <Text
                style={{
                  width: 150,
                  height: 24,
                  left: 12,
                  top: 51,
                  fontSize: 18,
                  fontWeight: 'semibold',
                  color: '#212121',
                }}>
                Mô tả sản phẩm
              </Text>
              <View style={{width: width - 24, top: 70, left: 12, rowGap: 9}}>
                <View style={{width: width - 24}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Ứng dụng
                  </Text>
                  <View style={{width: width - 24, marginBottom: 35}}>
                    <RenderHTML
                      contentWidth={width}
                      tagsStyles={{
                        p: {
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                          lineHeight: 22,
                          marginBottom: -35,
                        },
                      }}
                      source={{html: `${formatToHTML(productInfo.content)}`}}
                    />
                  </View>
                </View>
                <View style={{width: width - 24}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Tiêu chuẩn hiệu suất
                  </Text>
                  <View style={{width: width - 24, marginBottom: 35}}>
                    <RenderHTML
                      contentWidth={width}
                      tagsStyles={{
                        p: {
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                          lineHeight: 22,
                          marginBottom: -35,
                        },
                      }}
                      source={{
                        html: `${formatToHTML(
                          productInfo.performance_standards,
                        )}`,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 76.17,
              height: 16,
              left: 172,
              top: 105,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 12,
            }}>
            <Text
              style={{color: '#0060af', fontSize: 12, fontWeight: 'regular'}}>
              Xem thêm
            </Text>
            <Icon
              name={'keyboard-arrow-down'}
              size={19}
              color={'#0060af'}
              style={{transform: [{rotate: '0deg'}]}}
            />
          </View>
          <View
            style={{
              width: width,
              height: 5,
              top: 133,
              backgroundColor: '#f1f1f1',
            }}
          />
          <View style={{top: 147, flexDirection: 'row'}}>
            <Text
              style={{
                height: 24,
                top: 0,
                left: 12,
                fontSize: 18,
                fontWeight: 'semibold',
                color: '#212121',
              }}>
              Đánh giá sản phẩm
            </Text>
            <Pressable onPress={() => setShowModalEvaluate(true)}>
              <Image style={{top: 4, left: 172}} source={icon.icon_see_all} />
            </Pressable>
          </View>
          <View
            style={{
              width: 250,
              height: 16,
              top: 158,
              left: 12,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <Image source={icon.icon_range_rate_star} />
            <Text
              style={{
                height: 16,
                fontSize: 12,
                fontWeight: 'regular',
                color: '#212121',
              }}>
              {formatNumber(productInfo.rate_avg)}
            </Text>
            <Text style={{height: 16, fontSize: 12, fontWeight: 'regular'}}>
              ({productInfo.rate_count} đánh giá)
            </Text>
          </View>
          <View
            style={{
              width: width - 24,
              height: 1,
              left: 12,
              top: 170,
              backgroundColor: '#f1f1f1',
            }}
          />
          <View
            style={{
              width: width - 24,
              rowGap: 12,
              top: 182,
              left: 12,
            }}>
            {productInfo.rate.length !== 0
              ? productInfo.rate.slice(0, 4).map(rate => (
                  <View style={[style.commentAboutProduct]}>
                    <View style={{width: 25, height: 25}}>
                      <Image
                        source={
                          rate.user_info?.picture
                            ? {uri: rate.user_info.picture}
                            : `${icon.icon_avatar}`
                        }
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 50,
                        }}
                      />
                    </View>
                    <View style={style.contentComment}>
                      <Text
                        style={{
                          height: 20,
                          fontSize: 15,
                          fontWeight: 'medium',
                          fontFamily: 'Be Vietnam Pro',
                          color: '#212121',
                        }}>
                        {rate.user_info.name}
                      </Text>
                      <Image
                        style={{top: 8}}
                        source={icon.icon_range_rate_star}
                      />
                      <Text
                        style={{
                          top: 8,
                          width: 350,
                          lineHeight: 18,
                          fontSize: 14,
                          fontWeight: 'regular',
                          color: '#212121',
                        }}>
                        {rate.content}
                      </Text>
                      {rate?.picture && Array.isArray(rate.picture) ? (
                        <View
                          style={{
                            width: 284,
                            top: 15,
                            flexDirection: 'row',
                            gap: 8,
                            marginBottom: 10,
                          }}>
                          {rate.picture.map(pic => (
                            <Image
                              source={{uri: pic}}
                              style={{width: 65, height: 65, borderRadius: 3}}
                            />
                          ))}
                        </View>
                      ) : (
                        ''
                      )}
                      <Text style={{height: 19, top: 8}}>
                        {ConvertTimeStamp(rate.created_at)}
                      </Text>
                    </View>
                  </View>
                ))
              : ''}
          </View>

          <View style={{width: width, height: 1732, top: 200}}>
            <Text
              style={{
                width: 208,
                height: 23,
                color: '#0060AF',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
                top: 12,
                left: 12,
              }}>
              SẢN PHẨM TƯƠNG TỰ
            </Text>
            <View
              style={{
                width: 404,
                height: 1430.73,
                left: 12,
                top: 47,
                flexWrap: 'wrap',
                gap: 12,
                flexDirection: 'row',
              }}>
              {productsRelated !== null
                ? productsRelated.map(related => (
                    <View style={style.itemSimilar}>
                      <View style={style.topItemSimilar}>
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          }}
                          source={{uri: related.picture}}
                        />
                        {related.price !== related.price_sale && (
                          <Image
                            style={{
                              position: 'absolute',
                              zIndex: 10,
                              top: 164.5,
                              left: 4,
                            }}
                            source={icon.icon_discount}
                          />
                        )}

                        {related.price !== related.price_sale && (
                          <View
                            style={{
                              width: 41,
                              height: 22,
                              position: 'absolute',
                              zIndex: 10,
                              top: 5,
                              left: 5,
                              backgroundColor: '#FF0000',
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                fontSize: 11,
                                fontWeight: 'semibold',
                                color: '#ffffff',
                              }}>
                              -{' '}
                              {formatNumber(
                                ((related.price - related.price_sale) * 100) /
                                  related.price,
                              )}{' '}
                              %
                            </Text>
                          </View>
                        )}
                      </View>
                      <View style={style.bottomItemSimilar}>
                        <Text
                          style={{
                            height: 43,
                            width: 180,
                            fontSize: 16,
                            lineHeight: 22,
                            fontWeight: 'semibold',
                            color: '#212121',
                          }}>
                          {related.title}
                        </Text>
                        <View style={{height: 36, justifyContent: 'center'}}>
                          {related.price === related.price_sale ? (
                            <Text
                              style={{
                                height: 21,
                                top: 18,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: '#0060af',
                              }}>
                              {formatCurrency(related.price)}
                            </Text>
                          ) : (
                            <Text
                              style={{
                                height: 21,
                                top: 18,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: '#0060af',
                              }}>
                              {formatCurrency(related.price_sale)}
                            </Text>
                          )}
                          {related.price === related.price_sale ? (
                            ''
                          ) : (
                            <Text
                              style={{
                                height: 16,
                                fontSize: 12,
                                fontWeight: 'regular',
                                top: 22,
                                color: '#212121',
                                textDecorationLine: 'line-through',
                              }}>
                              {formatCurrency(related.price)}
                            </Text>
                          )}
                        </View>
                        <View
                          style={{
                            width: 70.38,
                            height: 16,
                            top: 33,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 6.5,
                          }}>
                          <Text
                            style={{
                              color: '#FD6C31',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}>
                            {related.rate_avg === null
                              ? ''
                              : formatNumber(related.rate_avg)}
                          </Text>
                          <Image source={icon.icon_rate_star} />
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: 'regular',
                              color: '#AAAAAA',
                            }}>
                            ({related.num_view})
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))
                : ''}
            </View>
          </View>
        </ScrollView>
      )}
      {showChooseProduct && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={showChooseProduct}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={style.chooseProduct}>
              <View
                style={{
                  width: 395,
                  left: 12,
                  top: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  top: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#0060af',
                    textTransform: 'uppercase',
                  }}>
                  Chọn loại hàng
                </Text>
                <Pressable
                  onPress={() => setShowChooseProduct(false)}
                  style={{
                    width: 30,
                    height: 30,
                    right: 0,
                    position: 'absolute',
                  }}>
                  <Image source={icon.icon_close} />
                </Pressable>
              </View>
              {chooseType && (
                <View
                  style={{
                    width: 178,
                    height: 80,
                    flexDirection: 'row',
                    gap: 10,
                    top: 22,
                    left: 12,
                    alignItems: 'center',
                  }}>
                  <View style={{width: 80, height: 80, borderRadius: 8}}>
                    <Image
                      source={{uri: chooseType.Picture}}
                      style={{width: 80, height: 80, borderRadius: 8}}
                    />
                  </View>
                  {chooseType.Price === chooseType.PriceSale ? (
                    <View
                      style={{height: 44, gap: 7, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'semibold',
                          color: '#FD6C31',
                        }}>
                        {formatCurrency(chooseType.Price)}
                      </Text>
                    </View>
                  ) : (
                    <View style={{height: 44, gap: 7}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'semibold',
                          color: '#FD6C31',
                        }}>
                        {formatCurrency(chooseType.PriceSale)}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 'regular',
                          color: '#212121',
                          textDecorationLine: 'line-through',
                        }}>
                        {formatCurrency(chooseType.Price)}
                      </Text>
                    </View>
                  )}
                </View>
              )}
              <Text
                style={{
                  top: 33,
                  left: 12,
                  fontSize: 16,
                  fontWeight: 'semibold',
                  color: '#212121',
                }}>
                Phân loại
              </Text>
              <View
                style={{
                  width: width - 24,
                  height: 85,
                  left: 12,
                  top: 44,
                  gap: 11.5,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {showChooseProduct === true &&
                  productInfo.option.map(option => (
                    <Pressable
                      disabled={chooseType.useWarehouse === 0 ? true : false}
                      onPress={() => handlerChooseType(option.id)}
                      style={[
                        style.classify,
                        {
                          backgroundColor:
                            chooseType.useWarehouse !== 0
                              ? option.id === chooseType.id
                                ? '#0060af'
                                : '#fff'
                              : '#eee',
                          borderColor:
                            chooseType.useWarehouse !== 0
                              ? option.id === chooseType.id
                                ? 'none'
                                : '#707070'
                              : '#aaa',
                        },
                      ]}>
                      <Text
                        style={[
                          style.contentClassify,
                          {
                            color:
                              chooseType.useWarehouse !== 0
                                ? option.id === chooseType.id
                                  ? '#fff'
                                  : '#212121'
                                : '#808080',
                          },
                        ]}>
                        {option.Title}
                      </Text>
                    </Pressable>
                  ))}
                {/* <View
                  style={[
                    style.classify,
                    {backgroundColor: '#eee', borderColor: '#aaa'},
                  ]}>
                  <Text style={style.contentClassify}>0.3 L</Text>
                </View>
                <View style={style.classify}>
                  <Text style={style.contentClassify}>1 L</Text>
                </View>
                <View style={[style.classify, {backgroundColor: '#0060af'}]}>
                  <Text style={[style.contentClassify, {color: '#fff'}]}>
                    3 L
                  </Text>
                </View>
                <View style={style.classify}>
                  <Text style={style.contentClassify}>4 L</Text>
                </View>
                <View style={style.classify}>
                  <Text style={style.contentClassify}>18 L</Text>
                </View>
                <View style={style.classify}>
                  <Text style={style.contentClassify}>20 L</Text>
                </View>
                <View
                  style={[
                    style.classify,
                    {backgroundColor: '#eee', borderColor: '#aaa'},
                  ]}>
                  <Text style={style.contentClassify}>200 L</Text>
                </View> */}
              </View>
              <View
                style={{
                  width: 156,
                  height: 21,
                  left: 12,
                  top: 63,
                  flexDirection: 'row',
                  gap: 11,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Số lượng
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#808080',
                  }}>
                  (Tồn kho: <Text>{chooseType.useWarehouse})</Text>
                </Text>
              </View>
              <View
                style={{
                  width: 121,
                  height: 26,
                  left: 12,
                  top: 75,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Pressable>
                  <Image source={icon.icon_decrease} />
                </Pressable>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#212121',
                    height: 21,
                  }}>
                  {chooseType.is_OrderOutStock}
                </Text>
                <Pressable>
                  <Image source={icon.icon_increase} />
                </Pressable>
              </View>
              <Pressable
                onPress={() => navigation.navigate('Pay')}
                style={{
                  width: width,
                  height: 65,
                  left: 0,
                  top: 340,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                }}>
                <View
                  style={{
                    width: width - 24,
                    height: 45,
                    backgroundColor: '#0060af',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'medium', color: '#fff'}}>
                    Mua ngay
                  </Text>
                </View>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      <View style={style.addToCartAndBuy}>
        <View
          style={{
            width: 404,
            height: 45,
            left: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={{
              width: 190,
              height: 45,
              backgroundColor: '#0060af',
              borderRadius: 10,
              // left: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                height: 20,
                fontSize: 15,
                fontWeight: 'medium',
                color: '#ffffff',
              }}>
              Thêm vào giỏ hàng
            </Text>
          </Pressable>
          <Pressable
            onPress={handlerShowChooseProduct}
            style={{
              width: 190,
              height: 45,
              backgroundColor: '#fd6c31',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              right: 12,
            }}>
            <Text
              style={{
                height: 20,
                fontSize: 15,
                fontWeight: 'medium',
                color: '#ffffff',
              }}>
              Mua ngay
            </Text>
          </Pressable>
        </View>
      </View>
      <Modal visible={showModalEvalate} animationType="fade">
        <View style={[style.container, {flex: 1, backgroundColor: '#fff'}]}>
          <View style={style.titleContainer}>
            <Pressable
              style={style.title}
              onPress={() => setShowModalEvaluate(false)}>
              <Image source={icon.icon_arrow_left} />
              <Text style={style.textTitle}>Tất cả đánh giá</Text>
            </Pressable>
          </View>
          <View style={{flex: 1, top: 13.8}}>
            <ScrollView
              contentContainerStyle={{
                top: 0,
                backgroundColor: '#fff',
                paddingBottom: 1500,
              }}>
              <View
                style={{width: 390, height: 65, top: 0, left: 12, rowGap: 7}}>
                <View
                  style={{
                    width: 390,
                    height: 31,
                    flexDirection: 'row',
                    columnGap: 10,
                  }}>
                  <View
                    style={[style.itemEvaluate, {backgroundColor: '#0060af'}]}>
                    <Text style={style.contentItemEvaluate}>
                      <Text style={style.textContentItemEvaluate}>Tất cả</Text>
                      <Text style={style.textContentItemEvaluate}>(715)</Text>
                    </Text>
                  </View>
                  <View
                    style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                    <View style={style.contentItemEvaluate}>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        5
                      </Text>
                      <Image source={icon.icon_rate_star} />
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        (715)
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                    <View style={style.contentItemEvaluate}>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        4
                      </Text>
                      <Image source={icon.icon_rate_star} />
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        (715)
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                    <View style={style.contentItemEvaluate}>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        3
                      </Text>
                      <Image source={icon.icon_rate_star} />
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
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
                  <View
                    style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                    <View style={style.contentItemEvaluate}>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        2
                      </Text>
                      <Image source={icon.icon_rate_star} />
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        (715)
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                    <View style={style.contentItemEvaluate}>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        1
                      </Text>
                      <Image source={icon.icon_rate_star} />
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        (715)
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                    <View style={style.contentItemEvaluate}>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        Ảnh
                      </Text>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        (715)
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[style.itemEvaluate, {backgroundColor: '#f7f3fc'}]}>
                    <View style={style.contentItemEvaluate}>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
                        Bình luận
                      </Text>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: '#212121'},
                        ]}>
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
                  width: width - 24,
                  height: 1000,
                  top: 24,
                  left: 12,
                  rowGap: 12,
                }}>
                {showModalEvalate === true && productInfo.rate.length !== 0
                  ? productInfo.rate.map(rate => (
                      <>
                        <View style={style.itemEvaluateContainer}>
                          <View style={{width: 25, height: 25}}>
                            <Image
                              source={
                                rate.user_info?.picture
                                  ? {uri: rate.user_info.picture}
                                  : icon.icon_avatar
                              }
                              style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 50,
                              }}
                            />
                          </View>
                          <View style={style.contentComment}>
                            <Text
                              style={{
                                height: 20,
                                fontSize: 15,
                                fontWeight: 'medium',
                                fontFamily: 'Be Vietnam Pro',
                              }}>
                              {rate.user_info.name}
                            </Text>
                            <Image source={icon.icon_range_rate_star} />
                            <Text
                              style={{
                                width: 350,
                                height: 37,
                                lineHeight: 18,
                                fontSize: 14,
                                fontWeight: 'regular',
                              }}>
                              {rate.content}
                            </Text>
                            {rate?.picture && Array.isArray(rate.picture) ? (
                              <View
                                style={{
                                  width: 284,
                                  height: 65,
                                  flexDirection: 'row',
                                  columnGap: 8,
                                }}>
                                {rate.picture.map(pic => (
                                  <Image
                                    source={{uri: pic}}
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                      borderRadius: 3,
                                    }}
                                  />
                                ))}
                              </View>
                            ) : (
                              ''
                            )}
                            <Text style={{height: 19}}>
                              {ConvertTimeStamp(rate.created_at)}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: 395,
                            height: 1,
                            backgroundColor: '#F1F1F1',
                          }}
                        />
                      </>
                    ))
                  : ''}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F3F7FC',
    paddingBottom: 'auto',
  },
  goBack: {
    width: 28,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
    zIndex: 10,
    paddingLeft: 5,
  },
  topRightDetailProduct: {
    width: 195,
    height: 163,
    position: 'absolute',
    left: 221,
    top: 10,
    zIndex: 10,
  },
  cart: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 106,
    zIndex: 20,
  },
  numberProducts: {
    width: 26,
    height: 15,
    position: 'absolute',
    left: 128,
    top: 3,
    zIndex: 21,
    backgroundColor: '#E50000',
    borderRadius: 9,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'regular',
  },
  menuThreePoint: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 160,
    zIndex: 20,
  },
  menuContainerThreePoint: {
    width: 195,
    height: 119,
    position: 'absolute',
    top: 45,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingTop: 11,
    paddingBottom: 12,
  },
  titleMenuThreePoint: {
    width: 111,
    height: 19,
    position: 'absolute',
    left: 12,
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconTitleMenuThreePoint: {
    width: 13.91,
    height: 14.8,
    top: 2.61,
  },
  textTitleMenuThreePoint: {
    left: 24,
    fontSize: 14,
    fontWeight: 'regular',
  },
  seperator: {
    width: 195,
    height: 0,

    borderColor: '#f1f1f1',
  },
  discountTicket: {
    width: 115,
    height: 22,
    position: 'absolute',
    top: 396,
    paddingLeft: 10,
  },
  numberImage: {
    width: 38,
    height: 21,
    top: 397,
    left: 378,
    position: 'absolute',
    backgroundColor: '#212121',
    borderRadius: 15,
    zIndex: 100,
  },
  titleProduct: {
    width: 157,
    height: 19,
    left: 12,
    fontSize: 14,
    fontWeight: 'semibold',
    color: '#0060AF',
  },
  subTitleProduct: {
    width: 404,
    height: 96,
    left: 12,
    top: 9,
  },
  nameProduct: {
    width: 378,
    height: 23,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#212121',
  },
  numberCodeProduct: {
    width: 150,
    height: 19,
    top: 11,
    fontSize: 14,
    fontWeight: 'semibold',
    fontFamily: 'Be Vietnam Pro',
    color: '#212121',
  },
  interactPeopleWithProduct: {
    width: 234,
    height: 19,
    top: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceDiscount: {
    width: 145,
    height: 26,
    top: 20,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discount: {
    width: 40,
    height: 26,
    left: 28,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  seperator: {
    width: width,
    height: 5,
    left: 0,
    backgroundColor: '#F1F1F1',
    top: 35,
  },
  addToCartAndBuy: {
    width: width,
    height: 65,
    justifyContent: 'center',
  },
  commentAboutProduct: {
    width: 404,
    flexDirection: 'row',
  },
  contentComment: {
    width: 371,
    left: 33,
  },
  itemSimilar: {
    width: 194,
    height: 348.68,
    borderColor: '#707070',
    backgroundColor: '#ffffff',
    gap: 10,
    alignItems: 'center',
  },
  topItemSimilar: {
    width: 194,
    height: 197.68,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomItemSimilar: {
    width: 180,
    height: 129,
  },
  chooseProduct: {
    width: width,
    height: 425,
    top: height - 425,
    position: 'absolute',
    backgroundColor: '#fff',
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  classify: {
    height: 37,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#212121',
    backgroundColor: '#fff',
    borderRadius: 18,
  },
  contentClassify: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#212121',
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
