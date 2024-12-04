import * as React from 'react';
import {useState} from 'react';
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
export default function ProductDetail_Home({navigation}) {
  const [showChooseProduct, setShowChooseProduct] = useState(false);
  const [numberImg, setNumberImg] = useState(1);
  const [countProducts, setCountProducts] = useState(1);
  const contentApplication = [
    {id: 1, content: 'Xe điện hybrid (HEV) được trang bị động cơ xăng'},
    {
      id: 2,
      content:
        'Đối với Kixx Hybrid 0W-16, chỉ dùng cho những động cơ mà nhà sản xuất khuyên dùng dầu động cơ có độ nhớt SAE 0W-16',
    },
  ];
  const performanceStandards = [
    {id: 1, content: '0W-16: API SP-RC, ILSAC GF-6B Được khuyến cáo'},
    {
      id: 2,
      content:
        ' 0W-20: API SP-RC, ILSAC GF-6A, GM dexos1 Gen2   Được khuyến cáo',
    },
  ];
  const comments = [
    {
      id: 1,
      name: 'Hoàng Trung',
      avatar: 'icon.icon_avatar_comment.png',
      contentComment:
        'Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính hãng 100%, nguyên seal, giao nhanh',
      imageComments: [
        {id: 1, image: 'image_comment_demo_1'},
        {id: 2, image: 'image_comment_demo_2'},
      ],
      time: '15:15 , 24/10/2024',
    },
    {
      id: 2,
      name: 'Trung Hoàng',
      avatar: 'icon.icon_user_around.png',
      contentComment:
        'Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính hãng 100%, nguyên seal, giao nhanh',
      imageComments: [
        {id: 1, image: 'image_comment_demo_2'},
        {id: 2, image: 'image_comment_demo_1'},
      ],
      time: '15:15 , 23/10/2024',
    },
  ];

  const imageProducts = [
    {id: 1, image: `${image.image_product_detail_1}`},
    {id: 2, image: `${image.image_product_detail_2}`},
    {id: 3, image: `${image.image_product_detail_3}`},
    {id: 4, image: `${image.image_product_detail_4}`},
    {id: 5, image: `${image.image_product_detail_5}`},
    {id: 6, image: `${image.image_product_detail_6}`},
  ];

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
    setShowChooseProduct(!showChooseProduct);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={[
          style.container,
          // {
          //   backgroundColor: showChooseProduct ? '#212121' : '#fff',
          //   opacity: showChooseProduct ? 0.6 : 1,
          // },
        ]}
        showsVerticalScrollIndicator={false}>
        <StatusBar hidden={false} />
        <View>
          <View style={{width: width, height: width, top: 0}}>
            <Carousel
              loop
              width={width}
              height={width}
              autoPlay={true}
              data={imageProducts}
              scrollAnimationDuration={1000}
              onSnapToItem={index => setNumberImg(index + 1)}
              renderItem={({item, index}) => (
                <View style={{flex: 1}} key={index}>
                  <Image
                    source={item.image}
                    style={{width: width, height: width}}
                  />
                </View>
              )}
            />
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
          <View style={style.discountTicket}>
            <Image source={icon.icon_discount} />
          </View>
          <View style={style.numberImage}>
            <Text style={{color: '#ffffff', textAlign: 'center'}}>
              {numberImg + '/' + imageProducts.length}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, top: 13}}>
          <Text style={style.titleProduct}>Dầu động cơ cao cấp</Text>
          <View style={style.subTitleProduct}>
            <Text style={style.nameProduct}>
              KIXX HYBRID - DẦU ĐỘNG CƠ CAO CẤP
            </Text>
            <Text style={style.numberCodeProduct}>SKU: BVC1234</Text>
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
                  4.0
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
                  (703)
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
                234
              </Text>
              <Image style={{left: 25}} source={icon.icon_eye_seen} />
            </View>
            <View style={{width: 404, height: 1, color: '#f1f1f1'}}></View>
          </View>
          <View style={style.priceDiscount}>
            <Text
              style={{
                width: 77,
                height: 21,
                fontSize: 16,
                fontWeight: 'semibold',
                color: '#FD6C31',
              }}>
              1.243.000đ
            </Text>
            <View style={style.discount}>
              <Text style={{top: 4, color: '#ffffff', textAlign: 'center'}}>
                -15%
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 75,
              height: 19,
              left: 12,
              top: 16,
              textDecorationLine: 'line-through',
            }}>
            1.300.000đ
          </Text>
          <View style={style.seperator} />
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
          <View style={{width: 404, height: 'auto', left: 12, top: 70}}>
            <Text
              style={{fontSize: 15, fontWeight: 'semibold', color: '#212121'}}>
              Ứng dụng
            </Text>
            <FlatList
              data={contentApplication}
              scrollEnabled={false}
              renderItem={({item}) => {
                return (
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#212121',
                        lineHeight: 22,
                      }}>{`\u2022 ${item.content}`}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={{width: 404, height: 'auto', left: 12, top: 72}}>
            <Text
              style={{fontSize: 15, fontWeight: 'semibold', color: '#212121'}}>
              Tiêu chuẩn hiệu suất
            </Text>
            <FlatList
              data={performanceStandards}
              scrollEnabled={false}
              renderItem={({item}) => {
                return (
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#212121',
                        lineHeight: 22,
                      }}>{`\u2022 ${item.content}`}</Text>
                  </View>
                );
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
          }}>
          <Text style={{top: 0}}>Xem thêm</Text>
          <Image
            style={{height: 9.17, left: 17, top: 2.75}}
            source={icon.icon_arrow_down}
          />
        </View>
        <View
          style={{width: width, height: 5, top: 133, backgroundColor: '#f1f1f1'}}
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
          <Pressable onPress={() => navigation.navigate('Evaluate')}>
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
          <Text style={{height: 16, fontSize: 12, fontWeight: 'regular'}}>
            4.0
          </Text>
          <Text style={{height: 16, fontSize: 12, fontWeight: 'regular'}}>
            (703 đánh giá)
          </Text>
        </View>
        <View
          style={{
            width: 404,
            height: 1,
            left: 12,
            top: 170,
            backgroundColor: '#f1f1f1',
          }}
        />
        <View style={style.commentAboutProduct}>
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
            <Image style={{top: 8}} source={icon.icon_range_rate_star} />
            <Text
              style={{
                top: 8,
                width: 371,
                height: 37,
                lineHeight: 18,
                fontSize: 14,
                fontWeight: 'regular',
              }}>
              Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình. Chính hãng
              100%, nguyên seal, giao nhanh
            </Text>
            <View
              style={{
                width: 284,
                height: 65,
                top: 15,
                flexDirection: 'row',
                gap: 8,
              }}>
              <Image source={image.image_comment_demo_1} />
              <Image source={image.image_comment_demo_2} />
              <Image source={image.image_comment_demo_1} />
              <Image source={image.image_comment_demo_2} />
            </View>
            <Text style={{height: 19, top: 22}}>15:24 , 24/10/2024</Text>
          </View>
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
            <View style={style.itemSimilar}>
              <View style={style.topItemSimilar}>
                <Image
                  style={{width: 194}}
                  source={image.image_product_demo_3}
                />
                <Image
                  style={{
                    position: 'absolute',
                    zIndex: 10,
                    top: 164.5,
                    left: 4,
                  }}
                  source={icon.icon_discount}
                />
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
                    -15%
                  </Text>
                </View>
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
                  Kixx HYBRID - Dầu động cơ cao cấp
                </Text>
                <Text
                  style={{
                    height: 21,
                    top: 18,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#0060af',
                  }}>
                  1.243.000đ
                </Text>
                <Text
                  style={{
                    height: 16,
                    fontSize: 12,
                    fontWeight: 'regular',
                    top: 22,
                    color: '#212121',
                    textDecorationLine: 'line-through',
                  }}>
                  1.300.000đ
                </Text>
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
                    4.1
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'regular',
                      color: '#AAAAAA',
                    }}>
                    (234)
                  </Text>
                </View>
              </View>
            </View>
            <View style={style.itemSimilar}>
              <View style={style.topItemSimilar}>
                <Image
                  style={{width: 194}}
                  source={image.image_product_demo_1}
                />
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
                  Kixx HYBRID - Dầu động cơ cao cấp
                </Text>
                <Text
                  style={{
                    height: 21,
                    top: 18,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#0060af',
                  }}>
                  143.000đ
                </Text>
                <Text
                  style={{
                    height: 16,
                    fontSize: 12,
                    fontWeight: 'regular',
                    top: 22,
                    color: '#212121',
                    textDecorationLine: 'line-through',
                  }}></Text>
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
                    4.1
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'regular',
                      color: '#AAAAAA',
                    }}>
                    (234)
                  </Text>
                </View>
              </View>
            </View>
            <View style={style.itemSimilar}>
              <View style={style.topItemSimilar}>
                <Image
                  style={{width: 194}}
                  source={image.image_product_demo_2}
                />
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
                  Kixx HYBRID - Dầu động cơ cao cấp
                </Text>
                <Text
                  style={{
                    height: 21,
                    top: 18,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#0060af',
                  }}>
                  143.000đ
                </Text>
                <Text
                  style={{
                    height: 16,
                    fontSize: 12,
                    fontWeight: 'regular',
                    top: 22,
                    color: '#212121',
                    textDecorationLine: 'line-through',
                  }}></Text>
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
                    4.1
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'regular',
                      color: '#AAAAAA',
                    }}>
                    (234)
                  </Text>
                </View>
              </View>
            </View>
            <View style={style.itemSimilar}>
              <View style={style.topItemSimilar}>
                <Image
                  style={{width: 194}}
                  source={image.image_product_demo_3}
                />
                <Image
                  style={{
                    position: 'absolute',
                    zIndex: 10,
                    top: 164.5,
                    left: 4,
                  }}
                  source={icon.icon_discount}
                />
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
                    -15%
                  </Text>
                </View>
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
                  Kixx HYBRID - Dầu động cơ cao cấp
                </Text>
                <Text
                  style={{
                    height: 21,
                    top: 18,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#0060af',
                  }}>
                  1.243.000đ
                </Text>
                <Text
                  style={{
                    height: 16,
                    fontSize: 12,
                    fontWeight: 'regular',
                    top: 22,
                    color: '#212121',
                    textDecorationLine: 'line-through',
                  }}>
                  1.300.000đ
                </Text>
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
                    4.1
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'regular',
                      color: '#AAAAAA',
                    }}>
                    (234)
                  </Text>
                </View>
              </View>
            </View>
            <View style={style.itemSimilar}>
              <View style={style.topItemSimilar}>
                <Image
                  style={{width: 194}}
                  source={image.image_product_demo_1}
                />
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
                  Kixx HYBRID - Dầu động cơ cao cấp
                </Text>
                <Text
                  style={{
                    height: 21,
                    top: 18,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#0060af',
                  }}>
                  143.000đ
                </Text>
                <Text
                  style={{
                    height: 16,
                    fontSize: 12,
                    fontWeight: 'regular',
                    top: 22,
                    color: '#212121',
                    textDecorationLine: 'line-through',
                  }}></Text>
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
                    4.1
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'regular',
                      color: '#AAAAAA',
                    }}>
                    (234)
                  </Text>
                </View>
              </View>
            </View>
            <View style={style.itemSimilar}>
              <View style={style.topItemSimilar}>
                <Image
                  style={{width: 194}}
                  source={image.image_product_demo_2}
                />
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
                  Kixx HYBRID - Dầu động cơ cao cấp
                </Text>
                <Text
                  style={{
                    height: 21,
                    top: 18,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#0060af',
                  }}>
                  143.000đ
                </Text>
                <Text
                  style={{
                    height: 16,
                    fontSize: 12,
                    fontWeight: 'regular',
                    top: 22,
                    color: '#212121',
                    textDecorationLine: 'line-through',
                  }}></Text>
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
                    4.1
                  </Text>
                  <Image source={icon.icon_rate_star} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'regular',
                      color: '#AAAAAA',
                    }}>
                    (234)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
                  <Image source={image.image_demo_choose_product} />
                </View>
                <View style={{height: 44, gap: 7}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'semibold',
                      color: '#FD6C31',
                    }}>
                    1.243.000 đ
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'regular',
                      color: '#212121',
                      textDecorationLine: 'line-through',
                    }}>
                    1.300.000 đ
                  </Text>
                </View>
              </View>
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
                  width: 404,
                  height: 85,
                  left: 12,
                  top: 44,
                  gap: 11.5,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
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
                </View>
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
                  (Tồn kho: <Text>50)</Text>
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
                <TextInput
                  value={countProducts}
                  keyboardType="numberic"
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#212121',
                    borderWidth: 1,
                    height: 21,
                  }}
                />
                <Pressable>
                  <Image source={icon.icon_increase} />
                </Pressable>
              </View>
              <Pressable
                onPress={() => navigation.navigate('Pay')}
                style={{
                  width: 404,
                  height: 65,
                  left: 6,
                  top: 95,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 395,
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
    </View>
  );
}
const {width, height}= Dimensions.get('window')
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
    height: 182,
    left: 12,
    top: 182,
    flexDirection: 'row',
  },
  contentComment: {
    width: 371,
    height: 183,
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
  },
  bottomItemSimilar: {
    width: 180,
    height: 129,
  },
  chooseProduct: {
    width: 412,
    height: 425,
    top: 440,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#fff',
    left: 0,
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
});
