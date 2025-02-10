import {icons, IMAGES} from '@assets';
import {Block, Image, Pressable, Text} from 'components';
import {commonRoot} from '@navigation/navigationRef';
import router from '@navigation/router';
import {COLORS} from 'theme';
import {formatCurrency} from '@utils/helper';
import {height, width} from '@utils/responsive';
import React from 'react';
import {useTranslation} from 'react-i18next';

const ProductRow = ({item, mall, containerStyle}) => {
  const {t} = useTranslation();
  return (
    <Pressable
      marginTop={15}
      key={item.item_id}
      shadow2
      alignCenter
      backgroundColor={COLORS.white}
      radius={10}
      width={width / 2 - 22}
      style={containerStyle}
      onPress={() =>
        commonRoot.navigate(router.PRODUCTS_SCREEN, {data: item?.item_id})
      }>
      <Image
        borderTopRadius={8}
        width={'100%'}
        height={150}
        resizeMode="stretch"
        source={item.picture ? {uri: item.picture} : IMAGES.no_image}
      />
      <Image
        borderTopRightRadius={6}
        zIndex={99}
        top={120}
        left={1}
        resizeMode="stretch"
        // resizeMode="cover"
        absolute
        width={'50%'}
        height={30}
        source={{uri: item.picture_ribbon}}
      />
      {mall ? (
        <Image
          absolute
          justifyCenter
          zIndex={99}
          alignCenter
          source={icons.ic_mall_pink}
          height={16}
          width={44}
          top={10}
          right={-2}>
          <Text marginTop={2} fontSize={10} medium color={COLORS.white}>
            {'MALL'}
          </Text>
        </Image>
      ) : (
        item?.is_favorite === 1 && (
          <Image
            absolute
            justifyCenter
            alignCenter
            source={icons.ic_mall}
            height={20}
            width={50}
            top={10}
            right={-2}>
            <Text marginTop={2} fontSize={10} light color={COLORS.white}>
              {t('voucher.favorite')}
            </Text>
          </Image>
        )
      )}
      {+item?.percent_discount > 0 && (
        <Image
          absolute
          justifyCenter
          source={icons.ic_mall_sale}
          height={30}
          width={40}
          left={7}
          top={-3}>
          <Text
            center
            width={'100%'}
            marginTop={-4}
            marginLeft={-1}
            fontSize={9}
            medium
            color={COLORS.white}>
            -{item?.percent_discount}%
          </Text>
        </Image>
      )}

      <Block width={'100%'}>
        <Text
          marginTop={6}
          fontSize={16}
          marginBottom={2}
          regular
          color={COLORS.text}
          paddingHorizontal={10}
          numberOfLines={1}>
          {item?.title}
        </Text>
        <Block rowCenter justifyEnd width={'100%'} paddingRight={10}>
          {+item?.price > +item?.price_buy && (
            <Text
              marginRight={5}
              marginTop={5}
              fontSize={12}
              bold
              lineThrough
              color={COLORS.gray6}
              numberOfLines={1}>
              {formatCurrency(item?.price)}
            </Text>
          )}

          <Text
            marginTop={5}
            fontSize={14}
            bold
            color={COLORS.priceCartA}
            numberOfLines={1}>
            {formatCurrency(item?.price_buy)}
          </Text>
        </Block>

        <Block
          row
          alignEnd
          marginTop={5}
          marginBottom={10}
          paddingHorizontal={10}
          spaceBetween>
          <Block flex row alignCenter>
            <Image
              marginRight={5}
              source={icons.ic_locationCartA}
              height={10}
              width={8}
            />
            <Text
              marginRight={2}
              numberOfLines={1}
              flex
              light
              color={COLORS.primary}
              fontSize={12}>
              {item?.province}
            </Text>
          </Block>
          <Text light color={COLORS.text} fontSize={10}>
            {t('YourCartScreen.sold')} {item?.quantity_sold}
          </Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ProductRow;
