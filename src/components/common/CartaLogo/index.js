import {icons} from '@assets';
import {Block, Image, Pressable, Text} from 'components';
import {useCustomToast, useDeviceName, useFCMToken} from 'hooks';
import {authRoot} from '@navigation/navigationRef';
import router from '@navigation/router';
import actions from '@redux/actions';
import {COLORS} from 'theme';
import {throttle} from '@utils/helper';
import {getAppleProfile, getFacebookProfile, getGoogleProfile} from './helper';
import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';

const CartaLogo = () => {
  return <Image source={icons.cartaLogo} />;
};

export default CartaLogo;
