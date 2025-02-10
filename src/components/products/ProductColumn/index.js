import {icons, IMAGES} from '@assets';
import {Block, Image, Pressable, Text} from 'components';
import {commonRoot} from '@navigation/navigationRef';
import router from '@navigation/router';
import {COLORS} from 'theme';
import {formatCurrency} from '@utils/helper';
import React from 'react';
import {useTranslation} from 'react-i18next';

const ProductColumn = ({item}) => {
  const {t} = useTranslation();

  return (
    <Pressable
      radius={5}
      marginVertical={5}
      backgroundColor={COLORS.white}
      marginHorizontal={15}
      paddingHorizontal={10}
      rowCenter
      height={110}
      shadow3
      onPress={() => {
        commonRoot.navigate(router.PRODUCTS_SCREEN, {
          data: item?.item_id,
        });
      }}>
      <Block
        backgroundColor={COLORS.white}
        radius={5}
        width={121}
        height={88}
        justifyCenter
        alignCenter>
        <Image
          width={121}
          height={88}
          source={item.picture ? {uri: item.picture} : IMAGES.no_image}
        />
      </Block>

      {item?.sale && (
        <Image
          absolute
          justifyCenter
          alignCenter
          source={icons.ic_mall_sale}
          height={30}
          width={30}
          left={10}
          top={7}>
          <Text
            marginTop={-4}
            marginLeft={-1}
            fontSize={9}
            medium
            color={COLORS.white}>
            {item?.sale}
          </Text>
        </Image>
      )}
      <Block height={90} paddingLeft={14} spaceBetween flex>
        <Text
          numberOfLines={2}
          paddingRight={20}
          fontSize={16}
          color={COLORS.textColor}
          regular>
          {item?.title}
        </Text>
        <Block rowCenter>
          <Text
            numberOfLines={1}
            fontSize={14}
            color={COLORS.oriolesOrange}
            bold>
            {formatCurrency(item.price_buy)}
          </Text>
          {item?.price !== item?.price_buy && (
            <Text
              marginLeft={5}
              marginTop={2}
              lineThrough
              numberOfLines={1}
              fontSize={10}
              color={COLORS.textLineThrough}
              light>
              {formatCurrency(item.price)}
            </Text>
          )}
        </Block>
        <Block rowCenter spaceBetween>
          <Text fontSize={12} color={COLORS.textColor} light>
            {`${t('FavoriteListScreen.sold')} ${item?.quantity_sold}`}
          </Text>
          <Block rowCenter>
            <Image
              marginRight={5}
              source={icons.ic_locationCartA}
              height={10}
              width={8}
            />
            <Text light color={COLORS.primary} fontSize={12}>
              {item?.province}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ProductColumn;
