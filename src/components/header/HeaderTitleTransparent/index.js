import {Block, Icon, Pressable, Text} from 'components';
import {HEADER} from '@constants';
import {root} from '@navigation/navigationRef';
import {COLORS, SIZES} from 'theme';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderTitleTransparent = ({
  title,
  canGoBack,
  onGoBack,
  backgroundColor,
  backgroundContain,
  color = 'white',
  colorIcon,
  containerProps,
  titleProps,
  IconRight,
  rightOnPress,
  barStyle,
}) => {
  const {top} = useSafeAreaInsets();

  const _renderIconBack = opacity => {
    const _onGoBack = () => {
      if (opacity === 1) {
        onGoBack ? onGoBack() : root.goBack();
      }
    };

    return (
      canGoBack && (
        <Pressable
          opacity={opacity}
          paddingHorizontal={SIZES.xSmall}
          onPress={_onGoBack}>
          <Icon
            IconType={Ionicons}
            iconName="chevron-back"
            iconSize={30}
            color={colorIcon || color}
          />
        </Pressable>
      )
    );
  };

  const _renderIconRight = () => {
    return IconRight ? (
      <Pressable onPress={rightOnPress} paddingHorizontal={SIZES.xSmall}>
        {IconRight}
      </Pressable>
    ) : (
      _renderIconBack(0)
    );
  };
  return (
    <SafeAreaView
      mode={'padding'}
      edges={['top']}
      style={{
        height: top + 55,
        backgroundColor: COLORS.magenta,
        paddingBottom: top,
      }}>
      <LinearGradient
        style={{
          alignItems: 'center',
          height: HEADER.height,
          flexDirection: 'row',
          paddingHorizontal: SIZES.medium,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={backgroundContain ? backgroundContain : COLORS.gradient}>
        {_renderIconBack(1)}
        <Text
          flex
          center
          color={color}
          fontSize={HEADER.titleSize}
          numberOfLines={1}
          {...titleProps}>
          {title}
        </Text>
        {_renderIconRight()}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HeaderTitleTransparent;
