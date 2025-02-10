import React from 'react';
import Block from 'components/base/Block';
import Pressable from 'components/base/Pressable';
import {authRoot, commonRoot} from '@navigation/navigationRef';
import router from '@navigation/router';
import {COLORS} from 'theme';
import Text from 'components/base/Text';
import Image from 'components/base/Image';
import {icons} from '@assets';
import {useSelector} from 'react-redux';

const Cart = ({height = 16, width = 16}) => {
  const userToken = useSelector(state => state.user?.userToken);
  const lengthCart = useSelector(state => state.productByCart?.data?.data);
  return (
    <Pressable
      alignSelf={'center'}
      width={40}
      height={40}
      justifyCenter
      alignCenter
      onPress={() => {
        userToken
          ? commonRoot.navigate(router.YOUR_CART_SCREEN)
          : authRoot.navigate(router.LOGIN_SCREEN);
      }}>
      {lengthCart > 0 && (
        <Block
          absolute
          top={0}
          right={0}
          zIndex={99}
          backgroundColor={COLORS.white}
          round={15}
          justifyCenter
          alignCenter>
          <Text color={COLORS.red} semiBold fontSize={9}>
            {lengthCart > 99 ? '99+' : lengthCart}
          </Text>
        </Block>
      )}
      <Image source={icons.ic_cart} height={height} width={width} />
    </Pressable>
  );
};

export default Cart;
