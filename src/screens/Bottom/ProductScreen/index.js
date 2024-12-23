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
import {icon, lotties} from '@assets';
import {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import numbro from 'numbro';
import {useToast} from 'react-native-toast-notifications';
import {formatCurrency} from 'utils/formatCurrency';
export default function ProductScreen({navigation}) {
  const toast = useToast();
  const [iconHiddenListVertical, setIconHiddenListVertical] = useState(
    `${icon.icon_th_large_no_select}`,
  );
  const [iconHiddenListHorizontal, setIconHiddenListHorizontal] = useState(
    `${icon.icon_th_list_selected}`,
  );
  const [hiddenListProductVertical, setHiddenListProductVertical] =
    useState(true);
  const [hiddenListProductHorizontal, setHiddenListProductHorizontal] =
    useState(false);

  const [visibleModalCategory, setVisibleModalCategory] = useState(false);
  const [visibleModalPriceRange, setVisibleModalPriceRange] = useState(false);
  const [visibleModalEvaluate, setVisibleModalEvaluate] = useState(false);
  const handlerHinddenListHorizontal = () => {
    setHiddenListProductHorizontal(true);
    setHiddenListProductVertical(false);
    setIconHiddenListHorizontal(`${icon.icon_th_list_selected}`);
    setIconHiddenListVertical(`${icon.icon_th_large_no_select}`);
  };
  const handlerHiddenListVertical = () => {
    setHiddenListProductVertical(true);
    setHiddenListProductHorizontal(false);
    setIconHiddenListVertical(`${icon.icon_th_large_selected}`);
    setIconHiddenListHorizontal(`${icon.icon_th_list_no_select}`);
  };
  const handlerFillterCategory = () => {
    setVisibleModalCategory(!visibleModalCategory);
  };

  const handlerPriceRange = () => {
    setVisibleModalPriceRange(!visibleModalPriceRange);
  };
  const handlerEvaluate = () => {
    setVisibleModalEvaluate(!visibleModalEvaluate);
  };
  const [select, setSelect] = useState(`${icon.icon_radio_button}`);
  const [selected, setSelected] = useState(null);
  const [selectedChildren, setSelectedChildren] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showChildren, setShowChildren] = useState(null);
  const [showProducts, setShowProducts] = useState(null);
  const [titleResultFillter, setTitleResultFillter] = useState('');
  const [titleCategoryProducts, setTitleCategoryProducts] = useState('');
  const [showCategory, setShowCategory] = useState(false);
  const [priceRange, setPriceRange] = useState({min: {}, max: {}});
  const [checkbox, setCheckbox] = useState(`${icon.icon_no_checkbox}`);
  const [groupId, setGroupId] = useState(null);
  const handlerChoose = (index, group_id) => {
    setSelected(index);
    setSelectedChildren(null);
    setShowChildren(index);
    setShowProducts(null);
    setGroupId(group_id);
  };
  const handlerChooseChildren = (index, group_id) => {
    setSelectedChildren(index);
    setSelectedProduct(null);
    setShowProducts(index);
    setGroupId(group_id);
  };
  const handlerChooseProduct = (index, group_id) => {
    setSelectedProduct(index);
    setGroupId(group_id);
  };
  console.log(groupId);

  const handlerShowChildren = index => {
    showChildren === index ? setShowChildren(null) : setShowChildren(index);
  };
  const handlerShowProducts = index => {
    showProducts === index ? setShowProducts(null) : setShowProducts(index);
  };
  const [resultFillter, setResultFillter] = useState([
    {
      id: '',
      title: '',
      price: '',
      price_sale: '',
      picture: '',
      num_sold: '',
      num_view: '',
      friendly_link: '',
    },
  ]);
  const getFillterProducts = async () => {
    const response = await axios.get(
      'http://rpm.demo.app24h.net:81/api/v1/product?filter[group_id]=' +
        groupId,
    );
    const data = response.data.data;
    const title = data[0].group.title;
    // console.log(title);
    setTitleResultFillter(title);
    console.log(titleResultFillter);
    const dataFillter = data.map(item => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        price_sale: item.price_sale,
        picture: item.picture,
        num_sold: item.num_sold,
        num_view: item.num_view,
        friendly_link: item.friendly_link,
      };
    });
    setResultFillter(dataFillter);
  };
  const saveFillterCategory = group_id => {
    getFillterProducts();
    setTitleResultFillter;
    setVisibleModalCategory(!visibleModalCategory);
    setShowCategory(true);
  };
  const [titlePriceRange, setTitlePriceRange] = useState('');
  const evaluateProduct = [
    {
      id: 1,
      title: '5 sao trở lên',
      icon: `${icon.icon_five_star_rate}`,
      checkbox: `${icon.icon_no_checkbox}`,
      text: '',
    },
    {
      id: 2,
      title: '4 sao trở lên',
      icon: `${icon.icon_four_star_rate}`,
      checkbox: `${icon.icon_no_checkbox}`,
      text: 'trở lên',
    },
    {
      id: 3,
      title: '3 sao trở lên',
      icon: `${icon.icon_three_star_rate}`,
      checkbox: `${icon.icon_no_checkbox}`,
      text: 'trở lên',
    },
    {
      id: 4,
      title: '2 sao trở lên',
      icon: `${icon.icon_two_star_rate}`,
      checkbox: `${icon.icon_no_checkbox}`,
      text: 'trở lên',
    },
    {
      id: 5,
      title: '1 sao trở lên',
      icon: `${icon.icon_one_star_rate}`,
      checkbox: `${icon.icon_no_checkbox}`,
      text: 'trở lên',
    },
  ];
  const [chooseEvaluate, setChooseEvaluate] = useState(null);
  const [titleEvaluate, setTitleEvaluate] = useState('');
  const savePriceRange = () => {
    priceRange.min < priceRange.max
      ? setTitlePriceRange(
          `${numbro(priceRange.min).format({forceAverage: 'thousand'})}` +
            '-' +
            `${numbro(priceRange.max).format({forceAverage: 'thousand'})}`,
        )
      : toast.show('Giá không hợp lý', {
          type: 'warning',
          duration: 2000,
          placement: 'top',
          offset: 30,
          animationType: 'slide-in',
        });

    handlerPriceRange();
  };
  const handlerChooseEvaluate = (index, title) => {
    setChooseEvaluate(index);
    setTitleEvaluate(title);
  };
  const saveEvaluate = () => {
    setVisibleModalEvaluate(!visibleModalEvaluate);
  };
  const [dataProducts, setDataProducts] = useState([
    {
      id: '',
      group_id: '',
      title: '',
      friendly_link: '',
      children: [
        {
          id: '',
          group_id: '',
          title: '',
          friendly_link: '',
          product: [
            {
              id: '',
              group_id: '',
              title: '',
              picture: '',
              price: '',
              price_sale: '',
              percent_discount: '',
              friendly_link: '',
              num_sold: '',
              num_view: '',
            },
          ],
        },
      ],
    },
  ]);
  useEffect(() => {
    axios
      .get('http://rpm.demo.app24h.net:81/api/v1/product_group/category')
      .then(res => {
        const products = res.data.data;
        console.log(products);
        const fetchDataProducts = products.map(item => {
          const totalProducts = item.children.reduce(
            (total, child) => total + child.product.length,
            0,
          );
          const representativePicture =
            item.children[2]?.product[0]?.picture || '';
          return {
            id: item.id,
            group_id: item.group_id,
            title: item.title,
            friendly_link: item.friendly_link,
            totalProducts,
            representativePicture,
            children: item.children.map(child => ({
              id: child.id,
              group_id: child.group_id,
              title: child.title,
              friendly_link: child.friendly_link,
              product: child.product.map(product => ({
                id: product.id,
                group_id: product.group_id,
                title: product.title,
                picture: product.picture,
                price: product.price,
                price_sale: product.price_sale,
                percent_discount: product.percent_discount,
                friendly_link: product.friendly_link,
                num_sold: product.num_sold,
                num_view: product.num_view,
              })),
            })),
          };
        });

        setDataProducts(fetchDataProducts);
      });
  }, []);

  return (
    <View style={style.container}>
      {showCategory === true ? (
        <View style={style.titleContainer}>
          <View style={style.title}>
            <Pressable
              onPress={() =>
                navigation.navigate('CategoryProducts', {data: dataProducts})
              }
              style={{width: 200, height: 28, left: 13}}>
              <Image source={icon.icon_arrow_left} />
              <Text style={[style.textTitle, {left: 36}]}>
                {titleCategoryProducts}
              </Text>
            </Pressable>
            {visibleModalCategory === true ||
            visibleModalPriceRange === true ||
            visibleModalEvaluate === true ? (
              <View
                style={{
                  height: 18,
                  flexDirection: 'row',
                  right: 0,
                  position: 'absolute',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Image source={icon.icon_fillter} />
                </View>
              </View>
            ) : (
              <View
                style={{
                  width: 51.67,
                  height: 18,
                  flexDirection: 'row',
                  right: 0,
                  position: 'absolute',
                  justifyContent: 'space-between',
                }}>
                <Pressable onPress={handlerHiddenListVertical}>
                  <Image source={iconHiddenListVertical} />
                </Pressable>
                <Pressable onPress={handlerHinddenListHorizontal}>
                  <Image source={iconHiddenListHorizontal} />
                </Pressable>
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={style.titleContainer}>
          <View style={style.title}>
            <Text style={style.textTitle}>Sản phẩm</Text>
            {visibleModalCategory === true ||
            visibleModalPriceRange === true ||
            visibleModalEvaluate === true ? (
              <View
                style={{
                  height: 18,
                  flexDirection: 'row',
                  right: 0,
                  position: 'absolute',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Image source={icon.icon_fillter} />
                </View>
              </View>
            ) : (
              <View
                style={{
                  width: 51.67,
                  height: 18,
                  flexDirection: 'row',
                  right: 0,
                  position: 'absolute',
                  justifyContent: 'space-between',
                }}>
                <Pressable onPress={handlerHiddenListVertical}>
                  <Image source={iconHiddenListVertical} />
                </Pressable>
                <Pressable onPress={handlerHinddenListHorizontal}>
                  <Image source={iconHiddenListHorizontal} />
                </Pressable>
              </View>
            )}
          </View>
        </View>
      )}
      <View style={{top: 65, width: 412, rowGap: 12}}>
        <View style={{height: 42}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.menuHorizontal}>
            <View style={style.itemMenuHorizontal}>
              <View style={style.contentItemMenuHorizontal}>
                <Image
                  source={icon.icon_arrange}
                  style={style.iconContentItemMenuHorizontal}
                />
                <Text style={style.textContentItemMenuHorizontal}>Sắp xếp</Text>
              </View>
            </View>
            <Pressable
              onPress={handlerFillterCategory}
              style={style.itemMenuHorizontal}>
              <View style={style.contentItemMenuHorizontal}>
                <Image
                  source={icon.icon_category}
                  style={style.iconContentItemMenuHorizontal}
                />
                <Text style={style.textContentItemMenuHorizontal}>
                  {titleResultFillter === '' ? 'Danh mục' : titleResultFillter}
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={handlerPriceRange}
              style={style.itemMenuHorizontal}>
              <View style={style.contentItemMenuHorizontal}>
                <Image
                  source={icon.icon_price_range}
                  style={style.iconContentItemMenuHorizontal}
                />
                <Text style={style.textContentItemMenuHorizontal}>
                  {titlePriceRange === '' ? 'Khoảng giá' : titlePriceRange}
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={handlerEvaluate}
              style={style.itemMenuHorizontal}>
              <View style={style.contentItemMenuHorizontal}>
                <Image
                  source={icon.icon_evaluate}
                  style={style.iconContentItemMenuHorizontal}
                />
                <Text style={style.textContentItemMenuHorizontal}>
                  {titleEvaluate === '' ? 'Đánh giá' : titleEvaluate}
                </Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        <View style={{width: width - 24, rowGap: 12}}>
          {hiddenListProductHorizontal === true && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingBottom: 300,
                rowGap: 12,
              }}>
              {dataProducts.map(item =>
                item.children.map(child =>
                  child.product.map(product => (
                    <Pressable style={style.itemContainer} key={product.id}>
                      <View style={style.imgItem}>
                        {product.percent_discount !== 0 && (
                          <View style={style.percentDiscounts}>
                            <Text style={style.textPercentDiscount}>
                              - {product.percent_discount} %
                            </Text>
                          </View>
                        )}
                        {product.percent_discount !== 0 && (
                          <Image
                            style={style.discountTicket}
                            source={icon.icon_discount}
                          />
                        )}
                        <Image
                          source={{uri: product.picture}}
                          style={{
                            resizeMode: 'cover',
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </View>
                      <View style={style.contentItem}>
                        <Text style={style.titleItem}>{product.title}</Text>
                        <View
                          style={[style.priceItem, {justifyContent: 'center'}]}>
                          {product.percent_discount !== 0 ? (
                            <Text style={style.salePrice}>
                              {formatCurrency(product.price_sale)}
                            </Text>
                          ) : (
                            <Text style={style.salePrice}>
                              {formatCurrency(product.price)}
                            </Text>
                          )}
                          {product.percent_discount !== 0 && (
                            <Text style={style.originalPrice}>
                              {formatCurrency(product.price)}
                            </Text>
                          )}
                        </View>
                        <View style={style.footerContentItem}>
                          <Text style={style.numberRate}>4.1</Text>
                          <Image
                            style={style.rateStar}
                            source={icon.icon_rate_star}
                          />
                          <Text style={style.numberPerson}>
                            ({product.num_view})
                          </Text>
                        </View>
                      </View>
                    </Pressable>
                  )),
                ),
              )}

              <View style={{left: 12, width: width - 24, alignItems: 'center'}}>
                <LottieView
                  style={{top: 2.2, width: 70, height: 70}}
                  source={lotties.loading}
                  autoPlay
                  loop
                />
              </View>
            </ScrollView>
          )}
          {hiddenListProductVertical === true && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                width: width - 24,
                left: 12,
                top: 12,
                flexDirection: 'row',
                columnGap: 12,
                rowGap: 11.5,
                flexWrap: 'wrap',
                paddingBottom: 300,
              }}>
              {dataProducts.map(item =>
                item.children.map(child =>
                  child.product.map(product => (
                    <View
                      style={{
                        width: (width - 24) / 2 - 6,
                        height: 349.14,
                        alignItems: 'center',
                        rowGap: 10,
                        borderRadius: 10,
                        backgroundColor: '#fff',
                      }}>
                      <View style={{width: '100%', height: 199.14}}>
                        {product.percent_discount !== 0 && (
                          <View style={style.percentDiscounts}>
                            <Text style={style.textPercentDiscount}>
                              - {product.percent_discount} %
                            </Text>
                          </View>
                        )}
                        {product.percent_discount !== 0 && (
                          <View
                            style={[
                              style.discountTicket,
                              {width: 115, height: 22, top: 165},
                            ]}>
                            <Image source={icon.icon_discount} />
                          </View>
                        )}
                        <Image
                          source={{uri: product.picture}}
                          style={{
                            resizeMode: 'cover',
                            height: '100%',
                            width: '100%',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          }}
                        />
                      </View>
                      <View
                        style={{width: 180, height: 128, rowGap: 10, left: 8}}>
                        <Text style={[style.titleItem, {width: 180}]}>
                          {product.title}
                        </Text>
                        <View
                          style={[style.priceItem, {justifyContent: 'center'}]}>
                          {product.percent_discount !== 0 ? (
                            <Text style={style.salePrice}>
                              {formatCurrency(product.price_sale)}
                            </Text>
                          ) : (
                            <Text style={style.salePrice}>
                              {formatCurrency(product.price)}
                            </Text>
                          )}
                          {product.percent_discount !== 0 && (
                            <Text style={style.originalPrice}>
                              {formatCurrency(product.price)}
                            </Text>
                          )}
                        </View>
                        <View style={style.footerContentItem}>
                          <Text style={style.numberRate}>4.1</Text>
                          <Image
                            style={style.rateStar}
                            source={icon.icon_rate_star}
                          />
                          <Text style={style.numberPerson}>
                            ({product.num_view})
                          </Text>
                        </View>
                      </View>
                    </View>
                  )),
                ),
              )}
              <View style={{width: width - 24, alignItems: 'center'}}>
                <LottieView
                  style={{top: 2.2, width: 70, height: 70}}
                  source={lotties.loading}
                  autoPlay
                  loop
                />
              </View>
            </ScrollView>
          )}
          {/* Thay đổi */}
        </View>
      </View>
      {visibleModalCategory === true && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={visibleModalCategory}>
          <TouchableOpacity activeOpacity={1} style={style.styleOpacityModal}>
            <View
              style={{
                top: 115,
                backgroundColor: '#fff',
                width: width,
                height: 811,
                rowGap: 15,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <View style={{height: 30, width: width - 15, left: 12, top: 10}}>
                <Text
                  style={{
                    height: 23,
                    top: 7,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#0060af',
                    textTransform: 'uppercase',
                  }}>
                  Danh mục sản phẩm
                </Text>
                <Pressable
                  onPress={handlerFillterCategory}
                  style={{
                    width: 30,
                    height: 30,
                    right: 0,
                    position: 'absolute',
                  }}>
                  <Image source={icon.icon_close} />
                </Pressable>
              </View>
              <ScrollView
                contentContainerStyle={{
                  width: width - 24,
                  left: 12,
                  paddingBottom: 300,
                  rowGap: 15,
                }}
                showsVerticalScrollIndicator={false}>
                {dataProducts.map((item, index) => (
                  <>
                    <View
                      style={{height: 21, flexDirection: 'row'}}
                      key={index}>
                      <Pressable
                        onPress={() => handlerChoose(index, item.group_id)}
                        style={{flexDirection: 'row', columnGap: 12}}>
                        <View
                          style={{
                            aspectRatio: 1 / 1,
                            width: 20,
                            borderRadius: 50,
                          }}>
                          <Image
                            source={
                              selected === index
                                ? icon.icon_radio_button
                                : icon.icon_radio_button_no_select
                            }
                          />
                        </View>
                        <Text
                          style={{
                            height: 21,
                            fontSize: 16,
                            fontWeight: 'semibold',
                            color: '#0060af',
                            textTransform: 'uppercase',
                          }}>
                          {item.title}
                        </Text>
                      </Pressable>
                      <Pressable
                        disabled={selected === index ? false : true}
                        onPress={() => handlerShowChildren(index)}
                        style={{right: 0, position: 'absolute'}}>
                        <Icon
                          name="keyboard-arrow-right"
                          size={21}
                          style={{
                            transform:
                              showChildren === index
                                ? [{rotate: '90deg'}]
                                : [{rotate: '0deg'}],
                          }}
                        />
                      </Pressable>
                    </View>
                    {showChildren === index && (
                      <View style={{left: 32, width: 363, rowGap: 15}}>
                        {item.children.map((child, index) => (
                          <>
                            <View
                              style={{height: 21, flexDirection: 'row'}}
                              key={index}>
                              <Pressable
                                onPress={() =>
                                  handlerChooseChildren(index, child.group_id)
                                }
                                style={{flexDirection: 'row', columnGap: 12}}>
                                <View
                                  style={{
                                    aspectRatio: 1 / 1,
                                    width: 20,
                                    borderRadius: 50,
                                  }}>
                                  <Image
                                    source={
                                      selectedChildren === index
                                        ? icon.icon_radio_button
                                        : icon.icon_radio_button_no_select
                                    }
                                  />
                                </View>
                                <Text
                                  style={{
                                    height: 21,
                                    fontSize: 16,
                                    fontWeight: 'medium',
                                    color: '#212121',
                                  }}>
                                  {child.title}
                                </Text>
                              </Pressable>
                              <Pressable
                                disabled={
                                  selectedChildren === index ? false : true
                                }
                                onPress={() => handlerShowProducts(index)}
                                style={{left: 14}}>
                                <Icon
                                  name="keyboard-arrow-right"
                                  size={21}
                                  style={{
                                    transform:
                                      showProducts === index
                                        ? [{rotate: '90deg'}]
                                        : [{rotate: '0deg'}],
                                  }}
                                />
                              </Pressable>
                            </View>
                            {showProducts === index && (
                              <View style={{left: 32, width: 331, rowGap: 15}}>
                                {child.product.map((product, index) => (
                                  <View
                                    style={{height: 21, flexDirection: 'row'}}
                                    key={index}>
                                    <Pressable
                                      onPress={() =>
                                        handlerChooseProduct(
                                          index,
                                          product.group_id,
                                        )
                                      }
                                      style={{
                                        flexDirection: 'row',
                                        columnGap: 12,
                                      }}>
                                      <View
                                        style={{
                                          aspectRatio: 1 / 1,
                                          width: 20,
                                          borderRadius: 50,
                                        }}>
                                        <Image
                                          source={
                                            selectedProduct === index
                                              ? icon.icon_radio_button
                                              : icon.icon_radio_button_no_select
                                          }
                                        />
                                      </View>
                                      <Text
                                        style={{
                                          height: 21,
                                          fontSize: 16,
                                          fontWeight: 'medium',
                                          color: '#212121',
                                        }}>
                                        {product.title}
                                      </Text>
                                    </Pressable>
                                  </View>
                                ))}
                              </View>
                            )}
                          </>
                        ))}
                      </View>
                    )}
                  </>
                ))}
              </ScrollView>
              <View
                style={{
                  width: width,
                  height: 65,
                  top: 680,
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Pressable
                  onPress={saveFillterCategory}
                  style={{
                    width: width - 24,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: '#0060af',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'medium', color: '#fff'}}>
                    Lưu
                  </Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      {visibleModalPriceRange === true && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={visibleModalPriceRange}>
          <TouchableOpacity activeOpacity={1} style={style.styleOpacityModal}>
            <View
              style={{
                width: width,
                height: 386,
                top: 250,
                backgroundColor: '#fff',
              }}>
              <View style={{height: 30, width: 404, left: 12, top: 10}}>
                <Text
                  style={{
                    height: 23,
                    top: 7,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#0060af',
                    textTransform: 'uppercase',
                  }}>
                  Khoảng giá
                </Text>
                <Pressable
                  onPress={handlerPriceRange}
                  style={{
                    width: 30,
                    height: 30,
                    right: 0,
                    position: 'absolute',
                  }}>
                  <Image source={icon.icon_close} />
                </Pressable>
              </View>
              <View style={{width: width - 24, top: 14, rowGap: 11, left: 12}}>
                <View style={{rowGap: 10}}>
                  <Text
                    style={{
                      height: 21,
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Tối thiểu
                  </Text>
                  <View
                    style={{
                      height: 47,
                      borderRadius: 5,
                      borderWidth: 5,
                      borderColor: '#f1f1f1',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TextInput
                      style={{
                        width: '100%',
                        paddingLeft: 15,
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#212121',
                      }}
                      keyboardType="numeric"
                      placeholderTextColor={'#aaa'}
                      placeholder="Nhập giá tối thiểu"
                      // keyboardType='numeric'
                      value={priceRange.min}
                      onChangeText={min =>
                        setPriceRange({...priceRange, min: min})
                      }
                    />
                    <Text
                      style={{
                        right: 15,
                        position: 'absolute',
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#212121',
                      }}>
                      đ
                    </Text>
                  </View>
                </View>
                <View style={{rowGap: 10}}>
                  <Text
                    style={{
                      height: 21,
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Tối đa
                  </Text>
                  <View
                    style={{
                      height: 47,
                      borderRadius: 5,
                      borderWidth: 5,
                      borderColor: '#f1f1f1',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TextInput
                      style={{
                        width: '100%',
                        paddingLeft: 15,
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#212121',
                      }}
                      keyboardType="numeric"
                      placeholderTextColor={'#aaa'}
                      placeholder="Nhập giá tối đa"
                      value={priceRange.max}
                      onChangeText={max =>
                        setPriceRange({...priceRange, max: max})
                      }
                    />
                    <Text
                      style={{
                        right: 15,
                        position: 'absolute',
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#212121',
                      }}>
                      đ
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 412,
                  height: 65,
                  top: 321,
                  position: 'absolute',
                  zIndex: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Pressable
                  // onPress={() => setShowCategory(true)}
                  onPress={savePriceRange}
                  style={{
                    width: width - 24,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: '#0060af',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'medium', color: '#fff'}}>
                    Lưu
                  </Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      {visibleModalEvaluate === true && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={visibleModalEvaluate}>
          <TouchableOpacity activeOpacity={1} style={style.styleOpacityModal}>
            <View
              style={{
                width: width,
                height: 386,
                top: 250,
                backgroundColor: '#fff',
              }}>
              <View style={{height: 30, width: 404, left: 12, top: 10}}>
                <Text
                  style={{
                    height: 23,
                    top: 7,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#0060af',
                    textTransform: 'uppercase',
                  }}>
                  Đánh giá
                </Text>
                <Pressable
                  onPress={handlerEvaluate}
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
                  width: 181,
                  height: 170,
                  top: 23,
                  rowGap: 15,
                  left: 12,
                }}>
                {evaluateProduct.map((item, index) => (
                  <Pressable
                    key={index}
                    onPress={() => handlerChooseEvaluate(index, item.title)}
                    style={style.itemEvaluate}>
                    <View style={style.radioCheckbox}>
                      <Image
                        source={
                          chooseEvaluate === index
                            ? `${icon.icon_checkbox}`
                            : `${icon.icon_no_checkbox}`
                        }
                      />
                    </View>
                    <Image source={item.icon} style={style.rateStarEvaluate} />
                    <Text style={style.textEvaluate}>{item.text}</Text>
                  </Pressable>
                ))}
              </View>
              <View
                style={{
                  width: 412,
                  height: 65,
                  top: 321,
                  position: 'absolute',
                  zIndex: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Pressable
                  onPress={saveEvaluate}
                  style={{
                    width: width - 24,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: '#0060af',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'medium', color: '#fff'}}>
                    Lưu
                  </Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
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
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    width: width - 24,
    height: 28,
    top: 13,
    left: 3,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    width: 165,
    height: 24,
    position: 'absolute',
    top: 2,
    left: 12,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
  menuHorizontal: {
    height: 42,
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
    left: 12,
    paddingRight: 20,
  },
  itemMenuHorizontal: {
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FEC007',
    alignItems: 'center',
    borderColor: '#FEC007',
    paddingLeft: 15,
    paddingTop: 11,
    paddingRight: 20,
  },
  contentItemMenuHorizontal: {
    height: 19,
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },
  iconContentItemMenuHorizontal: {
    width: 16,
    height: 16,
  },
  textContentItemMenuHorizontal: {
    height: 19,
    fontSize: 14,
    fontWeight: 'medium',
    color: '#ffffff',
  },
  itemContainer: {
    width: width - 24,
    height: 159.26,
    left: 12,
    top: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    columnGap: 12,
  },
  imgItem: {
    width: 141,
    height: 143.26,
    left: 8,
    top: 8,
  },
  contentItem: {
    width: 220.45,
    height: 123.26,
    top: 18,
  },
  titleItem: {
    width: 219,
    height: 43,
    left: 1.45,
    top: 0,
    fontSize: 16,
    fontWeight: 'semibold',
    lineHeight: 22,
    color: '#212121',
  },
  priceItem: {
    height: 40,
    top: 8,
    left: 1.45,
  },
  salePrice: {
    height: 20,
    color: '#0060AF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#808080',
    fontSize: 12,
    fontWeight: 'regular',
    fontFamily: 'Be Vietnam Pro',
  },
  footerContentItem: {
    width: 68,
    height: 16,
    left: 0,
    top: 16.26,
    flexDirection: 'row',
  },
  numberRate: {
    width: 16,
    height: 15,
    left: 0,
    top: 0,
    color: '#FD6C31',
    fontWeight: 'bold',
    fontSize: 11,
    fontFamily: 'Be Vietnam Pro',
  },
  rateStar: {
    width: 10.35,
    height: 9.92,
    left: 6.43,
    top: 2.78,
  },
  numberPerson: {
    width: 30,
    height: 16,
    left: 9.23,
    fontSize: 12,
    fontWeight: 'regular',
    color: '#aaa',
  },
  discountTicket: {
    position: 'absolute',
    top: 110.95,
    zIndex: 10,
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
  styleOpacityModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  itemEvaluate: {flexDirection: 'row', alignItems: 'center'},
  radioCheckbox: {
    width: 22,
    aspectRatio: 1 / 1,
    borderColor: '#212121',
    borderRadius: 3,
  },
  rateStarEvaluate: {height: 14.37, marginLeft: 12, marginRight: 10},
  textEvaluate: {
    height: 21,
    fontSize: 16,
    fontWeight: 'regular',
    color: '#212121',
  },
});
