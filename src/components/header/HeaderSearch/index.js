import {
  Block,
  Cart,
  Icon,
  Pressable,
  StatusBar,
  Text,
  TextInput,
} from 'components';
import {HEADER} from '@constants';
import {commonRoot, root} from '@navigation/navigationRef';
import {SIZES} from 'theme';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, StyleSheet} from 'react-native';
import {icons} from '@assets';
import {getSize} from '@utils/responsive';
import {COLORS} from 'theme';
import router from '@navigation/router';
import {useDispatch, useSelector} from 'react-redux';
import actions, {_onUnmount} from '@redux/actions';
import LinearGradient from 'react-native-linear-gradient';

const HeaderSearch = ({
  title,
  backgroundColor,
  color = 'white',
  barStyle,
  goBack = false,
  onGoBack,
  onChangeText,
}) => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.user.userToken);
  const listItemCart = useSelector(state => state.addToCart);

  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    if (textSearch.length > 0) {
      dispatch({type: actions.SEARCH_RESTAURANT, keyword: textSearch});
    } else {
      dispatch({type: _onUnmount(actions.SEARCH_RESTAURANT)});
    }
  }, [textSearch]);

  const _renderIconBack = () => {
    const _onGoBack = () => {
      onGoBack ? onGoBack() : root.goBack();
    };

    return (
      <Pressable paddingRight={SIZES.xSmall} onPress={_onGoBack}>
        <Icon
          IconType={Ionicons}
          iconName="chevron-back"
          iconSize={30}
          color={color}
        />
      </Pressable>
    );
  };

  const _renderIconRight = () => {
    return (
      <Pressable
        style={styles.icRight}
        onPress={() => {
          commonRoot.navigate(router.CART_ORDER_SCREEN);
        }}
        paddingHorizontal={SIZES.xSmall}>
        <Image source={icons.ic_cart_header} />
        {listItemCart?.food?.length > 0 && (
          <Block
            absolute
            backgroundColor={COLORS.red}
            width={15}
            height={15}
            right={3}
            alignCenter
            justifyCenter
            radius={9}
            top={20}
            alignSelfEnd>
            <Text fontSize={10} color={COLORS.white} bold>
              {listItemCart?.food?.length || 0}
            </Text>
          </Block>
        )}
      </Pressable>
    );
  };

  return (
    <Block>
      <StatusBar
        backgroundColor={backgroundColor ? backgroundColor : 'primary'}
        barStyle={barStyle}
      />
      <Block
        row
        alignCenter
        height={HEADER.height}
        padding={SIZES.medium}
        backgroundColor={backgroundColor ? backgroundColor : 'primary'}>
        {goBack && _renderIconBack()}
        <Block
          flex={1}
          radius={5}
          paddingHorizontal={10}
          marginHorizontal={5}
          rowCenter
          backgroundColor={'white'}>
          <TextInput
            onChangeText={text => {
              setTextSearch(text);
              onChangeText?.(text);
            }}
            placeholder={title}
            flex={1}
            placeholderTextColor={'black'}
          />
          <Image source={icons.ic_search} />
        </Block>
        <Cart />
        {/* {userToken && _renderIconRight()} */}
      </Block>
    </Block>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  icRight: {
    height: getSize.vs(38),
    width: getSize.vs(38),
    backgroundColor: COLORS.orange1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 5,
  },
});
