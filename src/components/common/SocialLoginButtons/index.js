import {icons} from '@assets';
import {Block, Icon, Image, Pressable, Text} from 'components';
import {useDeviceName, useFCMToken} from 'hooks';
import appleAuth from '@invertase/react-native-apple-authentication';
import actions from '@redux/actions';
import {COLORS} from 'theme';
import {throttle} from '@utils/helper';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native';
import Toast from 'react-native-toast-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {appleLogin, facebookLogin, googleLogin} from './helper';

const SocialLoginButtons = ({containterProps}) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const device_name = useDeviceName();
  const device_token = useFCMToken();
  const {t} = useTranslation();
  const dataOther = useSelector(state => state.other);

  const handeLogin = async (profile, idType, actionType) => {
    if (profile.uid) {
      const body = {
        info: JSON.stringify(profile),
        user_code: dataOther?.inviteCode,
        [idType]: profile.uid,
        device_token,
        device_name,
      };
      dispatch({
        type: actionType,
        body: body,
        onFail(e) {
          setLoading(false);
        },
      });
    } else {
      setLoading(false);
      console.log(t('LoginScreen.invalid_account'));
    }
  };

  const handleFacebook = async () => {
    try {
      setLoading(true);
      const profile = await facebookLogin();
      handeLogin(profile, 'fbID', actions.LOGIN_FACEBOOK);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('TitleShow.warning'),
        text2: error,
      });
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setLoading(true);
      const profile = await googleLogin();
      handeLogin(profile, 'ggID', actions.LOGIN_GOOGLE);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('TitleShow.warning'),
        text2: error,
      });
      setLoading(false);
    }
  };

  const handleApple = async () => {
    try {
      setLoading(true);
      const profile = await appleLogin();
      handeLogin(profile, 'apID', actions.LOGIN_APPLE);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('TitleShow.warning'),
        text2: error,
      });
      setLoading(false);
    }
  };

  return (
    <Block alignCenter marginBottom={30} {...containterProps}>
      <Text regular fontSize={17} marginBottom={20} light>
        {t('Login.login_social')}
      </Text>
      {isLoading ? (
        <Block padding={20}>
          <ActivityIndicator size={'small'} color={COLORS.primary} />
        </Block>
      ) : (
        <Block justifyCenter rowCenter>
          <Pressable onPress={throttle(handleFacebook)}>
            <Icon
              IconType={MaterialCommunityIcons}
              iconSize={40}
              iconName="facebook"
              iconColor={COLORS.blueFacebook}
            />
          </Pressable>
          <Pressable
            onPress={throttle(handleGoogle)}
            round={40}
            backgroundColor={COLORS.whiteGray}
            justifyCenter
            alignCenter
            marginHorizontal={18}>
            <Image source={icons.ic_gmail} width={30} height={21} />
          </Pressable>
          {appleAuth.isSupported && (
            <Pressable
              onPress={throttle(handleApple)}
              round={40}
              backgroundColor={COLORS.whiteGray}
              justifyCenter
              alignCenter>
              <Icon
                IconType={MaterialCommunityIcons}
                iconSize={28}
                iconName="apple"
                iconColor={COLORS.black}
              />
            </Pressable>
          )}
        </Block>
      )}
    </Block>
  );
};

export default SocialLoginButtons;
