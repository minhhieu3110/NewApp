import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {icon} from '@assets';
import Carousel from 'react-native-reanimated-carousel';
import RenderHTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  ConvertDateTimeStamp,
  formatCurrency,
  formatNumber,
  formatToHTML,
} from 'utils';
import {commonRoot, root} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'redux/actions';
import {array} from 'yup';

export default function ProductDetail({route, item_id, group_id}) {
  const dispatch = useDispatch();
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
  const handlerPayNow = () => {
    setShowChooseProduct(!showChooseProduct);
    commonRoot.navigate(router.PAY);
  };
  useEffect(() => {
    item_id = route.params?.item_id;
    group_id = route.params?.group_id;
    dispatch({
      type: actions.GET_DETAIL_PRODUCT,
      params: {
        item_id: item_id,
      },
    });
    dispatch({
      type: actions.GET_PRODUCT_RELATED,
      params: {
        group_id: group_id,
      },
    });
    dispatch({
      type: actions.GET_REVIEW_PRODUCT,
      params: {
        product_id: item_id,
      },
    });
    dispatch({
      type: actions.SAVE_USER_INFO,
    });
  }, []);
  const token = useSelector(state => state.user.token);
  console.log('token', token);
  const productInfo = useSelector(state => state.getDetailProduct?.data || []);
  const productsRelated = useSelector(
    state => state.getProductRelated?.data || [],
  );
  const [chooseType, setChooseType] = useState(null);
  const handlerChooseType = id => {
    const chooseProductType = productInfo.option.find(
      option => option.id === id,
    );
    setChooseType(chooseProductType);
  };
  const handlerProductRelated = (item_id, group_id) => {
    dispatch({
      type: actions.GET_DETAIL_PRODUCT,
      params: {
        item_id: item_id,
      },
    });
    dispatch({
      type: actions.GET_PRODUCT_RELATED,
      params: {
        group_id: group_id,
      },
    });
    dispatch({
      type: actions.GET_REVIEW_PRODUCT,
      params: {
        product_id: item_id,
      },
    });
  };
  const reviewsProduct = useSelector(
    state => state.getReviewProduct?.count || [],
  );
  const reviewsProductComments = useSelector(
    state => state.getReviewProduct?.data || [],
  );
  const addToCart = () => {
    dispatch({
      type: actions.UPDATE_CART_OF_YOU,
      body: {
        item_id: productInfo.item_id,
        option_id: productInfo.option_id,
        combo_id: productInfo.combo_id,
        quantity: 1,
        is_active: 1,
      },
    });
  };
  return (
    <View style={{flex: 1}}>
      {productInfo.length === 0 ? (
        <Text style={{textAlign: 'center', marginTop: 20, color: '#808080'}}>
          No information product available.
        </Text>
      ) : (
        productInfo && (
          <ScrollView
            contentContainerStyle={[style.container, {paddingBottom: 1500}]}
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
                    <View style={{width: width, height: width}}>
                      <Image
                        source={{uri: productInfo.picture}}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                  )}
                </View>
              </View>
              <Pressable style={style.goBack} onPress={() => root.goBack()}>
                <Image source={icon.icon_arrow_left} />
              </Pressable>
              <View style={style.topRightDetailProduct}>
                <View
                  style={{
                    width: 44,
                    height: 35,
                    position: 'absolute',
                    right: 45,
                  }}>
                  <Pressable
                    onPress={() => commonRoot.navigate(router.CART)}
                    style={{
                      width: 35,
                      aspectRatio: 1 / 1,
                      borderRadius: 18,
                      backgroundColor: '#707070',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={icon.icon_cart} />
                  </Pressable>
                  <Text style={style.numberProducts}>99+</Text>
                </View>
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
                    <View style={{flexDirection: 'row', columnGap: 5}}>
                      {Array.from({length: productInfo.rate_avg}).map(
                        (_, index) => (
                          <Fontisto
                            key={index}
                            name="star"
                            color="#FEC007"
                            size={17.7}
                          />
                        ),
                      )}
                      {Array.from({length: 5 - productInfo.rate_avg}).map(
                        (_, index) => (
                          <Fontisto
                            key={index}
                            name="star"
                            color="#f1f1f1"
                            size={17.7}
                          />
                        ),
                      )}
                    </View>
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
                        style={{
                          top: 4,
                          color: '#ffffff',
                          textAlign: 'center',
                        }}>
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
              <View style={style.seperator2} />
              <View style={{width: width - 24, marginBottom: 35}}>
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
                {/* <View
                  style={{width: width - 24, top: 70, left: 12, columnGap: 9}}>
                  <View>
                    <Text style={style.titleDescription}>Ứng dụng</Text>
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
                          html: `${formatToHTML(productInfo.short)}`,
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={style.titleDescription}>
                      Tiêu chuẩn hiệu suất
                    </Text>
                    <View style={{width: width - 24}}>
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
                </View> */}
                <View
                  style={{
                    width: width - 24,
                    left: 12,
                    top: 64,
                    rowGap: 9,
                  }}>
                  <View>
                    <Text style={style.titleDescription}>Ứng dụng</Text>
                    <RenderHTML
                      contentWidth={width - 24}
                      tagsStyles={{
                        p: {
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                          lineHeight: 22,
                        },
                      }}
                      source={{
                        html: `${formatToHTML(productInfo.short)}`,
                      }}
                    />
                  </View>
                  <View style={{}}>
                    <Text style={style.titleDescription}>
                      Tiêu chuẩn hiệu suất
                    </Text>
                    <RenderHTML
                      contentWidth={width}
                      tagsStyles={{
                        p: {
                          fontSize: 15,
                          fontWeight: 'regular',
                          color: '#212121',
                          lineHeight: 22,
                          marginBottom: -22,
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
                    style={{
                      color: '#0060af',
                      fontSize: 12,
                      fontWeight: 'regular',
                    }}>
                    Xem thêm
                  </Text>
                  <Icon
                    name={'keyboard-arrow-up'}
                    size={19}
                    color={'#0060af'}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                width: width,
                height: 5,
                top: 133,
                backgroundColor: '#f1f1f1',
              }}
            />
            <View
              style={{top: 147, flexDirection: 'row', alignItems: 'center'}}>
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
              <Pressable
                onPress={() => setShowModalEvaluate(!showModalEvalate)}
                style={{
                  flexDirection: 'row',
                  height: 13,
                  position: 'absolute',
                  right: 12,
                  columnGap: 8,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'regular',
                    color: '#0060af',
                  }}>
                  Xem tất cả
                </Text>
                <AntDesign name="arrowright" size={12.8} color="#0060af" />
              </Pressable>
            </View>
            <View
              style={{
                width: 250,
                top: 158,
                left: 12,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}>
              <View style={{flexDirection: 'row', columnGap: 5}}>
                {Array.from({length: productInfo.rate_avg}).map((_, index) => (
                  <Fontisto
                    key={index}
                    name="star"
                    color="#FEC007"
                    size={17.7}
                  />
                ))}
                {Array.from({length: 5 - productInfo.rate_avg}).map(
                  (_, index) => (
                    <Fontisto
                      key={index}
                      name="star"
                      color="#f1f1f1"
                      size={17.7}
                    />
                  ),
                )}
              </View>
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
              {reviewsProductComments.length > 0
                ? reviewsProductComments.map(comment => (
                    <>
                      <View style={style.itemEvaluateContainer}>
                        <View style={{width: 25, height: 25}}>
                          <Image
                            source={
                              comment.user_info?.picture
                                ? {uri: comment.user_info.picture}
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
                            {comment.user_info.name}
                          </Text>
                          <View style={{flexDirection: 'row', columnGap: 5}}>
                            {Array.from({length: comment.rate}).map(
                              (_, index) => (
                                <Fontisto
                                  name="star"
                                  color="#FEC007"
                                  size={17.7}
                                />
                              ),
                            )}
                            {Array.from({length: 5 - comment.rate}).map(
                              (_, index) => (
                                <Fontisto
                                  name="star"
                                  color="#f1f1f1"
                                  size={17.7}
                                />
                              ),
                            )}
                          </View>
                          <Text
                            style={{
                              width: 350,
                              height: 37,
                              lineHeight: 18,
                              fontSize: 14,
                              fontWeight: 'regular',
                            }}>
                            {comment.content}
                          </Text>
                          {comment?.picture &&
                          Array.isArray(comment.picture) ? (
                            <View
                              style={{
                                width: 284,
                                height: 65,
                                flexDirection: 'row',
                                columnGap: 8,
                              }}>
                              {comment.picture.map(pic => (
                                <View
                                  style={{
                                    width: 65,
                                    height: 65,
                                  }}>
                                  <Image
                                    source={{uri: pic}}
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                      borderRadius: 3,
                                    }}
                                  />
                                </View>
                              ))}
                            </View>
                          ) : (
                            ''
                          )}
                          <Text style={{height: 19}}>
                            {ConvertDateTimeStamp(comment.created_at)}
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
                  width: width - 24,
                  height: 1430.73,
                  left: 12,
                  top: 47,
                  flexWrap: 'wrap',
                  gap: 12,
                  flexDirection: 'row',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                {productsRelated === null ? (
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 20,
                      color: '#808080',
                    }}>
                    No information product available.
                  </Text>
                ) : productsRelated !== null ? (
                  productsRelated.map(related => (
                    <Pressable
                      onPress={() =>
                        handlerProductRelated(related.item_id, related.group_id)
                      }
                      style={style.itemSimilar}>
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
                    </Pressable>
                  ))
                ) : (
                  ''
                )}
              </View>
            </View>
          </ScrollView>
        )
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
                  width: width - 24,
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
                onPress={() =>
                  commonRoot.navigate(router.PAY, {
                    item_id: productInfo.item_id,
                  })
                }
                style={{
                  width: width,
                  height: 65,
                  left: 0,
                  top: 340,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                }}>
                <Pressable
                  onPress={handlerPayNow}
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
                </Pressable>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      <View style={style.addToCartAndBuy}>
        <View
          style={{
            width: width,
            height: 45,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable
            onPress={() => addToCart()}
            style={{
              width: (width - 24) / 2 - 5,
              height: 45,
              backgroundColor: '#0060af',
              borderRadius: 10,
              left: 12,
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
              width: (width - 24) / 2 - 5,
              height: 45,
              backgroundColor: '#fd6c31',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
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
        <SafeAreaView
          style={[style.container, {flex: 1, backgroundColor: '#fff'}]}>
          <View style={style.titleContainer}>
            <Pressable
              style={style.title}
              onPress={() => setShowModalEvaluate(!showModalEvalate)}>
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
                style={{
                  width: 390,
                  height: 65,
                  top: 0,
                  left: 12,
                  rowGap: 7,
                  columnGap: 10,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {reviewsProduct.map(item => (
                  <View
                    style={[
                      style.itemEvaluate,
                      {
                        backgroundColor:
                          item.type === 'all' ? '#0060af' : '#f3f7fc',
                      },
                    ]}>
                    <View style={style.contentItemEvaluate}>
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: item.type === 'all' ? '#fff' : '#212121'},
                        ]}>
                        {item.title}
                      </Text>
                      {item.img && (
                        <Image
                          source={{uri: `${item.img}`}}
                          style={{width: 14, height: 13.41}}
                        />
                      )}
                      <Text
                        style={[
                          style.textContentItemEvaluate,
                          {color: item.type === 'all' ? '#fff' : '#808080'},
                        ]}>
                        ({item.value})
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
              <View
                style={{
                  width: width,
                  height: 5,
                  top: 12,
                  left: 0,
                  backgroundColor: '#F1F1F1',
                }}></View>
              <View
                style={{
                  width: width - 24,
                  top: 24,
                  left: 12,
                  rowGap: 12,
                }}>
                {showModalEvalate === true && reviewsProductComments.length > 0
                  ? reviewsProductComments.map(comment => (
                      <>
                        <View style={style.itemEvaluateContainer}>
                          <View style={{width: 25, height: 25}}>
                            <Image
                              source={
                                comment.user_info?.picture
                                  ? {uri: comment.user_info.picture}
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
                              {comment.user_info.name}
                            </Text>
                            <View style={{flexDirection: 'row', columnGap: 5}}>
                              {Array.from({length: comment.rate}).map(
                                (_, index) => (
                                  <Fontisto
                                    name="star"
                                    color="#FEC007"
                                    size={17.7}
                                  />
                                ),
                              )}
                              {Array.from({length: 5 - comment.rate}).map(
                                (_, index) => (
                                  <Fontisto
                                    name="star"
                                    color="#f1f1f1"
                                    size={17.7}
                                  />
                                ),
                              )}
                            </View>
                            <Text
                              style={{
                                width: 350,
                                height: 37,
                                lineHeight: 18,
                                fontSize: 14,
                                fontWeight: 'regular',
                              }}>
                              {comment.content}
                            </Text>
                            {comment?.picture &&
                            Array.isArray(comment.picture) ? (
                              <View
                                style={{
                                  width: 284,
                                  height: 65,
                                  flexDirection: 'row',
                                  columnGap: 8,
                                }}>
                                {comment.picture.map(pic => (
                                  <View
                                    style={{
                                      width: 65,
                                      height: 65,
                                    }}>
                                    <Image
                                      source={{uri: pic}}
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 3,
                                      }}
                                    />
                                  </View>
                                ))}
                              </View>
                            ) : (
                              ''
                            )}
                            <Text style={{height: 19}}>
                              {ConvertDateTimeStamp(comment.created_at)}
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
        </SafeAreaView>
      </Modal>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
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
    right: 12,
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
    right: 0,
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
    color: '#212121',
  },
  seperator: {
    width: 195,
    borderWidth: 1,
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
  seperator2: {
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
    width: (width - 24) / 2 - 6,
    height: 348.68,
    borderColor: '#707070',
    backgroundColor: '#ffffff',
    gap: 10,
    alignItems: 'center',
  },
  topItemSimilar: {
    width: (width - 24) / 2 - 6,
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
  },
  titleDescription: {
    fontSize: 15,
    fontWeight: 'semibold',
    color: '#212121',
    lineHeight: 25,
  },
  contentItemEvaluate: {
    width: 65,
    height: 12.1,
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'center',
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
