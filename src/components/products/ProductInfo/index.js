import {icons} from '@assets';
import {
  Block,
  Icon,
  Image,
  Modal,
  Pressable,
  ProductPrice,
  Text,
} from 'components';
import {ORDER_TYPE} from '@constants';
import {commonRoot} from '@navigation/navigationRef';
import router from '@navigation/router';
import actions from '@redux/actions';
import {COLORS, GRADIENTS} from 'theme';
import {formatCurrency} from '@utils/helper';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

const ProductInfo = ({
  item,
  index,
  onPressItem,
  onCancel,
  onViewBillLading,
  onRepurchase,
  idTab,
}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [showConfim, setShowConfim] = useState(false);

  const handleConfirmOrder = () => {
    dispatch({
      type: actions.CONFIRM_ORDER_RECEIVED,
      body: {
        order_id: item?.order_id,
      },
      onSuccess() {
        dispatch({
          type: actions.GET_ORDER_STATUS,
        });
        dispatch({
          type: actions.GET_ORDER,
          params: {
            numshow: 5,
            is_status: ORDER_TYPE.DeliverySuccessful,
          },
        });
        onPressItem(item?.order_id);
      },
    });
  };

  const RenderUI = () => {
    switch (idTab) {
      case ORDER_TYPE.Processing:
        return (
          <Block marginTop={10} rowCenter spaceBetween justifyEnd>
            <Pressable
              height={30}
              width={110}
              borderColor={COLORS.gray}
              borderWidth={1}
              radius={5}
              justifyCenter
              alignCenter
              onPress={() => {
                onCancel(item);
              }}>
              <Text regular fontSize={14} color={COLORS.textColor}>
                {t('OrderManagementScreen.cancel')}
              </Text>
            </Pressable>
          </Block>
        );
      case ORDER_TYPE.Confirmed:
        return (
          <Block marginTop={10} rowCenter spaceBetween justifyEnd>
            <Pressable
              height={30}
              width={110}
              borderColor={COLORS.gray}
              borderWidth={1}
              radius={5}
              justifyCenter
              alignCenter
              onPress={() => {
                onCancel(item);
              }}>
              <Text regular fontSize={14} color={COLORS.textColor}>
                {t('OrderManagementScreen.cancel')}
              </Text>
            </Pressable>
          </Block>
        );
      case ORDER_TYPE.BeingDelivered:
        return (
          <Block marginTop={10} rowCenter spaceBetween>
            <Text regular fontSize={14} color={COLORS.chaliceSilver}>
              {t('OrderManagementScreen.in_progress')}
            </Text>
            <Pressable
              marginLeft={15}
              backgroundColor={COLORS.primary}
              height={30}
              width={110}
              radius={5}
              justifyCenter
              alignCenter
              onPress={() => {
                onViewBillLading(item);
              }}>
              <Text regular fontSize={14} color={COLORS.white}>
                {t('OrderManagementScreen.view_bill_lading')}
              </Text>
            </Pressable>
          </Block>
        );
      case ORDER_TYPE.DeliverySuccessful:
        return (
          <Block>
            <Pressable
              rowCenter
              spaceBetween
              paddingBottom={10}
              paddingTop={15}
              onPress={() => {
                commonRoot.navigate(router.BILL_OF_LADING_SCREEN);
              }}>
              <Block rowCenter>
                <Image
                  source={icons.ic_car}
                  height={12}
                  width={15}
                  marginRight={5}
                />
                <Text regular fontSize={14} color={COLORS.textColor}>
                  {t('OrderManagementScreen.delivery_successful')}
                </Text>
              </Block>
              <Block rowCenter>
                <Text
                  regular
                  fontSize={14}
                  marginRight={5}
                  color={COLORS.primary}>
                  {t('OrderManagementScreen.bill_lading')}
                </Text>
                <Icon
                  IconType={AntDesign}
                  iconName="right"
                  color={COLORS.primary}
                  iconSize={15}
                />
              </Block>
            </Pressable>
            <Block
              marginTop={10}
              height={0.5}
              backgroundColor={COLORS.border}
            />
            <Block marginTop={10} rowCenter spaceBetween>
              <Text regular fontSize={14} color={COLORS.amber}>
                {t('OrderManagementScreen.evaluate_your_order')}
              </Text>
              {item?.is_confirm_received !== '1' && (
                <Pressable
                  marginLeft={15}
                  backgroundColor={COLORS.amber}
                  height={30}
                  width={110}
                  radius={5}
                  justifyCenter
                  alignCenter
                  onPress={() => {
                    setShowConfim(!showConfim);
                  }}>
                  <Text regular fontSize={14} color={COLORS.white}>
                    {t('OrderManagementScreen.received')}
                  </Text>
                </Pressable>
              )}
            </Block>
          </Block>
        );
      case ORDER_TYPE.Cancel:
        return (
          <Block marginTop={10} rowCenter spaceBetween alignStart>
            <Text marginTop={5} flex regular fontSize={14} color={COLORS.red}>
              {item?.reason_cancel}
            </Text>
            <Pressable
              marginLeft={15}
              backgroundColor={COLORS.amber}
              height={30}
              width={110}
              radius={5}
              justifyCenter
              alignCenter
              onPress={() => {
                onRepurchase(item);
              }}>
              <Text regular fontSize={14} color={COLORS.white}>
                {t('OrderManagementScreen.repurchase')}
              </Text>
            </Pressable>
          </Block>
        );
    }
  };

  return (
    <Block key={index} backgroundColor={COLORS.white}>
      <Pressable
        flex
        marginHorizontal={15}
        paddingVertical={15}
        onPress={() => {
          onPressItem(item?.order_id);
        }}>
        <ProductPrice infoStore={item} item={[item.list_detail[0]]} />
        {item.list_detail.length > 1 && (
          <Block paddingTop={15}>
            <Block rowCenter justifyCenter alignCenter>
              <Text fontSize={14} light color={COLORS.textColor}>
                {t('OrderManagementScreen.view_all_products')}
              </Text>
              <Icon
                marginHorizontal={10}
                IconType={AntDesign}
                iconName={'down'}
                color={COLORS.lightGray}
                iconSize={15}
              />
            </Block>
            <Block
              marginTop={10}
              height={0.5}
              backgroundColor={COLORS.border}
            />
          </Block>
        )}

        <Block marginTop={7} paddingVertical={10} rowCenter spaceBetween>
          <Text fontSize={16} regular color={COLORS.chaliceSilver}>
            {`${item.list_detail.length} ${t('OrderManagementScreen.product')}`}
          </Text>
          <Block rowCenter flex justifyEnd>
            <Block rowCenter>
              <Image source={icons.ic_cart_primary} height={16} width={16} />
              <Text
                paddingHorizontal={5}
                fontSize={14}
                regular
                color={COLORS.textColor}>
                {t('OrderManagementScreen.total_payment')}
              </Text>
            </Block>
            <Text
              numberOfLines={1}
              fontSize={16}
              semiBold
              color={COLORS.oriolesOrange}>
              {formatCurrency(item?.total_payment)}
            </Text>
          </Block>
        </Block>
        <Block marginTop={10} height={0.5} backgroundColor={COLORS.border} />
        <RenderUI />
      </Pressable>
      <Block height={7} backgroundColor={COLORS.background} />

      {showConfim && (
        <Modal>
          <Block
            flex
            justifyCenter
            alignCenter
            backgroundColor={COLORS.transparentColor2}>
            <Block
              paddingVertical={10}
              paddingHorizontal={15}
              radius={10}
              width={'90%'}
              backgroundColor={COLORS.white}>
              <Pressable
                zIndex={99}
                right={5}
                absolute
                justifyCenter
                alignCenter
                width={35}
                height={35}
                onPress={() => {
                  setShowConfim(!showConfim);
                }}>
                <Icon
                  iconName={'close'}
                  iconSize={15}
                  iconColor={COLORS.gray}
                  IconType={AntDesign}
                />
              </Pressable>
              <Text
                style={{textAlign: 'center'}}
                fontSize={16}
                medium
                color={COLORS.primary}>
                {t('OrderDetailScreen.order_confirmation')}
              </Text>
              <Text
                marginTop={10}
                style={{textAlign: 'center'}}
                fontSize={14}
                light
                color={COLORS.textColor}>
                {t('OrderDetailScreen.describe')}
              </Text>
              <Block
                marginTop={10}
                marginHorizontal={-15}
                height={0.5}
                backgroundColor={COLORS.border}
              />
              <Pressable
                marginTop={15}
                alignSelfCenter
                justifyCenter
                alignCenter
                width={155}
                height={35}
                radius={5}
                onPress={() => {
                  setShowConfim(!showConfim);
                  handleConfirmOrder();
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={GRADIENTS.primary}
                  style={{
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',

                    width: 155,
                    borderRadius: 5,
                  }}>
                  <Text
                    paddingHorizontal={20}
                    fontSize={16}
                    medium
                    color={COLORS.white}>
                    {t('OrderDetailScreen.confirm')}
                  </Text>
                </LinearGradient>
              </Pressable>
            </Block>
          </Block>
        </Modal>
      )}
    </Block>
  );
};

export default ProductInfo;
