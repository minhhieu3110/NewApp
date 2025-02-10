import {icons} from '@assets';
import {Block, Image, Pressable, Text} from 'components';
import {authRoot, commonRoot} from '@navigation/navigationRef';
import {COLORS} from 'theme';
import {useSelector} from 'react-redux';
import router from '@navigation/router';
import React, {memo} from 'react';

const Notify = () => {
  const userToken = useSelector(state => state.user?.userToken);
  const lengthNotification = useSelector(
    state => state.getAllNotification?.totalUnread,
  );
  return (
    <Pressable
      alignSelf={'center'}
      height={35}
      width={35}
      radius={5}
      justifyCenter
      alignCenter
      marginRight={15}
      onPress={() => {
        userToken
          ? commonRoot.navigate(router.NOTIFICATION_SCREEN)
          : authRoot.navigate(router.LOGIN_SCREEN);
      }}>
      {+lengthNotification > 0 && (
        <Block
          absolute
          top={-1}
          right={1}
          zIndex={99}
          backgroundColor={COLORS.white}
          round={15}
          justifyCenter
          alignCenter>
          <Text color={COLORS.red} semiBold fontSize={9}>
            {+lengthNotification > 99 ? '99+' : lengthNotification}
          </Text>
        </Block>
      )}
      <Image source={icons.ic_notification} height={16} width={16} />
    </Pressable>
  );
};

export default memo(Notify);
