import * as React from 'react';
import {useEffect, useState} from 'react';
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
import {formatCurrency} from '../../utils/formatCurrency';
export default function Pay({navigation, route}) {
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
  const provisionalMoney = productsPay.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const [showFormChooseMethodPayment, setShowFormChooseMethodPayment] =
    useState(false);
  const [showFormChooseMethodShipping, setShowFormChooseMethodShipping] =
    useState(false);
  const [showFormChooseVoucher, setShowFormChooseVoucher] = useState(false);
  const [radioButton, setRadioButton] = useState(`${icon.icon_radio_button}`);
  const [radioButtonNoSelect, setRadioButtonNoSelect] = useState(
    `${icon.icon_radio_button_no_select}`,
  );
  const [selectOption, setSelectOption] = useState(null);
  const [showInfoPay, setShowInfoPay] = useState(false);
  const [titlePay, setTitlePay] = useState('Chọn phương thức thanh toán');
  const [titleShipping, setTitleShipping] = useState(
    'Chọn phương thức vận chuyển',
  );
  const [titleVoucher, setTitleVoucher] = useState(
    'Chọn voucher/mã khuyến mãi',
  );
  const [discountVoucher, setDiscountVoucher] = useState(null);
  const [feeShipping, setFeeShipping] = useState(null);
  const [saveMoney, setSaveMoney] = useState(300000);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectDetailVoucher, setSelectDetailVoucher] = useState(null);
  const [detailVoucher, setDetailVoucher] = useState([
    {id: '', title: '', timeExpire: '', dateExpire: '', conditionApply: []},
  ]);
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
  const [showPopupOrderSuccess, setShowPopupOrderSuccess] = useState(false);
  const handlerChoose = option => {
    setSelectOption(option);
    setShowInfoPay(!showInfoPay);
  };
  const handlerChooseVoucher = id => {
    setSelectOption(id);
    const newDataVoucher = fakeDataVoucher.splice(id - 1, 1);
    fakeDataVoucher.unshift(newDataVoucher[0]);
  };
  const handlerFormChooseMethodPayment = () => {
    setShowFormChooseMethodPayment(!showFormChooseMethodPayment);
    if (titlePay === 'Chọn phương thức thanh toán') {
      setSelectOption('bankTransfer');
    }
    setShowInfoPay(!showInfoPay);
  };
  const handlerFormChooseMethodShipping = () => {
    setShowFormChooseMethodShipping(!showFormChooseMethodShipping);
    if (titleShipping === 'Chọn phương thức vận chuyển') {
      setSelectOption('fastDelivery');
    }
  };
  const handlerFormChooseVoucher = () => {
    setShowFormChooseVoucher(!showFormChooseVoucher);
    if (titleVoucher === 'Chọn voucher/mã khuyến mãi') {
      setSelectOption(1);
    }
  };
  const handlerConfirm = () => {
    if (showFormChooseMethodPayment === true) {
      setShowFormChooseMethodPayment(!showFormChooseMethodPayment);
      setTitlePay(getInfoPay()[0].title);
    }
    if (showFormChooseMethodShipping === true) {
      setShowFormChooseMethodShipping(!showFormChooseMethodShipping);
      setTitleShipping(getInfoShipping()[0].title);
      setFeeShipping(getInfoShipping()[0].fee);
    }
    if (showFormChooseVoucher === true) {
      setShowFormChooseVoucher(!showFormChooseVoucher);
      setTitleVoucher(getInfoVoucher()[0].title);
      if (getInfoVoucher()[0].unit === '%') {
        setDiscountVoucher(
          provisionalMoney * (getInfoVoucher()[0].number / 100),
        );
      } else if (getInfoVoucher()[0].unit === 'VNĐ') {
        setDiscountVoucher(getInfoVoucher()[0].number);
        console.log(getInfoVoucher()[0].number);
      }
    }
  };
  const handlerDetailVoucher = id => {
    setSelectDetailVoucher(id);
    console.log(selectDetailVoucher);

    setDetailVoucher([
      {
        id: getDetailVoucher()[0].id,
        title: getDetailVoucher()[0].title,
        timeExpire: getDetailVoucher()[0].timeExpire,
        dateExpire: getDetailVoucher()[0].dateExpire,
        conditionApply: getDetailVoucher()[0].conditionApply,
      },
    ]);
    setModalVisible(true);
    console.log(detailVoucher);
  };
  const handlerBackPay = () => {
    setModalVisible(false);
    setDetailVoucher([
      {
        id: '',
        title: '',
        timeExpire: '',
        dateExpire: '',
        conditionApply: [],
      },
    ]);
    console.log(detailVoucher);
  };
  const handlerUseNow = () => {
    setModalVisible(false);
    setShowFormChooseVoucher(false);
    setTitleVoucher(getDetailVoucher()[0].title);
    if (getDetailVoucher()[0].unit === '%') {
      setDiscountVoucher(
        provisionalMoney * (getDetailVoucher()[0].number / 100),
      );
    } else if (getDetailVoucher()[0].unit === 'VNĐ') {
      setDiscountVoucher(getDetailVoucher()[0].number);
    }
  };
  const handlerShowPopupOrderSuccess = () => {
    setShowPopupOrderSuccess(true);
  };
  const getInfoPay = () => {
    return infoPay.filter(item => item.option === selectOption);
  };
  const getInfoShipping = () => {
    return infoShipping.filter(item => item.option === selectOption);
  };
  const getInfoVoucher = () => {
    return fakeDataVoucher.filter(item => item.id === selectOption);
  };
  const getDetailVoucher = () => {
    return fakeDataVoucher.filter(item => item.id === selectDetailVoucher);
  };
  const totalMoney =
    provisionalMoney + feeShipping - (saveMoney + discountVoucher);

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.title}
          onPress={() => navigation.navigate('DetailProducts')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitle}>Thanh toán</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 13, backgroundColor: '#fff'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={
            showFormChooseMethodPayment ||
            showFormChooseMethodShipping ||
            showFormChooseVoucher ||
            showPopupOrderSuccess
              ? false
              : true
          }
          contentContainerStyle={{
            width: width - 24,
            paddingBottom: 250,
            left: 12,
            gap: 12,
          }}>
          <View style={{height: 232.39, gap: 6}}>
            <View
              style={{height: 35, flexDirection: 'row', alignItems: 'center'}}>
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
              <Pressable
                onPress={() => navigation.navigate('AddressSaved', {flag: 1})}
                style={{width: 35, height: 35, right: 0, position: 'absolute'}}>
                <Image source={icon.icon_edit_address} />
              </Pressable>
            </View>
            <View style={{width: width - 24, height: 197.39}}>
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
              <View style={{width: width - 24, height: 42}}>
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
              <TextInput
                multiline={true}
                style={{
                  width: width - 24,
                  height: 80,
                  top: 33.4,
                  borderWidth: 1,
                  borderColor: '#f1f1f1',
                  backgroundColor: '#fff',
                  borderRadius: 5,
                }}
                placeholder="Nội dung yêu cầu"
              />
            </View>
          </View>
          <View style={{width: width - 24, height: 'auto', gap: 12}}>
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
            <View style={{width: width - 24, height: 'auto', gap: 12}}>
              {productsPay.map((product, index) => (
                <View key={index}>
                  <View
                    style={{
                      width: width - 24,
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
                        style={{height: 19, width: 303, flexDirection: 'row'}}>
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
                      width: width - 24,
                      height: 1,
                      backgroundColor: '#f1f1f1',
                      marginBottom: 12,
                    }}
                  />
                </View>
              ))}
            </View>
            <View style={{width: width - 24, height: 21, flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'semibold',
                  color: '#212121',
                }}>
                Tạm tính
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'semibold',
                  color: '#FD6C31',
                  right: 0,
                  position: 'absolute',
                }}>
                {formatCurrency(provisionalMoney)}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width - 24,
              height: 5,
              left: -6,
              top: 12,
              backgroundColor: '#f1f1f1',
            }}></View>
          <View style={{width: width - 24, height: 189, gap: 12, top: 10}}>
            <Pressable
              onPress={handlerFormChooseMethodPayment}
              style={{width: 244, height: 47, gap: 8}}>
              <View
                style={{
                  width: 196,
                  height: 21,
                  flexDirection: 'row',
                  gap: 10.1,
                  alignItems: 'center',
                }}>
                <View style={{width: 21.87, height: 15.79}}>
                  <Image source={icon.icon_payment} />
                </View>
                <Text
                  style={{
                    width: 173,
                    height: 21,
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Phương thức thanh toán
                </Text>
              </View>
              <View
                style={{
                  width: 212,
                  height: 19,
                  flexDirection: 'row',
                  gap: 15,
                  left: 32,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    height: 19,
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#0060af',
                  }}>
                  {titlePay}
                </Text>
                <View style={{width: 18, height: 18}}>
                  <Image source={icon.icon_arrow_right_pay} />
                </View>
              </View>
            </Pressable>
            <View
              style={{
                width: width - 24,
                height: 1,
                backgroundColor: '#f1f1f1',
              }}></View>
            <Pressable
              onPress={handlerFormChooseMethodShipping}
              style={{width: 244, height: 47, gap: 8}}>
              <View
                style={{
                  width: 196,
                  height: 21,
                  flexDirection: 'row',
                  gap: 10.1,
                  alignItems: 'center',
                }}>
                <View style={{width: 21.87, height: 15.79}}>
                  <Image source={icon.icon_shipping} />
                </View>
                <Text
                  style={{
                    height: 21,
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Phương thức vận chuyển
                </Text>
              </View>
              <View
                style={{
                  width: 212,
                  height: 19,
                  flexDirection: 'row',
                  gap: 15,
                  left: 32,
                }}>
                <Text
                  style={{
                    height: 19,
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#0060af',
                    alignItems: 'center',
                  }}>
                  {titleShipping}
                </Text>
                <View style={{width: 18, height: 18}}>
                  <Image source={icon.icon_arrow_right_pay} />
                </View>
              </View>
            </Pressable>
            <View
              style={{
                width: width - 24,
                height: 1,
                backgroundColor: '#f1f1f1',
              }}></View>
            <Pressable
              onPress={handlerFormChooseVoucher}
              style={{width: 244, height: 47, gap: 8}}>
              <View
                style={{
                  width: 196,
                  height: 21,
                  flexDirection: 'row',
                  gap: 10.1,
                  alignItems: 'center',
                }}>
                <View style={{width: 21.87, height: 15.79}}>
                  <Image source={icon.icon_voucher} />
                </View>
                <Text
                  style={{
                    width: 173,
                    height: 21,
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Voucher/Mã khuyến mãi
                </Text>
              </View>
              <View
                style={{
                  width: 212,
                  height: 19,
                  flexDirection: 'row',
                  gap: 15,
                  left: 32,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    height: 19,
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: '#0060af',
                  }}>
                  {titleVoucher}
                </Text>
                <View style={{width: 18, height: 18}}>
                  <Image source={icon.icon_arrow_right_pay} />
                </View>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              width: width - 24,
              height: 5,
              left: -6,
              top: 12,
              backgroundColor: '#f1f1f1',
            }}></View>
          <View style={{width: width - 24, height: 190, top: 11, rowGap: 20}}>
            <View
              style={{
                width: 155.96,
                height: 21,
                columnGap: 11,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={icon.icon_order_summary}
                style={{width: 21, height: 21}}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'semibold',
                  color: '#212121',
                }}>
                Tóm tắt đơn hàng
              </Text>
            </View>
            <View style={{width: width - 24, height: 149, rowGap: 12}}>
              <View style={style.titleOrderSummary}>
                <Text style={style.leftTitleOrderSummary}>Tổng tiền hàng</Text>
                <Text style={style.rightTitleOrderSummary}>
                  {formatCurrency(provisionalMoney)}
                </Text>
              </View>
              <View style={style.titleOrderSummary}>
                <Text style={style.leftTitleOrderSummary}>Tiết kiệm</Text>
                <Text style={style.rightTitleOrderSummary}>
                  -{formatCurrency(saveMoney)}
                </Text>
              </View>
              <View style={style.titleOrderSummary}>
                <Text style={style.leftTitleOrderSummary}>Mã giảm giá</Text>
                <Text style={style.rightTitleOrderSummary}>
                  -{formatCurrency(discountVoucher)}
                </Text>
              </View>
              <View style={style.titleOrderSummary}>
                <Text style={style.leftTitleOrderSummary}>Phí vận chuyển</Text>
                <Text style={style.rightTitleOrderSummary}>
                  -{formatCurrency(feeShipping)}
                </Text>
              </View>
              <View style={style.titleOrderSummary}>
                <Text style={style.leftTitleOrderSummary}>Điểm tích lũy</Text>
                <Text style={style.rightTitleOrderSummary}>{1200} điểm</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: width - 24,
              height: 1,
              backgroundColor: '#f1f1f1',
              top: 12,
            }}></View>
          <View style={{width: width - 24, height: 21, top: 11}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'semibold',
                color: '#212121',
              }}>
              Tổng tiền
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'regular',
                color: '#FD6C31',
                right: 0,
                position: 'absolute',
              }}>
              {formatCurrency(totalMoney)}
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            width: width,
            height: 65,
            left: 0,
            top: 765,
            position: 'absolute',
            zIndex: 100,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 8,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}>
          <View style={{width: 100, height: 45, left: 100}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'regular',
                color: '#212121',
                textAlign: 'right',
              }}>
              Tổng tiền
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'semibold',
                color: '#FD6C31',
                textAlign: 'right',
              }}>
              {formatCurrency(totalMoney)}
            </Text>
          </View>
          <Pressable
            onPress={handlerShowPopupOrderSuccess}
            disabled={
              (titlePay !== 'Chọn phương thức thanh toán' &&
                titleShipping !== 'Chọn phương thức vận chuyển') ||
              (titlePay !== 'Chọn phương thức thanh toán' &&
                titleShipping !== 'Chọn phương thức vận chuyển' &&
                titleVoucher !== 'Chọn voucher/mã khuyến mãi')
                ? false
                : true
            }
            style={{
              width: 202,
              height: 45,
              right: 12,
              position: 'absolute',
              borderRadius: 10,
              backgroundColor:
                (titlePay !== 'Chọn phương thức thanh toán' &&
                  titleShipping !== 'Chọn phương thức vận chuyển') ||
                (titlePay !== 'Chọn phương thức thanh toán' &&
                  titleShipping !== 'Chọn phương thức vận chuyển' &&
                  titleVoucher !== 'Chọn voucher/mã khuyến mãi')
                  ? '#0060af'
                  : '#f1f1f1',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'medium',
                color:
                  (titlePay !== 'Chọn phương thức thanh toán' &&
                    titleShipping !== 'Chọn phương thức vận chuyển') ||
                  (titlePay !== 'Chọn phương thức thanh toán' &&
                    titleShipping !== 'Chọn phương thức vận chuyển' &&
                    titleVoucher !== 'Chọn voucher/mã khuyến mãi')
                    ? '#fff'
                    : '#aaa',
              }}>
              Đặt hàng
            </Text>
          </Pressable>
        </View>
        {showFormChooseMethodPayment && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={showFormChooseMethodPayment}>
            <TouchableOpacity activeOpacity={1} style={style.styleOpacity}>
              <View style={style.chooseMethodPayShippingVoucher}>
                <View
                  style={{
                    width: width - 24,
                    height: 30,
                    left: 12,
                    top: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      width: 277,
                      height: 22,
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#0060af',
                      textTransform: 'uppercase',
                    }}>
                    Phương thức thanh toán
                  </Text>
                  <Pressable
                    onPress={handlerFormChooseMethodPayment}
                    style={{
                      width: 30,
                      height: 30,
                      right: 0,
                      position: 'absolute',
                    }}>
                    <Image source={icon.icon_close} />
                  </Pressable>
                </View>
                <View style={[style.menuChoose, {height: 'auto'}]}>
                  <Pressable
                    onPress={() => handlerChoose('bankTransfer')}
                    style={style.itemMenuChoose}>
                    <View style={style.titleItemChoose}>
                      <View style={style.radioButton}>
                        <Image
                          source={
                            selectOption === 'bankTransfer'
                              ? radioButton
                              : radioButtonNoSelect
                          }
                        />
                      </View>
                      <Text style={style.textItemMenuChoose}>Chuyển khoản</Text>
                    </View>
                    {selectOption === 'bankTransfer' && (
                      <View
                        style={{
                          height: 147,
                          borderRadius: 10,
                          backgroundColor: '#F3F7FC',
                        }}>
                        <View
                          style={{height: 118, left: 30, top: 14, rowGap: 15}}>
                          <Text style={style.textInfoBankTransfer}>
                            STK:{' '}
                            <Text
                              style={[
                                style.textInfoBankTransfer,
                                {color: '#FD6C31'},
                              ]}>
                              123 456 789
                            </Text>
                          </Text>
                          <Text style={style.textInfoBankTransfer}>
                            Chủ tài khoản:{' '}
                            <Text
                              style={[
                                style.textInfoBankTransfer,
                                {fontWeight: 'regular'},
                              ]}>
                              Nguyen Van A
                            </Text>
                          </Text>
                          <Text style={style.textInfoBankTransfer}>
                            Ngân hàng:{' '}
                            <Text
                              style={[
                                style.textInfoBankTransfer,
                                {fontWeight: 'regular'},
                              ]}>
                              Vietcombank
                            </Text>
                          </Text>
                          <Text style={style.textInfoBankTransfer}>
                            Nội dung:{' '}
                            <Text
                              style={[
                                style.textInfoBankTransfer,
                                {fontWeight: 'regular'},
                              ]}>
                              Số điện thoại
                            </Text>
                          </Text>
                        </View>
                      </View>
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => handlerChoose('COD')}
                    style={style.itemMenuChoose}>
                    <View style={style.titleItemChoose}>
                      <View style={style.radioButton}>
                        <Image
                          source={
                            selectOption === 'COD'
                              ? radioButton
                              : radioButtonNoSelect
                          }
                        />
                      </View>
                      <Text style={style.textItemMenuChoose}>
                        Thanh toán khi nhận hàng
                      </Text>
                    </View>
                    {selectOption === 'COD' && (
                      <View style={style.payOrther}>
                        <Text style={style.textPayOrther}>
                          Quý Khách Hàng vui lòng thanh toán tiền mặt khi nhận
                          hàng
                        </Text>
                      </View>
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => handlerChoose('payCompany')}
                    style={style.itemMenuChoose}>
                    <View style={style.titleItemChoose}>
                      <View style={style.radioButton}>
                        <Image
                          source={
                            selectOption === 'payCompany'
                              ? radioButton
                              : radioButtonNoSelect
                          }
                        />
                      </View>
                      <Text style={style.textItemMenuChoose}>
                        Thanh toán tại công ty
                      </Text>
                    </View>
                    {selectOption === 'payCompany' && (
                      <View style={style.payOrther}>
                        <Text style={style.textPayOrther}>
                          Quý Khách Hàng có thể mua hàng và thanh toán trực tiếp
                          tại công ty
                        </Text>
                      </View>
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => handlerChoose('payOnline')}
                    style={style.itemMenuChoose}>
                    <View style={style.titleItemChoose}>
                      <View style={style.radioButton}>
                        <Image
                          source={
                            selectOption === 'payOnline'
                              ? radioButton
                              : radioButtonNoSelect
                          }
                        />
                      </View>
                      <Text style={style.textItemMenuChoose}>
                        Thanh toán online
                      </Text>
                    </View>
                    {selectOption === 'payOnline' && (
                      <View style={style.payOrther}>
                        <Text style={style.textPayOrther}>
                          Quý Khách Hàng có thể mua hàng và thanh toán online
                        </Text>
                      </View>
                    )}
                  </Pressable>
                </View>
                <View style={style.confirmContainer}>
                  <Pressable onPress={handlerConfirm} style={style.btnConfirm}>
                    <Text style={style.textConfirm}>Xác nhận</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        )}
        {showFormChooseMethodShipping === true && (
          <Modal
            transparent={true}
            visible={showFormChooseMethodShipping}
            animationType="fade">
            <TouchableOpacity activeOpacity={1} style={style.styleOpacity}>
              <View style={style.chooseMethodPayShippingVoucher}>
                <View
                  style={{
                    width: width - 24,
                    height: 30,
                    left: 12,
                    top: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      width: 277,
                      height: 22,
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#0060af',
                      textTransform: 'uppercase',
                    }}>
                    Phương thức vận chuyển
                  </Text>
                  <Pressable
                    onPress={handlerFormChooseMethodShipping}
                    style={{
                      width: 30,
                      height: 30,
                      right: 0,
                      position: 'absolute',
                    }}>
                    <Image source={icon.icon_close} />
                  </Pressable>
                </View>
                <View style={[style.menuChoose, {height: 'auto'}]}>
                  <Pressable
                    onPress={() => handlerChoose('fastDelivery')}
                    style={style.itemMenuChoose}>
                    <View
                      style={[
                        style.titleItemChoose,
                        {height: 'auto', alignItems: 'flex-start'},
                      ]}>
                      <View style={[style.radioButton, {top: 0}]}>
                        <Image
                          source={
                            selectOption === 'fastDelivery'
                              ? radioButton
                              : radioButtonNoSelect
                          }
                        />
                      </View>
                      <View style={{rowGap: 4.4}}>
                        <Text style={style.textItemMenuChoose}>
                          Giao hàng nhanh
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 'medium',
                            color: '#FD6C31',
                          }}>
                          37.000đ
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => handlerChoose('economyDelivery')}
                    style={style.itemMenuChoose}>
                    <View
                      style={[
                        style.titleItemChoose,
                        {height: 'auto', alignItems: 'flex-start'},
                      ]}>
                      <View style={[style.radioButton, {top: 0}]}>
                        <Image
                          source={
                            selectOption === 'economyDelivery'
                              ? radioButton
                              : radioButtonNoSelect
                          }
                        />
                      </View>
                      <View style={{rowGap: 4.4}}>
                        <Text style={style.textItemMenuChoose}>
                          Giao hàng tiết kiệm
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 'medium',
                            color: '#FD6C31',
                          }}>
                          35.000đ
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                </View>
                <View style={style.confirmContainer}>
                  <Pressable onPress={handlerConfirm} style={style.btnConfirm}>
                    <Text style={style.textConfirm}>Xác nhận</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        )}
        {showFormChooseVoucher && (
          <Modal
            animationType="fade"
            visible={showFormChooseVoucher}
            transparent={true}>
            <TouchableOpacity activeOpacity={1} style={style.styleOpacity}>
              <View style={style.chooseMethodPayShippingVoucher}>
                <View
                  style={{
                    width: width - 24,
                    height: 30,
                    left: 12,
                    top: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      width: 277,
                      height: 22,
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#0060af',
                      textTransform: 'uppercase',
                    }}>
                    Voucher/Mã khuyến mãi
                  </Text>
                  <Pressable
                    onPress={handlerFormChooseVoucher}
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
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    width: width - 24,
                    paddingBottom: 100,
                    left: 12,
                    backgroundColor: '#fafafa',
                    gap: 10,
                  }}>
                  {fakeDataVoucher.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        width: width - 24,
                        height: 124,
                        backgroundColor: '#fff',
                        borrderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View style={{width: 371, height: 100, rowGap: 10}}>
                        <Pressable
                          onPress={() => handlerChooseVoucher(item.id)}
                          style={{width: 371, height: 64, gap: 5}}>
                          <View
                            style={{
                              height: 21,
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: 'semibold',
                                color: '#212121',
                              }}>
                              Giảm{' '}
                              <Text>
                                {item.number}
                                <Text>{item.unit}</Text>
                              </Text>
                            </Text>
                            <View
                              style={[
                                style.radioButton,
                                {right: 0, position: 'absolute'},
                              ]}>
                              <Image
                                source={
                                  selectOption === item.id
                                    ? radioButton
                                    : radioButtonNoSelect
                                }
                              />
                            </View>
                          </View>
                          <Text
                            style={{
                              height: 39,
                              fontSize: 14,
                              fontWeight: 'regular',
                              color: '#212121',
                              lineHeight: 20,
                            }}>
                            {item.summaryConditionApply}
                            {'\n'}
                            {item.minimizeDiscount}
                          </Text>
                        </Pressable>
                        <View
                          style={{
                            width: 371,
                            borderWidth: 2.07,
                            borderStyle: 'dashed',
                            borderColor: 'f1f1f1',
                          }}></View>
                        <Text
                          style={{
                            height: 16,
                            fontSize: 12,
                            fontWeight: 'regular',
                            color: '#808080',
                          }}>
                          HSD: <Text>{item.dateExpire} .</Text>
                          <Text
                            style={{color: '#0060af'}}
                            onPress={() => handlerDetailVoucher(item.id)}>
                            Điều kiện áp dụng
                          </Text>
                        </Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>
                <View style={style.confirmContainer}>
                  <Pressable onPress={handlerConfirm} style={style.btnConfirm}>
                    <Text style={style.textConfirm}>Xác nhận</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        )}
        {showPopupOrderSuccess && (
          <Modal
            visible={showPopupOrderSuccess}
            animationType="fade"
            transparent={true}>
            <TouchableOpacity activeOpacity={1} style={style.styleOpacity}>
              <View
                style={{
                  width: width - 24,
                  height: 220,
                  position: 'absolute',
                  zIndex: 200,
                  top: 300,
                  left: 9,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  borderWidth: 1,
                }}>
                <View style={{width: 371, height: 188, rowGap: 35}}>
                  <View
                    style={{
                      width: 371,
                      height: 109,
                      flexDirection: 'row',
                      columnGap: 15,
                    }}>
                    <View style={{height: 75, width: 75}}>
                      <Image source={icon.icon_success} />
                    </View>
                    <View style={{width: 281, height: 109, rowGap: 20}}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#0060af',
                          textTransform: 'uppercase',
                        }}>
                        Đặt hàng thành công
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'regular',
                          color: '#212121',
                          lineHeight: 24,
                        }}>
                        Nhân viên của chúng tôi sẽ liên hệ lại trong thời gian
                        sớm nhất. Xin chân thành cảm ơn Quý khách hàng!
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 371,
                      height: 45,
                      flexDirection: 'row',
                      columnGap: 10,
                    }}>
                    <Pressable
                      onPress={() => navigation.navigate('Home')}
                      style={[
                        style.btnPopupOrderSuccess,
                        {backgroundColor: '#E0F3FF'},
                      ]}>
                      <Text
                        style={[
                          style.titleBtnPopupOrderSuccess,
                          {color: '#0060af'},
                        ]}>
                        Tiếp tục mua hàng
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('OrderDetails', {flag: 1})
                      }
                      style={[
                        style.btnPopupOrderSuccess,
                        {backgroundColor: '#0060af'},
                      ]}>
                      <Text
                        style={[
                          style.titleBtnPopupOrderSuccess,
                          {color: '#fff'},
                        ]}>
                        Xem chi tiết
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        )}
      </View>
      <Modal visible={modalVisible}>
        <View style={style.container}>
          <View style={style.titleContainer}>
            <Pressable style={style.title} onPress={handlerBackPay}>
              <Image source={icon.icon_arrow_left} />
              <Text style={style.textTitle}>Chi tiết voucher</Text>
            </Pressable>
          </View>
          {detailVoucher.map((item, index) => (
            <View
              key={index}
              style={{
                width: width - 24,
                height: 380,
                top: 66,
                left: 12,
                rowGap: 12,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'semibold',
                  color: '#0060af',
                }}>
                {item.title}
              </Text>
              <View
                style={{
                  width: 373.5,
                  borderWidth: 1,
                  borderColor: '#f1f1f1',
                }}></View>
              <View style={{width: 374, height: 45, rowGap: 4}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'semibold',
                    color: '#212121',
                  }}>
                  Thời hạn sử dụng
                </Text>
                <Text>
                  Hết hạn vào {item.timeExpire}, {item.dateExpire}
                </Text>
              </View>
              <View
                style={{
                  width: 373.5,
                  borderWidth: 1,
                  borderColor: '#f1f1f1',
                }}></View>
              <View style={{width: width - 24, gap: 4}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'regular',
                    color: '#212121',
                  }}>
                  Điều kiện áp dụng
                </Text>
                {item.conditionApply.map((condition, index) => (
                  <Text
                    key={index}
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#212121',
                    }}>{`\u2011 ${condition}`}</Text>
                ))}
              </View>
            </View>
          ))}
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
            {detailVoucher.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => handlerUseNow()}
                style={{
                  width: width - 24,
                  height: 45,
                  backgroundColor: '#0060af',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 15,
                    fontWeight: 'medium',
                  }}>
                  Dùng ngay
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#ffffff',
  },
  nameNumberPhone: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
  },
  chooseMethodPayShippingVoucher: {
    width: width,
    height: 425,
    top: height - 425,
    position: 'absolute',
    backgroundColor: '#fff',
    rowGap: 24,
    zIndex: 1000,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  menuChoose: {
    width: 339,
    left: 12,
    rowGap: 14,
  },
  itemMenuChoose: {
    rowGap: 10.4,
  },
  titleItemChoose: {
    height: 21,
    columnGap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    aspectRatio: 1,
    borderRadius: 50,
  },
  textItemMenuChoose: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#212121',
    height: 21,
  },
  textInfoBankTransfer: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: '#212121',
  },
  payOrther: {
    width: 305,
    height: 41,
    left: 30,
  },
  textPayOrther: {
    fontSize: 14,
    fontWeight: 'regular',
    color: '#808080',
    lineHeight: 22,
  },
  confirmContainer: {
    width: width,
    height: 65,
    left: 0,
    top: 425 - 85,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 500,
  },
  btnConfirm: {
    width: width - 24,
    height: 45,
    left: 12,
    backgroundColor: '#0060AF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textConfirm: {
    fontSize: 15,
    fontWeight: 'medium',
    color: '#ffffff',
  },
  titleOrderSummary: {
    height: 21,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftTitleOrderSummary: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '808080',
  },
  rightTitleOrderSummary: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#212121',
    right: 0,
    position: 'absolute',
  },
  btnPopupOrderSuccess: {
    width: 180.5,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  titleBtnPopupOrderSuccess: {
    fontSize: 15,
    fontWeight: 'medium',
  },
  styleOpacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
