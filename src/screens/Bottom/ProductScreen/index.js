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
} from 'react-native';
import {icon, lotties} from '@assets';
import {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {formatCurrency} from 'utils';
import actions from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {width, height} from 'utils/responsive';
export default function ProductScreen() {
  const [hiddenListProductVertical, setHiddenListProductVertical] =
    useState(true);
  const [hiddenListProductHorizontal, setHiddenListProductHorizontal] =
    useState(false);
  const handlerHiddenListProduct = () => {
    setHiddenListProductVertical(!hiddenListProductVertical);
    setHiddenListProductHorizontal(!hiddenListProductHorizontal);
  };
  const titleSort = [
    {id: 1, icon: `${icon.icon_arrange}`, title: 'Sắp xếp'},
    {id: 2, icon: `${icon.icon_category}`, title: 'Danh mục'},
    {id: 3, icon: `${icon.icon_price_range}`, title: 'Khoảng giá'},
    {id: 4, icon: `${icon.icon_evaluate}`, title: 'Đánh giá'},
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_LIST,
    });
  }, []);
  const [modalVisibleCategory, setVisibleModalCategory] = useState(false);
  const [modalPrice, setModalPrice] = useState(false);
  const [modalEvaluate, setVisibleModalEvaluate] = useState(false);
  const products = useSelector(state => state.getProductsList?.data || []);
  const handlerHiddenModal = title => {
    if (title === 'Danh mục') {
      setVisibleModalCategory(!modalVisibleCategory);
    }
    if (title === 'Khoảng giá') {
      setModalPrice(!modalPrice);
    }
    if (title === 'Đánh giá') {
      setVisibleModalEvaluate(!modalEvaluate);
    }
  };
  const [selectionCate, setSelectionCate] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(false);
  const [selectedChild, setSelectedChild] = useState(null);
  const [expandedChild, setExpandedChild] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlerSelection = id => {
    setSelectionCate(id);
    setExpandedCategory(true);
    setSelectedChild(null);
    setSelectedProduct(null);
  };

  const handlerShowChildrent = () => {
    setExpandedCategory(!expandedCategory);
  };

  const handleChildSelection = id => {
    setSelectedChild(id);
    setExpandedChild(true);
    setSelectedProduct(null);
  };

  const handleExpandChild = () => {
    setExpandedChild(!expandedChild);
  };

  const handleProductSelection = id => {
    setSelectedProduct(id);
  };

  const evaluate = [
    {id: 1, value: 5, title: ''},
    {id: 2, value: 4, title: 'trở lên'},
    {id: 3, value: 3, title: 'trở lên'},
    {id: 4, value: 2, title: 'trở lên'},
    {id: 5, value: 1, title: 'trở lên'},
  ];
  const [selectEvaluate, setSelectEvaluate] = useState([]);

  const selectionEvaluate = value => {
    if (selectEvaluate.includes(value)) {
      setSelectEvaluate(selectEvaluate.filter(item => item !== value));
    } else {
      setSelectEvaluate([...selectEvaluate, value]);
    }
  };
  const [saveCategory, setSaveCategory] = useState(null);
  const saveCate = () => {
    selectionCate !== null &&
      setSaveCategory(selectionCate) &&
      dispatch({
        type: actions.GET_PRODUCT_CATEGORY_DETAIL,
        params: {group_id: saveCategory},
      });
    selectionCate !== null &&
      selectedChild !== null &&
      setSaveCategory(selectedChild);
    selectionCate !== null &&
      selectedChild !== null &&
      selectedProduct !== null &&
      setSaveCategory(selectedProduct);
  };
  const categoryDetail = useSelector(
    state => state.getProductCategoryDetail?.data || [],
  );
  console.log('categoryDetail', categoryDetail);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f3f7fc',
        rowGap: 13,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: width,
          height: 54,
          backgroundColor: '#0060af',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: 'center',
        }}>
        <View style={{left: 12, width: width - 24, flexDirection: 'row'}}>
          <Text style={{fontSize: 18, fontWeight: 'medium', color: '#fff'}}>
            Sản Phẩm
          </Text>
          {modalVisibleCategory === true ||
          modalPrice === true ||
          modalEvaluate === true ? (
            <View style={{position: 'absolute', right: 0}}>
              <FontAwesome name="filter" color={'#fff'} size={18} />
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                right: 0,
                columnGap: 15,
              }}>
              <Pressable onPress={handlerHiddenListProduct}>
                <Icon
                  name="th-large"
                  color={
                    hiddenListProductHorizontal === false ? '#808080' : '#fff'
                  }
                  size={18}
                />
              </Pressable>
              <Pressable onPress={handlerHiddenListProduct}>
                <Icon
                  name="th-list"
                  color={
                    hiddenListProductVertical === false ? '#808080' : '#fff'
                  }
                  size={18}
                />
              </Pressable>
            </View>
          )}
        </View>
      </View>
      <View style={{height: 39}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            columnGap: 13,
            left: 12,
          }}>
          {titleSort.map(item => (
            <Pressable
              onPress={() => handlerHiddenModal(item.title)}
              key={item.id}
              style={{
                backgroundColor: '#FEC007',
                borderRadius: 12,
                borderColor: '#FEC007',
                justifyContent: 'center',
                alignItems: 'center',
                height: 39,
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row', columnGap: 8}}>
                <Image source={item.icon} style={{width: 16, height: 16}} />
                <Text
                  style={{fontSize: 14, fontWeight: 'medium', color: '#fff'}}>
                  {item.title}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      {hiddenListProductVertical === true && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{width: width - 24, rowGap: 12}}>
          {products.map(item =>
            item.children.map(chil =>
              chil.product.map(pro => (
                <Pressable
                  onPress={() =>
                    commonRoot.navigate(router.PRODUCT_DETAIL, {
                      item_id: pro.item_id,
                      group_id: pro.group_id,
                    })
                  }
                  key={pro.item_id}
                  style={{
                    width: width - 24,
                    height: 159.26,
                    flexDirection: 'row',
                    columnGap: 12,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 8,
                  }}>
                  <View
                    style={{
                      width: width - 287,
                      height: 143.26,
                      borderRadius: 5,
                      left: 8,
                    }}>
                    {pro.percent_discount !== 0 ? (
                      <>
                        <View
                          style={{
                            width: width - 387,
                            height: 22,
                            backgroundColor: '#ff0000',
                            borderTopLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            margin: 5,
                            position: 'absolute',
                            zIndex: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 11,
                              fontWeight: 'semibold',
                              color: '#fff',
                            }}>
                            - {pro.percent_discount} %
                          </Text>
                        </View>
                        <View
                          style={{
                            position: 'absolute',
                            zIndex: 10,
                            bottom: 10.3,
                          }}>
                          <Image source={icon.icon_discount} />
                        </View>
                      </>
                    ) : (
                      ''
                    )}
                    <Image
                      source={{uri: pro.picture}}
                      style={{
                        width: ' 100%',
                        height: '100%',
                        resizeMode: 'cover',
                        borderRadius: 5,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: width - 207.55,
                      height: 123.26,
                      rowGap: 19,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'semibold',
                        color: '#212121',
                      }}>
                      {pro.title}
                    </Text>
                    <View style={{height: 36, rowGap: 9}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          color: '#0060af',
                        }}>
                        {formatCurrency(
                          pro.price_sale_box === pro.price_box
                            ? pro.price_box
                            : pro.price_sale_box,
                        )}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 'regular',
                          color: '#808080',
                          textDecorationLine: 'line-through',
                        }}>
                        {pro.price_box !== pro.price_sale_box &&
                          formatCurrency(pro.price_box)}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', columnGap: 7}}>
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: '#FD6C31',
                        }}>
                        4.1
                      </Text>
                      <AntDesign name="star" color="#FD6C31" size={11} />
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 'regular',
                          color: '#aaa',
                        }}>
                        ({pro.num_view})
                      </Text>
                    </View>
                  </View>
                </Pressable>
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
      {hiddenListProductHorizontal === true && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: width - 24,
            rowGap: 11.5,
            columnGap: 12,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {products.map(item =>
            item.children.map(chil =>
              chil.product.map(pro => (
                <Pressable
                  onPress={() =>
                    commonRoot.navigate(router.PRODUCT_DETAIL, {
                      item_id: pro.item_id,
                      group_id: pro.group_id,
                    })
                  }
                  key={pro.item_id}
                  style={{
                    width: (width - 24) / 2 - 6,
                    height: 349.14,
                    rowGap: 10,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 8,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 199.14,
                      borderRadius: 5,
                    }}>
                    {pro.percent_discount !== 0 ? (
                      <>
                        <View
                          style={{
                            width: width - 387,
                            height: 22,
                            backgroundColor: '#ff0000',
                            borderTopLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            margin: 5,
                            position: 'absolute',
                            zIndex: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 11,
                              fontWeight: 'semibold',
                              color: '#fff',
                            }}>
                            - {pro.percent_discount} %
                          </Text>
                        </View>
                        <View
                          style={{
                            position: 'absolute',
                            zIndex: 10,
                            bottom: 10.3,
                          }}>
                          <Image source={icon.icon_discount} />
                        </View>
                      </>
                    ) : (
                      ''
                    )}
                    <Image
                      source={{uri: pro.picture}}
                      style={{
                        width: ' 100%',
                        height: '100%',
                        resizeMode: 'cover',
                        borderRadius: 5,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: (width - 24) / 2 - 22,
                      height: 129,
                      rowGap: 14,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'semibold',
                        color: '#212121',
                      }}>
                      {pro.title}
                    </Text>
                    <View
                      style={{
                        width: '100%',
                        borderWidth: 1,
                        borderColor: '#f7f3fc',
                      }}></View>
                    <View style={{height: 36, rowGap: 9}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          color: '#0060af',
                        }}>
                        {formatCurrency(
                          pro.price_sale_box === pro.price_box
                            ? pro.price_box
                            : pro.price_sale_box,
                        )}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 'regular',
                          color: '#808080',
                          textDecorationLine: 'line-through',
                        }}>
                        {pro.price_box !== pro.price_sale_box &&
                          formatCurrency(pro.price_box)}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', columnGap: 7}}>
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: '#FD6C31',
                        }}>
                        4.1
                      </Text>
                      <AntDesign name="star" color="#FD6C31" size={11} />
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 'regular',
                          color: '#aaa',
                        }}>
                        ({pro.num_view})
                      </Text>
                    </View>
                  </View>
                </Pressable>
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
      {modalVisibleCategory === true && (
        <Modal
          transparent={true}
          visible={modalVisibleCategory}
          animationType="fade">
          <TouchableOpacity activeOpacity={1} style={styles.styleOpacity}>
            <View
              style={{
                width: width,
                height: 811,
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#fff',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                rowGap: 15,
              }}>
              <View
                style={{
                  left: 12,
                  top: 17,
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
                  Danh mục sản phẩm
                </Text>
                <Pressable
                  onPress={() => setVisibleModalCategory(false)}
                  style={{position: 'absolute', right: 0}}>
                  <AntDesign name="close" size={30} />
                </Pressable>
              </View>
              <View style={{top: 16}}>
                <ScrollView
                  contentContainerStyle={{
                    width: width - 24,
                    left: 12,
                    paddingBottom: 300,
                    rowGap: 15,
                  }}
                  showsVerticalScrollIndicator={false}>
                  {products.map(item => (
                    <React.Fragment key={item.group_id}>
                      <View style={{height: 21, flexDirection: 'row'}}>
                        <Pressable
                          onPress={() => handlerSelection(item.group_id)}
                          style={{flexDirection: 'row', columnGap: 12}}>
                          <MaterialCommunityIcons
                            name={
                              selectionCate === item.group_id
                                ? 'radiobox-marked'
                                : 'radiobox-blank'
                            }
                            size={20}
                            color="#0060af"
                          />
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
                          disabled={
                            selectionCate === item.group_id ? false : true
                          }
                          style={{right: 0, position: 'absolute'}}
                          onPress={handlerShowChildrent}>
                          <MaterialIcons
                            name={
                              expandedCategory === true &&
                              selectionCate === item.group_id
                                ? 'keyboard-arrow-down'
                                : 'keyboard-arrow-right'
                            }
                            color="#000"
                            size={21}
                          />
                        </Pressable>
                      </View>

                      {expandedCategory === true &&
                        selectionCate === item.group_id && (
                          <View style={{left: 32, rowGap: 15}}>
                            {item.children.map(child => (
                              <React.Fragment key={child.id}>
                                <View
                                  style={{
                                    height: 21,
                                    flexDirection: 'row',
                                    columnGap: 21,
                                  }}>
                                  <Pressable
                                    onPress={() =>
                                      handleChildSelection(child.id)
                                    }
                                    style={{
                                      flexDirection: 'row',
                                      columnGap: 12,
                                    }}>
                                    <MaterialCommunityIcons
                                      name={
                                        selectedChild === child.id
                                          ? 'radiobox-marked'
                                          : 'radiobox-blank'
                                      }
                                      size={20}
                                      color="#0060af"
                                    />
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
                                    style={{left: 14}}
                                    onPress={handleExpandChild}>
                                    <MaterialIcons
                                      name={
                                        expandedChild === true &&
                                        selectedChild === child.id
                                          ? 'keyboard-arrow-down'
                                          : 'keyboard-arrow-right'
                                      }
                                      color="#000"
                                      size={21}
                                    />
                                  </Pressable>
                                </View>

                                {expandedChild === true &&
                                  selectedChild === child.id && (
                                    <View style={{left: 32, rowGap: 15}}>
                                      {child.product.map(product => (
                                        <View
                                          style={{
                                            height: 21,
                                            flexDirection: 'row',
                                          }}
                                          key={product.item_id}>
                                          <Pressable
                                            onPress={() =>
                                              handleProductSelection(
                                                product.item_id,
                                              )
                                            }
                                            style={{
                                              flexDirection: 'row',
                                              columnGap: 12,
                                            }}>
                                            <MaterialCommunityIcons
                                              name={
                                                selectedProduct ===
                                                product.item_id
                                                  ? 'radiobox-marked'
                                                  : 'radiobox-blank'
                                              }
                                              size={20}
                                              color="#0060af"
                                            />
                                            <Text
                                              style={{
                                                height: 21,
                                                fontSize: 14,
                                                fontWeight: 'regular',
                                                color: '#808080',
                                              }}>
                                              {product.title}
                                            </Text>
                                          </Pressable>
                                        </View>
                                      ))}
                                    </View>
                                  )}
                              </React.Fragment>
                            ))}
                          </View>
                        )}
                    </React.Fragment>
                  ))}
                </ScrollView>
              </View>
              <Pressable
                onPress={saveCate}
                style={{
                  width: width,
                  height: 65,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: 0,
                }}>
                <View
                  style={{
                    width: width - 24,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: '#0060af',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#fff',
                    }}>
                    Lưu
                  </Text>
                </View>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      {modalPrice === true && (
        <Modal transparent={true} animationType="fade" visible={modalPrice}>
          <TouchableOpacity activeOpacity={1} style={styles.styleOpacity}>
            <View
              style={{
                width: width,
                height: 386,
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#fff',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                rowGap: 19,
              }}>
              <View
                style={{
                  left: 12,
                  top: 17,
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
                  Khoảng giá
                </Text>
                <Pressable
                  onPress={() => setModalPrice(false)}
                  style={{position: 'absolute', right: 0}}>
                  <AntDesign name="close" size={30} />
                </Pressable>
              </View>
              <View
                style={{
                  width: width - 24,
                  left: 12,
                  top: 19,
                  rowGap: 15,
                }}>
                <View style={{width: width - 24, height: 74, rowGap: 10}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Tối thiểu
                  </Text>
                  <View
                    style={{
                      height: 47,
                      backgroundColor: '#fff',
                      borderWidth: 1,
                      borderColor: '#f1f1f1',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <TextInput
                      placeholder="Nhập giá tối thiểu"
                      placeholderTextColor="#aaa"
                      style={{position: 'absolute', left: 0, marginLeft: 15}}
                    />
                    <Text style={{position: 'absolute', right: 15}}>đ</Text>
                  </View>
                </View>
                <View style={{width: width - 24, height: 74, rowGap: 10}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Tối đa
                  </Text>
                  <View
                    style={{
                      height: 47,
                      backgroundColor: '#fff',
                      borderWidth: 1,
                      borderColor: '#f1f1f1',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <TextInput
                      placeholder="Nhập giá tối đa"
                      placeholderTextColor="#aaa"
                      style={{position: 'absolute', left: 0, marginLeft: 15}}
                    />
                    <Text style={{position: 'absolute', right: 15}}>đ</Text>
                  </View>
                </View>
              </View>
              <Pressable
                style={{
                  width: width,
                  height: 65,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: 0,
                }}>
                <View
                  style={{
                    width: width - 24,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: '#0060af',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#fff',
                    }}>
                    Lưu
                  </Text>
                </View>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      {modalEvaluate === true && (
        <Modal transparent={true} animationType="fade" visible={modalEvaluate}>
          <TouchableOpacity activeOpacity={1} style={styles.styleOpacity}>
            <View
              style={{
                width: width,
                height: 386,
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#fff',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                rowGap: 19,
              }}>
              <View
                style={{
                  left: 12,
                  top: 17,
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
                  Đánh giá
                </Text>
                <Pressable
                  onPress={() => setVisibleModalEvaluate(false)}
                  style={{position: 'absolute', right: 0}}>
                  <AntDesign name="close" size={30} />
                </Pressable>
              </View>
              <View
                style={{
                  width: width - 247,
                  top: 16,
                  height: 170,
                  rowGap: 15,
                  left: 12,
                }}>
                {evaluate.map(item => (
                  <Pressable
                    onPress={() => selectionEvaluate(item.value)}
                    style={{
                      height: 22,
                      columnGap: 12,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {selectEvaluate.includes(item.value) ? (
                      <AntDesign name="checksquare" size={22} color="#0060af" />
                    ) : (
                      <Feather name="square" size={22} color="#808080" />
                    )}
                    <View
                      style={{
                        flexDirection: 'row',
                        columnGap: 10,
                        justifyContent: 'center',
                      }}>
                      <View style={{flexDirection: 'row', columnGap: 3}}>
                        {Array.from({length: item.value}).map((_, index) => (
                          <FontAwesome
                            name="star"
                            color="#FEC007"
                            size={17.7}
                          />
                        ))}
                        {Array.from({length: 5 - item.value}).map(
                          (_, index) => (
                            <FontAwesome
                              name="star-o"
                              color="#FEC007"
                              size={17.7}
                            />
                          ),
                        )}
                      </View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'regular',
                          color: '#212121',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
              <Pressable
                style={{
                  width: width,
                  height: 65,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: 0,
                }}>
                <View
                  style={{
                    width: width - 24,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: '#0060af',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#fff',
                    }}>
                    Lưu
                  </Text>
                </View>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  styleOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});
