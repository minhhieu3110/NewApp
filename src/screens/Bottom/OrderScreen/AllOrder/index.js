import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import {image} from '@assets';
import {formatCurrency} from 'utils/formatCurrency';
import router from '@router';
import {commonRoot} from 'navigation/navigationRef';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'redux/actions';
import {useEffect} from 'react';
export const dataOrders = [
  {
    id: '2314abc',
    image: `${image.image_product_demo_1}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Chờ xác nhận',
  },
  {
    id: '2315abc',
    image: `${image.image_product_demo_2}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Chờ xác nhận',
  },
  {
    id: '2316abc',
    image: `${image.image_product_demo_3}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Đang giao',
  },
  {
    id: '2317abc',
    image: `${image.image_product_demo_4}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Đã giao',
  },
  {
    id: '2318abc',
    image: `${image.image_product_demo_3}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Đã hủy',
  },
  {
    id: '2319abc',
    image: `${image.image_product_demo_3}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Chờ lấy hàng',
  },
  {
    id: '2320abc',
    image: `${image.image_product_demo_3}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Đang giao',
  },
  {
    id: '2321abc',
    image: `${image.image_product_demo_3}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Đã giao',
  },
  {
    id: '2322abc',
    image: `${image.image_product_demo_3}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Đã hủy',
  },
  {
    id: '2323abc',
    image: `${image.image_product_demo_3}`,
    title: 'KIXX HIBRID - Dầu động cơ cao cấp',
    type: '1L',
    count: '2',
    price: 1243000,
    countProduct: '3 sản phẩm',
    totalPay: 12167000,
    status: 'Chờ lấy hàng',
  },
];
export default function AllOrders({navigation}) {
  const getStatusStyle = status => {
    switch (status) {
      case 'Đã giao':
        return {backgroundColor: '#E9FFE6', color: '#46CC37'};
      case 'Đã hủy':
        return {backgroundColor: '#FFE3E3', color: '#FF0000'};
      default:
        return {backgroundColor: '#E2F2FF', color: '#0060af'};
    }
  };
  const navigateToOrderDetails = status => {
    switch (status) {
      case 'Chờ xác nhận':
        return commonRoot.navigate(router.ORDER_DETAIL, {flag: 1});
      case 'Chờ lấy hàng':
        return commonRoot.navigate(router.ORDER_DETAIL, {flag: 2});
      case 'Đang giao':
        return commonRoot.navigate(router.ORDER_DETAIL, {flag: 3});
      case 'Đã giao':
        return commonRoot.navigate(router.ORDER_DETAIL, {flag: 4});
      case 'Đã hủy':
        return commonRoot.navigate(router.ORDER_DETAIL, {flag: 5});
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.STATUS_ORDER,
    });
  }, [dispatch]);
  const statusOrder = useSelector(state => state.getStatusOrder?.data || []);
  console.log('statusOrder');
  console.log(statusOrder);
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{flex: 1, top: 12}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: 411,
            paddingBottom: 'auto',
            gap: 12,
            backgroundColor: '#fff',
          }}>
          {dataOrders.map((item, index) => {
            const statusStyle = getStatusStyle(item.status);
            return (
              <Pressable
                key={index}
                onPress={() => navigateToOrderDetails(item.status)}
                style={style.itemContainer}>
                <View style={style.contentItemContainer}>
                  <View
                    style={{
                      height: 29,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#212121',
                        textTransform: 'uppercase',
                      }}>
                      #{`${item.id}`}
                    </Text>
                    <View
                      style={[
                        style.statusOrderContainer,
                        {
                          backgroundColor: statusStyle.backgroundColor,
                        },
                      ]}>
                      <Text
                        style={[
                          style.textStatusOrder,
                          {color: statusStyle.color},
                        ]}>{`${item.status}`}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: width - 24,
                      borderWidth: 1,
                      borderColor: '#F1F1F1',
                    }}
                  />
                  <View
                    style={{
                      width: width - 24,
                      height: 80,
                      flexDirection: 'row',
                      columnGap: 12,
                      alignItems: 'center',
                    }}>
                    <View style={{width: 80, height: 80}}>
                      <Image
                        style={{width: 80, height: 80, borderRadius: 5}}
                        source={`${item.image}`}
                      />
                    </View>
                    <View style={{width: 303, height: 78, rowGap: 10}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'regular',
                          color: '#212121',
                          lineHeight: 22,
                        }}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          width: 303,
                          height: 19,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'regular',
                            fontSize: 14,
                            color: '#808080',
                          }}>
                          Phân loại: {`${item.type}`}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 'regular',
                            fontSize: 14,
                            color: '#808080',
                            right: 0,
                            position: 'absolute',
                          }}>
                          X{item.count}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'regular',
                            color: '#212121',
                            right: 0,
                            position: 'absolute',
                          }}>
                          {formatCurrency(`${item.price}`)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 27,
                      width: width - 24,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        height: 19,
                        fontWeight: 'regular',
                        fontSize: 14,
                        color: '#0060af',
                      }}>
                      {`${item.countProduct}`}
                    </Text>
                    <View
                      style={{
                        width: 235,
                        flexDirection: 'row',
                        height: 27,
                        alignItems: 'center',
                        right: 0,
                        position: 'absolute',
                      }}>
                      <Text
                        style={{
                          height: 19,
                          fontSize: 14,
                          fontWeight: 'regular',
                          color: '#808080',
                        }}>
                        Tổng thanh toán
                      </Text>
                      <Text
                        style={{
                          right: 0,
                          position: 'absolute',
                          fontSize: 20,
                          fontWeight: 'semibold',
                          color: '#FD6C31',
                        }}>
                        {formatCurrency(`${item.totalPay}`)}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{height: 5, backgroundColor: '#F1F1F1'}}></View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  itemContainer: {
    height: 198,
    gap: 12,
  },
  contentItemContainer: {
    width: width - 24,
    height: 182,
    gap: 12,
    left: 12,
  },
  statusOrderContainer: {
    width: 123,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E2F2FF',
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStatusOrder: {
    fontSize: 14,
    fontWeight: 'medium',
  },
});
