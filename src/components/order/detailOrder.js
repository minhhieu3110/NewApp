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
import {icon, image} from '../../assets/index';
import {useEffect, useState} from 'react';
import {formatCurrency} from '../../utils/fomatCurrency';
export default function OrderDetails({navigation, route}) {
  const [confirmOrderVisible, setConfirmOrderVisible] = useState(false);
  const [getOrderVisible, setGetOrderVisible] = useState(false);
  const [processingVisible, setProcessingVisible] = useState(false);
  const [completeVisible, setCompleteVisible] = useState(false);
  const [cancelVisible, setCancelVisible] = useState(false);
  const [saveMoney, setSaveMoney] = useState(100000);
  const [modalVisibleCancelOrder, setModalVisibleCancelOrder] = useState(false);
  const [lengthReason, setLengthReason] = useState(0);
  const [reason, setReason] = useState(null);
  const infoPay = [
    {
      id: 1,
      option: 'bankTransfer',
      title: 'Chuyển khoản',
      value: {
        STK: '123456789',
        nameAccount: 'Nguyen Van A',
        nameBank: 'Vietcombank',
        contentBankTransfer:
          'Chuyen tien thanh cong, vui long kiem tra so tien trong tai khoan',
      },
    },
    {
      id: 2,
      option: 'COD',
      title: 'Thanh toán khi nhận hàng',
      value: 'Quý Khách Hàng vui lòng thanh toán tiền mặt khi nhận hàng',
    },
    {
      id: 3,
      option: 'payCompany',
      title: 'Thanh toán tại công ty',
      value:
        'Quý Khách Hàng có thể mua hàng và thanh toán trực tiếp tại công ty',
    },
    {
      id: 4,
      option: 'payOnline',
      title: 'Thanh toán online',
      value: 'Quý Khách Hàng có thể mua hàng và thanh toán online',
    },
  ];
  const infoShipping = [
    {id: 1, option: 'fastDelivery', title: 'Giao hàng nhanh', fee: 37000},
    {
      id: 2,
      option: 'economyDelivery',
      title: 'Giao hàng tiết kiệm',
      fee: 35000,
    },
  ];
  const fakeDataVoucher = [
    {
      id: 1,
      title: 'Giảm 5%',
      number: 5,
      unit: '%',
      value: '5%',
      conditionApply: [
        'Lượt sử dụng có hạn. Nhanh tay kẻo lỡ bạn nhé! Giảm 5% đơn tối thiểu 100.000đ, giảm tối đa 50.000đ.',
        'Những sản phẩm bị hạn chế chạy khuyến mãi theo quy định của Nhà nước sẽ không được hiển thị nếu nằm trong danh sách sản phẩm đã chọn.',
        'Áp dụng cho mọi hình thức thanh toán',
        'Áp dụng với tất cả các Đơn vị vận chuyển',
        'Áp dụng đến 15/11/2023. Mỗi tài khoản chỉ được sử dụng một lần duy nhất.',
        'Mã giảm giá được phát hành bởi người bán và sẽ không được hoàn lại với bất kỳ lý do nào.',
      ],
      summaryConditionApply: 'Đơn tối thiểu 100.000đ',
      minimizeDiscount: 'Giảm tối đa 50.000đ',
      timeExpire: '00:00',
      dateExpire: '15/11/2023',
    },
    {
      id: 2,
      title: 'Giảm 10%',
      number: 10,
      unit: '%',
      value: '10%',
      conditionApply: [
        'Lượt sử dụng có hạn. Nhanh tay kẻo lỡ bạn nhé! Giảm 10% đơn tối thiểu 1.000.000đ, giảm tối đa 100.000đ.',
        'Những sản phẩm bị hạn chế chạy khuyến mãi theo quy định của Nhà nước sẽ không được hiển thị nếu nằm trong danh sách sản phẩm đã chọn.',
        'Áp dụng cho mọi hình thức thanh toán',
        'Áp dụng với tất cả các Đơn vị vận chuyển',
        'Áp dụng đến 15/12/2023. Mỗi tài khoản chỉ được sử dụng một lần duy nhất.',
        'Mã giảm giá được phát hành bởi người bán và sẽ không được hoàn lại với bất kỳ lý do nào.',
      ],
      summaryConditionApply: 'Đơn tối thiểu 1.000.000đ',
      minimizeDiscount: 'Giảm tối đa 100.000đ',
      timeExpire: '00:00',
      dateExpire: '15/12/2023',
    },
    {
      id: 3,
      title: 'Giảm 15.000 VNĐ',
      number: 15000,
      unit: 'VNĐ',
      value: '15.000 VNĐ',
      conditionApply: [
        'Lượt sử dụng có hạn. Nhanh tay kẻo lỡ bạn nhé! Giảm 15.000 VNĐ đơn tối thiểu 300.000đ',
        'Những sản phẩm bị hạn chế chạy khuyến mãi theo quy định của Nhà nước sẽ không được hiển thị nếu nằm trong danh sách sản phẩm đã chọn.',
        'Áp dụng cho mọi hình thức thanh toán',
        'Áp dụng với tất cả các Đơn vị vận chuyển',
        'Áp dụng đến 10/11/2023. Mỗi tài khoản chỉ được sử dụng một lần duy nhất.',
        'Mã giảm giá được phát hành bởi người bán và sẽ không được hoàn lại với bất kỳ lý do nào.',
      ],
      summaryConditionApply: 'Đơn tối thiểu 300.000đ',
      minimizeDiscount: '',
      timeExpire: '00:00',
      dateExpire: '10/11/2023',
    },
    {
      id: 4,
      title: 'Giảm 20.000 VNĐ',
      number: 20000,
      unit: 'VNĐ',
      value: '20.000 VNĐ',
      conditionApply: [
        'Lượt sử dụng có hạn. Nhanh tay kẻo lỡ bạn nhé! Giảm 20.000 VNĐ đơn tối thiểu 400.000đ.',
        'Những sản phẩm bị hạn chế chạy khuyến mãi theo quy định của Nhà nước sẽ không được hiển thị nếu nằm trong danh sách sản phẩm đã chọn.',
        'Áp dụng cho mọi hình thức thanh toán',
        'Áp dụng với tất cả các Đơn vị vận chuyển',
        'Áp dụng đến 15/10/2023. Mỗi tài khoản chỉ được sử dụng một lần duy nhất.',
        'Mã giảm giá được phát hành bởi người bán và sẽ không được hoàn lại với bất kỳ lý do nào.',
      ],
      summaryConditionApply: 'Đơn tối thiểu 400.000đ',
      minimizeDiscount: '',
      timeExpire: '00:00',
      dateExpire: '15/10/2023',
    },
  ];
  const productsPay = [
    {
      id: 1,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      type: '2L',
      price: 1243000,
      quantity: 2,
      image: `${image.image_demo_choose_product}`,
    },
    {
      id: 2,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      type: '2L',
      price: 1243000,
      quantity: 4,
      image: `${image.image_demo_choose_product}`,
    },
    {
      id: 3,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      type: '2L',
      price: 1243000,
      quantity: 2,
      image: `${image.image_demo_choose_product}`,
    },
    {
      id: 4,
      nameProduct: 'Kixx HYBRID - Dầu động cơ cao cấp',
      type: '2L',
      price: 1243000,
      quantity: 2,
      image: `${image.image_demo_choose_product}`,
    },
  ];
  const titlePay = 'Thanh toán chuyển khoản';
  const titleShipping = 'Giao hàng nhanh';
  const titleVoucher = 'Giảm 5%';
  const getInfoPay = infoPay.filter(item => item.title === titlePay);
  const [flag, setFlag] = useState(null);
  useEffect(() => {
    if (route.params?.flag) {
      const flag = route.params.flag;
      flag === 1 && setConfirmOrderVisible(true);
      flag === 2 && setGetOrderVisible(true);
      flag === 3 && setProcessingVisible(true);
      flag === 4 && setCompleteVisible(true);
      flag === 5 && setCancelVisible(true);
      setFlag(flag);
    }
  });
  const provisionalMoney = productsPay.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  const [noChooseReasonRadio, setNoChooseReasonRadio] = useState(
    `${icon.icon_radio_button_no_select}`,
  );
  const [chooseReasonRadio, setChooseReasonRadio] = useState(
    `${icon.icon_radio_button}`,
  );
  const chooseReasonHandler = optionReason => {
    setReason(optionReason);
  };
  const goBack = () => {
    flag === 1 && navigation.navigate('WaitConfirmOrder');
    flag === 2 && navigation.navigate('WaitGetOrder');
    flag === 3 && navigation.navigate('ProcessingOrder');
    flag === 4 && navigation.navigate('FinishedOrder');
    flag === 5 && navigation.navigate('CancelOrder');
  };
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <View
          style={{
            flexDirection: 'row',
            top: 13,
            height: 24,
            alignItems: 'center',
          }}>
          <Pressable style={style.title} onPress={goBack}>
            <Image source={icon.icon_arrow_left} />
            <Text style={style.textTitle}>Chi tiết đơn hàng</Text>
          </Pressable>
          <Text
            style={{
              height: 24,
              fontSize: 16,
              fontWeight: 'semibold',
              color: '#fff',
              textTransform: 'uppercase',
              right: 5,
              position: 'absolute',
            }}>
            #{`2314abc`}
          </Text>
        </View>
      </View>
      {confirmOrderVisible && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.infoDetailOrders}>
          <View style={style.titleInfoDetailOrders}>
            <View style={style.titleDetailOrders}>
              <Image
                style={style.iconTilteDetailOrders}
                source={icon.icon_wait_confirm_order_detail}
              />
              <View style={style.textTitleDetailOrders}>
                <Text style={style.subTextTitleDetailOrders}>Chờ xác nhận</Text>
                <Text style={style.timeOrders}>8:40, 13/11/2024</Text>
              </View>
            </View>
          </View>
          <View style={style.detailOrderContainer}>
            <View style={{height: 232.39, gap: 6}}>
              <View
                style={{
                  height: 35,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 156,
                    height: 21,
                    flexDirection: 'row',
                    gap: 10.4,
                  }}>
                  <Image
                    style={{height: 21}}
                    source={icon.icon_address_receive_order}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Địa chỉ nhận hàng
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 197.39}}>
                <View style={{width: 278, height: 21, flexDirection: 'row'}}>
                  <Text style={style.nameNumberPhone}>Nguyễn Ngọc Trung</Text>
                  <Text
                    style={[
                      style.nameNumberPhone,
                      {marginLeft: 27, marginRight: 18},
                    ]}>
                    |
                  </Text>
                  <Text style={style.nameNumberPhone}>0123456789</Text>
                </View>
                <View style={{width: width -48, height: 42}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#212121',
                      lineHeight: 22,
                      top: 10,
                    }}>
                    Building 59, 71 Chế Lan Viên, Phường Tây Thạnh, Phường Tây
                    Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                    top: 23,
                  }}>
                  Ghi chú cho người bán
                </Text>
                <View
                  style={{
                    width: width -48,
                    height: 'auto',
                    top: 33.4,
                    backgroundColor: '#f1f1f1',
                    paddingLeft: 15.5,
                    paddingTop: 13,
                    paddingBottom: 14,
                  }}>
                  <Text
                    style={{
                      height: 20,
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#808080 ',
                    }}>
                    Giao giờ hành chính, gọi trước nửa tiếng
                  </Text>
                </View>
              </View>
            </View>
            <View style={{width: width -48, height: 'auto', gap: 12}}>
              <View
                style={{
                  width: 105,
                  height: 21,
                  gap: 10.4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{width: 17.61, height: 17.61}}>
                  <Image source={icon.icon_product_pay} />
                </View>
                <View style={{width: 80, height: 21}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Sản phẩm
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 'auto', gap: 12}}>
                {productsPay.map((product, index) => (
                  <View key={index}>
                    <View
                      style={{
                        width: width -48,
                        height: 80,
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        marginBottom: 12,
                      }}>
                      <View style={{width: 80, height: 80}}>
                        <Image source={product.image} />
                      </View>
                      <View style={{width: 303, height: 78, gap: 10}}>
                        <Text
                          style={{
                            width: 297,
                            height: 21,
                            fontSize: 16,
                            fontWeight: 'regular',
                            lineHeight: 22,
                            color: '#212121',
                          }}>
                          {product.nameProduct}
                        </Text>
                        <View
                          style={{
                            height: 19,
                            width: 303,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                            }}>
                            Phân loại: <Text>{product.type}</Text>
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                              right: 0,
                              position: 'absolute',
                            }}>
                            x<Text>{product.quantity}</Text>
                          </Text>
                        </View>
                        <View style={{width: 303, height: 21}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'regular',
                              color: '#212121',
                              right: 0,
                              position: 'absolute',
                            }}>
                            {formatCurrency(product.price)}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width -48,
                        height: 1,
                        backgroundColor: '#f1f1f1',
                        marginBottom: 12,
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={{width: 412, height: 459, rowGap: 12}}>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 189, rowGap: 12, left: 12}}>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức thanh toán
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Thanh toán chuyển khoản
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_shipping} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức giao hàng
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giao hàng nhanh
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Voucher/Mã khuyến mãi
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giảm 5%
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 181, rowGap: 11}}>
              <View
                style={{
                  left: 12,
                  height: 21,
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 11,
                }}>
                <Image source={icon.icon_order_summary} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Tóm tắt đơn hàng
                </Text>
              </View>
              <View style={{height: 149, rowGap: 12, left: 12}}>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tổng tiền hàng</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(provisionalMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tiết kiệm</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency(saveMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Mã giảm giá</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency((provisionalMoney * 5) / 100)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Phí vận chuyển</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(37000)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>
                    Điểm tích lũy được
                  </Text>
                  <Text style={style.valueOrderSummary}>{1200} điểm</Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                  left: 12,
                }}></View>
              <View style={{height: 21, flexDirection: 'row', left: 12}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Tổng tiền
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#FD6C31',
                    right: 0,
                    position: 'absolute',
                  }}>
                  {formatCurrency(
                    provisionalMoney +
                      37000 -
                      (saveMoney + (provisionalMoney * 5) / 100),
                  )}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: width -48,
              height: 45,
              flexDirection: 'row',
              columnGap: 10,
              top: 25,
              left: 12,
            }}>
            <Pressable
              style={{
                width: 192.5,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#0060af',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'medium', color: '#0060af'}}>
                Liên hệ
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisibleCancelOrder(true)}
              style={{
                width: 192.5,
                borderRadius: 10,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0060af',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'medium', color: '#fff'}}>
                Hủy
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
      {getOrderVisible && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.infoDetailOrders}>
          <View style={style.titleInfoDetailOrders}>
            <View style={style.titleDetailOrders}>
              <Image
                style={style.iconTilteDetailOrders}
                source={icon.icon_wait_get_order_detail}
              />
              <View style={style.textTitleDetailOrders}>
                <Text style={style.subTextTitleDetailOrders}>Chờ lấy hàng</Text>
                <Text style={style.timeOrders}>8:40, 13/11/2024</Text>
              </View>
            </View>
          </View>
          <View style={style.detailOrderContainer}>
            <View style={{height: 232.39, gap: 6}}>
              <View
                style={{
                  height: 35,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 156,
                    height: 21,
                    flexDirection: 'row',
                    gap: 10.4,
                  }}>
                  <Image
                    style={{height: 21}}
                    source={icon.icon_address_receive_order}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Địa chỉ nhận hàng
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 197.39}}>
                <View style={{width: 278, height: 21, flexDirection: 'row'}}>
                  <Text style={style.nameNumberPhone}>Nguyễn Ngọc Trung</Text>
                  <Text
                    style={[
                      style.nameNumberPhone,
                      {marginLeft: 27, marginRight: 18},
                    ]}>
                    |
                  </Text>
                  <Text style={style.nameNumberPhone}>0123456789</Text>
                </View>
                <View style={{width: width -48, height: 42}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#212121',
                      lineHeight: 22,
                      top: 10,
                    }}>
                    Building 59, 71 Chế Lan Viên, Phường Tây Thạnh, Phường Tây
                    Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                    top: 23,
                  }}>
                  Ghi chú cho người bán
                </Text>
                <View
                  style={{
                    width: width -48,
                    height: 'auto',
                    top: 33.4,
                    backgroundColor: '#f1f1f1',
                    paddingLeft: 15.5,
                    paddingTop: 13,
                    paddingBottom: 14,
                  }}>
                  <Text
                    style={{
                      height: 20,
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#808080 ',
                    }}>
                    Giao giờ hành chính, gọi trước nửa tiếng
                  </Text>
                </View>
              </View>
            </View>
            <View style={{width: width -48, height: 'auto', gap: 12}}>
              <View
                style={{
                  width: 105,
                  height: 21,
                  gap: 10.4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{width: 17.61, height: 17.61}}>
                  <Image source={icon.icon_product_pay} />
                </View>
                <View style={{width: 80, height: 21}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Sản phẩm
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 'auto', gap: 12}}>
                {productsPay.map((product, index) => (
                  <View key={index}>
                    <View
                      style={{
                        width: width -48,
                        height: 80,
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        marginBottom: 12,
                      }}>
                      <View style={{width: 80, height: 80}}>
                        <Image source={product.image} />
                      </View>
                      <View style={{width: 303, height: 78, gap: 10}}>
                        <Text
                          style={{
                            width: 297,
                            height: 21,
                            fontSize: 16,
                            fontWeight: 'regular',
                            lineHeight: 22,
                            color: '#212121',
                          }}>
                          {product.nameProduct}
                        </Text>
                        <View
                          style={{
                            height: 19,
                            width: 303,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                            }}>
                            Phân loại: <Text>{product.type}</Text>
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                              right: 0,
                              position: 'absolute',
                            }}>
                            x<Text>{product.quantity}</Text>
                          </Text>
                        </View>
                        <View style={{width: 303, height: 21}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'regular',
                              color: '#212121',
                              right: 0,
                              position: 'absolute',
                            }}>
                            {formatCurrency(product.price)}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width -48,
                        height: 1,
                        backgroundColor: '#f1f1f1',
                        marginBottom: 12,
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={{width: 412, height: 459, rowGap: 12}}>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 189, rowGap: 12, left: 12}}>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức thanh toán
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Thanh toán chuyển khoản
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_shipping} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức giao hàng
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giao hàng nhanh
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Voucher/Mã khuyến mãi
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giảm 5%
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 181, rowGap: 11}}>
              <View
                style={{
                  left: 12,
                  height: 21,
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 11,
                }}>
                <Image source={icon.icon_order_summary} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Tóm tắt đơn hàng
                </Text>
              </View>
              <View style={{height: 149, rowGap: 12, left: 12}}>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tổng tiền hàng</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(provisionalMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tiết kiệm</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency(saveMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Mã giảm giá</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency((provisionalMoney * 5) / 100)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Phí vận chuyển</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(37000)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>
                    Điểm tích lũy được
                  </Text>
                  <Text style={style.valueOrderSummary}>{1200} điểm</Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                  left: 12,
                }}></View>
              <View style={{height: 21, flexDirection: 'row', left: 12}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Tổng tiền
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#FD6C31',
                    right: 0,
                    position: 'absolute',
                  }}>
                  {formatCurrency(
                    provisionalMoney +
                      37000 -
                      (saveMoney + (provisionalMoney * 5) / 100),
                  )}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: width -48,
              height: 45,
              flexDirection: 'row',
              columnGap: 10,
              top: 25,
              left: 12,
            }}>
            <Pressable
              style={{
                width: 192.5,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#0060af',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'medium', color: '#0060af'}}>
                Liên hệ
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisibleCancelOrder(true)}
              style={{
                width: 192.5,
                borderRadius: 10,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0060af',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'medium', color: '#fff'}}>
                Hủy
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
      {processingVisible && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.infoDetailOrders}>
          <View style={style.titleInfoDetailOrders}>
            <View style={style.titleDetailOrders}>
              <Image
                style={style.iconTilteDetailOrders}
                source={icon.icon_processing_order_detail}
              />
              <View style={style.textTitleDetailOrders}>
                <Text style={style.subTextTitleDetailOrders}>Đang giao</Text>
                <Text style={style.timeOrders}>8:40, 13/11/2024</Text>
              </View>
            </View>
          </View>
          <View style={style.detailOrderContainer}>
            <View style={{height: 232.39, gap: 6}}>
              <View
                style={{
                  height: 35,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 156,
                    height: 21,
                    flexDirection: 'row',
                    gap: 10.4,
                  }}>
                  <Image
                    style={{height: 21}}
                    source={icon.icon_address_receive_order}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Địa chỉ nhận hàng
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 197.39}}>
                <View style={{width: 278, height: 21, flexDirection: 'row'}}>
                  <Text style={style.nameNumberPhone}>Nguyễn Ngọc Trung</Text>
                  <Text
                    style={[
                      style.nameNumberPhone,
                      {marginLeft: 27, marginRight: 18},
                    ]}>
                    |
                  </Text>
                  <Text style={style.nameNumberPhone}>0123456789</Text>
                </View>
                <View style={{width: width -48, height: 42}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#212121',
                      lineHeight: 22,
                      top: 10,
                    }}>
                    Building 59, 71 Chế Lan Viên, Phường Tây Thạnh, Phường Tây
                    Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                    top: 23,
                  }}>
                  Ghi chú cho người bán
                </Text>
                <View
                  style={{
                    width: width -48,
                    height: 'auto',
                    top: 33.4,
                    backgroundColor: '#f1f1f1',
                    paddingLeft: 15.5,
                    paddingTop: 13,
                    paddingBottom: 14,
                  }}>
                  <Text
                    style={{
                      height: 20,
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#808080 ',
                    }}>
                    Giao giờ hành chính, gọi trước nửa tiếng
                  </Text>
                </View>
              </View>
            </View>
            <View style={{width: width -48, height: 'auto', gap: 12}}>
              <View
                style={{
                  width: 105,
                  height: 21,
                  gap: 10.4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{width: 17.61, height: 17.61}}>
                  <Image source={icon.icon_product_pay} />
                </View>
                <View style={{width: 80, height: 21}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Sản phẩm
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 'auto', gap: 12}}>
                {productsPay.map((product, index) => (
                  <View key={index}>
                    <View
                      style={{
                        width: width -48,
                        height: 80,
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        marginBottom: 12,
                      }}>
                      <View style={{width: 80, height: 80}}>
                        <Image source={product.image} />
                      </View>
                      <View style={{width: 303, height: 78, gap: 10}}>
                        <Text
                          style={{
                            width: 297,
                            height: 21,
                            fontSize: 16,
                            fontWeight: 'regular',
                            lineHeight: 22,
                            color: '#212121',
                          }}>
                          {product.nameProduct}
                        </Text>
                        <View
                          style={{
                            height: 19,
                            width: 303,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                            }}>
                            Phân loại: <Text>{product.type}</Text>
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                              right: 0,
                              position: 'absolute',
                            }}>
                            x<Text>{product.quantity}</Text>
                          </Text>
                        </View>
                        <View style={{width: 303, height: 21}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'regular',
                              color: '#212121',
                              right: 0,
                              position: 'absolute',
                            }}>
                            {formatCurrency(product.price)}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width -48,
                        height: 1,
                        backgroundColor: '#f1f1f1',
                        marginBottom: 12,
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={{width: 412, height: 459, rowGap: 12}}>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 189, rowGap: 12, left: 12}}>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức thanh toán
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Thanh toán chuyển khoản
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_shipping} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức giao hàng
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giao hàng nhanh
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Voucher/Mã khuyến mãi
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giảm 5%
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 181, rowGap: 11}}>
              <View
                style={{
                  left: 12,
                  height: 21,
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 11,
                }}>
                <Image source={icon.icon_order_summary} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Tóm tắt đơn hàng
                </Text>
              </View>
              <View style={{height: 149, rowGap: 12, left: 12}}>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tổng tiền hàng</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(provisionalMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tiết kiệm</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency(saveMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Mã giảm giá</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency((provisionalMoney * 5) / 100)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Phí vận chuyển</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(37000)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>
                    Điểm tích lũy được
                  </Text>
                  <Text style={style.valueOrderSummary}>{1200} điểm</Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                  left: 12,
                }}></View>
              <View style={{height: 21, flexDirection: 'row', left: 12}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Tổng tiền
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#FD6C31',
                    right: 0,
                    position: 'absolute',
                  }}>
                  {formatCurrency(
                    provisionalMoney +
                      37000 -
                      (saveMoney + (provisionalMoney * 5) / 100),
                  )}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: width -48,
              height: 45,
              flexDirection: 'row',
              columnGap: 10,
              top: 25,
              left: 12,
            }}>
            <Pressable
              style={{
                width: 192.5,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#0060af',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'medium', color: '#0060af'}}>
                Liên hệ
              </Text>
            </Pressable>
            <Pressable
              disabled={true}
              style={{
                width: 192.5,
                borderRadius: 10,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f1f1f1',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'medium', color: '#808080'}}>
                Hủy
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
      {completeVisible && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.infoDetailOrders}>
          <View style={style.titleInfoDetailOrders}>
            <View style={style.titleDetailOrders}>
              <Image
                style={style.iconTilteDetailOrders}
                source={icon.icon_completed_order_detail}
              />
              <View style={style.textTitleDetailOrders}>
                <Text style={style.subTextTitleDetailOrders}>Đã hoàn thành. Gửi đánh giá ngay!</Text>
                <Text style={style.timeOrders}>8:40, 13/11/2024</Text>
              </View>
            </View>
          </View>
          <View style={style.detailOrderContainer}>
            <View style={{height: 232.39, gap: 6}}>
              <View
                style={{
                  height: 35,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 156,
                    height: 21,
                    flexDirection: 'row',
                    gap: 10.4,
                  }}>
                  <Image
                    style={{height: 21}}
                    source={icon.icon_address_receive_order}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Địa chỉ nhận hàng
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 197.39}}>
                <View style={{width: 278, height: 21, flexDirection: 'row'}}>
                  <Text style={style.nameNumberPhone}>Nguyễn Ngọc Trung</Text>
                  <Text
                    style={[
                      style.nameNumberPhone,
                      {marginLeft: 27, marginRight: 18},
                    ]}>
                    |
                  </Text>
                  <Text style={style.nameNumberPhone}>0123456789</Text>
                </View>
                <View style={{width: width -48, height: 42}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#212121',
                      lineHeight: 22,
                      top: 10,
                    }}>
                    Building 59, 71 Chế Lan Viên, Phường Tây Thạnh, Phường Tây
                    Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                    top: 23,
                  }}>
                  Ghi chú cho người bán
                </Text>
                <View
                  style={{
                    width: width -48,
                    height: 'auto',
                    top: 33.4,
                    backgroundColor: '#f1f1f1',
                    paddingLeft: 15.5,
                    paddingTop: 13,
                    paddingBottom: 14,
                  }}>
                  <Text
                    style={{
                      height: 20,
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#808080 ',
                    }}>
                    Giao giờ hành chính, gọi trước nửa tiếng
                  </Text>
                </View>
              </View>
            </View>
            <View style={{width: width -48, height: 'auto', gap: 12}}>
              <View
                style={{
                  width: 105,
                  height: 21,
                  gap: 10.4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{width: 17.61, height: 17.61}}>
                  <Image source={icon.icon_product_pay} />
                </View>
                <View style={{width: 80, height: 21}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Sản phẩm
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 'auto', gap: 12}}>
                {productsPay.map((product, index) => (
                  <View key={index}>
                    <View
                      style={{
                        width: width -48,
                        height: 80,
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        marginBottom: 12,
                      }}>
                      <View style={{width: 80, height: 80}}>
                        <Image source={product.image} />
                      </View>
                      <View style={{width: 303, height: 78, gap: 10}}>
                        <Text
                          style={{
                            width: 297,
                            height: 21,
                            fontSize: 16,
                            fontWeight: 'regular',
                            lineHeight: 22,
                            color: '#212121',
                          }}>
                          {product.nameProduct}
                        </Text>
                        <View
                          style={{
                            height: 19,
                            width: 303,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                            }}>
                            Phân loại: <Text>{product.type}</Text>
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                              right: 0,
                              position: 'absolute',
                            }}>
                            x<Text>{product.quantity}</Text>
                          </Text>
                        </View>
                        <View style={{width: 303, height: 21}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'regular',
                              color: '#212121',
                              right: 0,
                              position: 'absolute',
                            }}>
                            {formatCurrency(product.price)}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width -48,
                        height: 1,
                        backgroundColor: '#f1f1f1',
                        marginBottom: 12,
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={{width: 412, height: 459, rowGap: 12}}>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 189, rowGap: 12, left: 12}}>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức thanh toán
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Thanh toán chuyển khoản
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_shipping} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức giao hàng
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giao hàng nhanh
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Voucher/Mã khuyến mãi
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giảm 5%
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 181, rowGap: 11}}>
              <View
                style={{
                  left: 12,
                  height: 21,
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 11,
                }}>
                <Image source={icon.icon_order_summary} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Tóm tắt đơn hàng
                </Text>
              </View>
              <View style={{height: 149, rowGap: 12, left: 12}}>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tổng tiền hàng</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(provisionalMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tiết kiệm</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency(saveMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Mã giảm giá</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency((provisionalMoney * 5) / 100)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Phí vận chuyển</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(37000)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>
                    Điểm tích lũy được
                  </Text>
                  <Text style={style.valueOrderSummary}>{1200} điểm</Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                  left: 12,
                }}></View>
              <View style={{height: 21, flexDirection: 'row', left: 12}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Tổng tiền
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#FD6C31',
                    right: 0,
                    position: 'absolute',
                  }}>
                  {formatCurrency(
                    provisionalMoney +
                      37000 -
                      (saveMoney + (provisionalMoney * 5) / 100),
                  )}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: width -48,
              height: 45,
              flexDirection: 'row',
              columnGap: 10,
              top: 25,
              left: 12,
            }}>
            <Pressable
              style={{
                width: 192.5,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#0060af',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'medium', color: '#0060af'}}>
                Liên hệ
              </Text>
            </Pressable>
            <Pressable
            onPress={()=>navigation.navigate('EvaluateOrder')}
              style={{
                width: 192.5,
                borderRadius: 10,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0060af',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'medium', color: '#fff'}}>
                Đánh giá
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
      {cancelVisible && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.infoDetailOrders}>
          <View style={style.titleInfoDetailOrders}>
            <View style={style.titleDetailOrders}>
              <Image
                style={style.iconTilteDetailOrders}
                source={icon.icon_cancel_order_detail}
              />
              <View style={style.textTitleDetailOrders}>
                <Text style={style.subTextTitleDetailOrders}>Đã hủy</Text>
                <Text style={style.timeOrders}>8:40, 13/11/2024</Text>
              </View>
            </View>
          </View>
          <View style={style.detailOrderContainer}>
            <View style={{height: 232.39, gap: 6}}>
              <View
                style={{
                  height: 35,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 156,
                    height: 21,
                    flexDirection: 'row',
                    gap: 10.4,
                  }}>
                  <Image
                    style={{height: 21}}
                    source={icon.icon_address_receive_order}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Địa chỉ nhận hàng
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 197.39}}>
                <View style={{width: 278, height: 21, flexDirection: 'row'}}>
                  <Text style={style.nameNumberPhone}>Nguyễn Ngọc Trung</Text>
                  <Text
                    style={[
                      style.nameNumberPhone,
                      {marginLeft: 27, marginRight: 18},
                    ]}>
                    |
                  </Text>
                  <Text style={style.nameNumberPhone}>0123456789</Text>
                </View>
                <View style={{width: width -48, height: 42}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#212121',
                      lineHeight: 22,
                      top: 10,
                    }}>
                    Building 59, 71 Chế Lan Viên, Phường Tây Thạnh, Phường Tây
                    Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                    top: 23,
                  }}>
                  Ghi chú cho người bán
                </Text>
                <View
                  style={{
                    width: width -48,
                    height: 'auto',
                    top: 33.4,
                    backgroundColor: '#f1f1f1',
                    paddingLeft: 15.5,
                    paddingTop: 13,
                    paddingBottom: 14,
                  }}>
                  <Text
                    style={{
                      height: 20,
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#808080 ',
                    }}>
                    Giao giờ hành chính, gọi trước nửa tiếng
                  </Text>
                </View>
              </View>
            </View>
            <View style={{width: width -48, height: 'auto', gap: 12}}>
              <View
                style={{
                  width: 105,
                  height: 21,
                  gap: 10.4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{width: 17.61, height: 17.61}}>
                  <Image source={icon.icon_product_pay} />
                </View>
                <View style={{width: 80, height: 21}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Sản phẩm
                  </Text>
                </View>
              </View>
              <View style={{width: width -48, height: 'auto', gap: 12}}>
                {productsPay.map((product, index) => (
                  <View key={index}>
                    <View
                      style={{
                        width: width -48,
                        height: 80,
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        marginBottom: 12,
                      }}>
                      <View style={{width: 80, height: 80}}>
                        <Image source={product.image} />
                      </View>
                      <View style={{width: 303, height: 78, gap: 10}}>
                        <Text
                          style={{
                            width: 297,
                            height: 21,
                            fontSize: 16,
                            fontWeight: 'regular',
                            lineHeight: 22,
                            color: '#212121',
                          }}>
                          {product.nameProduct}
                        </Text>
                        <View
                          style={{
                            height: 19,
                            width: 303,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                            }}>
                            Phân loại: <Text>{product.type}</Text>
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#808080',
                              right: 0,
                              position: 'absolute',
                            }}>
                            x<Text>{product.quantity}</Text>
                          </Text>
                        </View>
                        <View style={{width: 303, height: 21}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'regular',
                              color: '#212121',
                              right: 0,
                              position: 'absolute',
                            }}>
                            {formatCurrency(product.price)}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width -48,
                        height: 1,
                        backgroundColor: '#f1f1f1',
                        marginBottom: 12,
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={{width: 412, height: 459, rowGap: 12}}>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 189, rowGap: 12, left: 12}}>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức thanh toán
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Thanh toán chuyển khoản
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_shipping} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Phương thức giao hàng
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giao hàng nhanh
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
              <View style={{width: 207, height: 47, rowGap: 7}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10.4,
                  }}>
                  <Image source={icon.icon_product_pay} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    Voucher/Mã khuyến mãi
                  </Text>
                </View>
                <View style={{left: 32}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Giảm 5%
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 412,
                height: 5,
                backgroundColor: '#f1f1f1',
              }}></View>
            <View style={{width: width -48, height: 181, rowGap: 11}}>
              <View
                style={{
                  left: 12,
                  height: 21,
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 11,
                }}>
                <Image source={icon.icon_order_summary} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Tóm tắt đơn hàng
                </Text>
              </View>
              <View style={{height: 149, rowGap: 12, left: 12}}>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tổng tiền hàng</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(provisionalMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Tiết kiệm</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency(saveMoney)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Mã giảm giá</Text>
                  <Text style={style.valueOrderSummary}>
                    - {formatCurrency((provisionalMoney * 5) / 100)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>Phí vận chuyển</Text>
                  <Text style={style.valueOrderSummary}>
                    {formatCurrency(37000)}
                  </Text>
                </View>
                <View style={{height: 21, flexDirection: 'row'}}>
                  <Text style={style.titleOrderSummary}>
                    Điểm tích lũy được
                  </Text>
                  <Text style={style.valueOrderSummary}>{1200} điểm</Text>
                </View>
              </View>
              <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                  left: 12,
                }}></View>
              <View style={{height: 21, flexDirection: 'row', left: 12}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Tổng tiền
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#FD6C31',
                    right: 0,
                    position: 'absolute',
                  }}>
                  {formatCurrency(
                    provisionalMoney +
                      37000 -
                      (saveMoney + (provisionalMoney * 5) / 100),
                  )}
                </Text>
              </View>
              
            </View>
            <View
                style={{
                  width: width -48,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                  left: 12,
                }}></View>
              <Text
                style={{
                  top: 22,
                  left: 12,
                  fontSize: 14,
                  fontWeight: 'regular',
                  color: '#FF0000',
                  height: 19,
                }}>
                Lý do hủy: <Text>Tôi đặt sai địa chỉ</Text>
              </Text>
          </View>
          <View
            style={{
              width: width -48,
              height: 45,
              flexDirection: 'row',
              columnGap: 10,
              top: 35,
              left: 12,
            }}>
            <Pressable
              style={{
                width: width -48,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#0060af',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'medium', color: '#0060af'}}>
                Liên hệ
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
      <Modal visible={modalVisibleCancelOrder} transparent={true}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              width: width -48,
              height: 437,
              left: 12,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderColor: '#707070',
              backgroundColor: '#fff',
              borderWidth: 1,
            }}>
            <View style={{width: 371, height: 405}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#0060af',
                  textTransform: 'uppercase',
                }}>
                Lý do hủy đơn
              </Text>
              <Text
                style={{
                  top: 8,
                  fontSize: 14,
                  fontWeight: 'regular',
                  color: '#212121',
                }}>
                Vui lòng chọn lý do hủy đơn
              </Text>
              <View style={{top: 28, width: 371, height: 257, rowGap: 14}}>
                <Pressable
                  style={style.itemReasonCancel}
                  onPress={() => chooseReasonHandler('RS_1')}>
                  <View style={style.radioReasonCancel}>
                    <Image
                      source={
                        reason === 'RS_1'
                          ? chooseReasonRadio
                          : noChooseReasonRadio
                      }
                    />
                  </View>
                  <Text style={style.textReasonCancel}>
                    Tôi muốn chọn thêm sản phẩm
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => chooseReasonHandler('RS_2')}
                  style={style.itemReasonCancel}>
                  <View style={style.radioReasonCancel}>
                    <Image
                      source={
                        reason === 'RS_2'
                          ? chooseReasonRadio
                          : noChooseReasonRadio
                      }
                    />
                  </View>
                  <Text style={style.textReasonCancel}>
                    Tôi đặt sai địa chỉ
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => chooseReasonHandler('RS_3')}
                  style={style.itemReasonCancel}>
                  <View style={style.radioReasonCancel}>
                    <Image
                      source={
                        reason === 'RS_3'
                          ? chooseReasonRadio
                          : noChooseReasonRadio
                      }
                    />
                  </View>
                  <Text style={style.textReasonCancel}>Không muốn đặt nữa</Text>
                </Pressable>
                <Pressable
                  onPress={() => chooseReasonHandler('RS_4')}
                  style={style.itemReasonCancel}>
                  <View style={style.radioReasonCancel}>
                    <Image
                      source={
                        reason === 'RS_4'
                          ? chooseReasonRadio
                          : noChooseReasonRadio
                      }
                    />
                  </View>
                  <Text style={style.textReasonCancel}>
                    Tôi muốn đổi phương thức thanh toán
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => chooseReasonHandler('RS_#')}
                  style={[style.itemReasonCancel, {height: 116}]}>
                  <View style={style.radioReasonCancel}>
                    <Image
                      source={
                        reason === 'RS_#'
                          ? chooseReasonRadio
                          : noChooseReasonRadio
                      }
                    />
                  </View>
                  <View style={{width: 339, height: 116, rowGap: 6}}>
                    <View
                      style={{
                        width: 339,
                        height: 94,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#f1f1f1',
                        backgroundColor: '#fff',
                      }}>
                      <TextInput
                        editable={reason === 'RS_#' ? true : false}
                        maxLength={150}
                        multiline={true}
                        onLen
                        style={{left: 10}}
                        placeholder="Lý do khác"
                      />
                    </View>
                    <View style={{height: 16}}>
                      <View style={{right: 0, position: 'absolute'}}>
                        <Text>{lengthReason}/150</Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>
              <View
                style={{
                  width: 371,
                  height: 45,
                  columnGap: 10,
                  top: 63,
                  flexDirection: 'row',
                }}>
                <Pressable
                  onPress={() => setModalVisibleCancelOrder(false)}
                  style={{
                    width: 180.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#E0F3FF',
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
                  onPress={() => navigation.navigate('CancelOrder')}
                  style={{
                    width: 180.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#0060af',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'medium', color: '#fff'}}>
                    Xác nhận hủy
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
const {width, height} = Dimensions.get('window')
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FC',
  },
  titleContainer: {
    width: width,
    height: 54,
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    position: 'absolute',
    zIndex: 100,
  },
  title: {
    width: 204,
    height: 28,
    left: 3,
  },
  textTitle: {
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
  infoDetailOrders: {
    width: width,
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  titleInfoDetailOrders: {
    height: 121,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleDetailOrders: {
    height: 50,
    left: 12,
    top: 56,
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
  },
  iconTilteDetailOrders: {
    width: 50,
    height: 50,
  },
  textTitleDetailOrders: {
    height: 44,
    rowGap: 4,
  },
  subTextTitleDetailOrders: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#fff',
  },
  timeOrders: {
    fontWeight: 'regular',
    fontSize: 14,
    color: '#fff',
  },
  detailOrderContainer: {
    width: width -48,
    left: 12,
    top: 11,
  },
  nameNumberPhone: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
  },
  titleOrderSummary: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#808080',
  },
  valueOrderSummary: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#212121',
    right: 0,
    position: 'absolute',
  },
  itemReasonCancel: {
    height: 21,
    flexDirection: 'row',
    columnGap: 12,
  },
  radioReasonCancel: {
    width: 20,
    height: 20,
    aspectRatio: 1 / 1,
    borderRadius: 50,
    borderWidth: 1,
  },
  textReasonCancel: {
    height: 21,
    fontSize: 16,
    fontWeight: 'regular',
    color: '#212121',
  },
});
