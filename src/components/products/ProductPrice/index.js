import {icons} from '@assets';
import {Block, Icon, Image, Pressable, Text} from 'components';
import {commonRoot} from '@navigation/navigationRef';
import router from '@navigation/router';
import {COLORS} from 'theme';
import {formatCurrency} from '@utils/helper';
import {width} from '@utils/responsive';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductPrice = ({infoStore, item}) => {
  return (
    <>
      <Block rowCenter spaceBetween>
        <Block rowCenter>
          <Pressable
            rowCenter
            onPress={() => {
              commonRoot.navigate(router.SHOP_SCREEN, {
                data: infoStore?.department?.item_id,
              });
            }}>
            <Image
              source={icons.ic_store}
              height={13}
              width={13}
              marginRight={10}
            />
            <Text
              numberOfLines={1}
              medium
              fontSize={16}
              color={COLORS.textColor}>
              {infoStore?.department?.title}
            </Text>
            <Icon
              IconType={AntDesign}
              iconName="right"
              iconSize={15}
              color={COLORS.textColor}
            />
          </Pressable>
        </Block>
        <Text regular fontSize={14} color={infoStore?.is_status?.color_bg}>
          {infoStore?.is_status?.title}
        </Text>
      </Block>
      <Block
        marginTop={10}
        height={0.5}
        width={'100%'}
        backgroundColor={COLORS.border}
      />
      <Block>
        {item?.map((i, idx) => {
          return (
            <Block marginTop={15} key={idx} alignStart>
              <Block row spaceBetween>
                <Image
                  source={{uri: i?.picture}}
                  height={width * 0.25}
                  width={width * 0.3}
                  radius={5}
                />
                <Block height={width * 0.25} spaceBetween flex paddingLeft={10}>
                  <Text
                    fontSize={16}
                    regular
                    numberOfLines={2}
                    color={COLORS.textColor}>
                    {i?.title}
                  </Text>
                  <Block rowCenter spaceBetween>
                    <Block
                      marginTop={5}
                      alignSelf={'flex-start'}
                      paddingVertical={5}
                      backgroundColor={
                        i?.option_name ? COLORS.background : COLORS.white
                      }
                      radius={5}>
                      <Text
                        paddingHorizontal={10}
                        fontSize={14}
                        light
                        color={COLORS.textColor}>
                        {i?.option_name}
                      </Text>
                    </Block>
                    <Text fontSize={16} regular color={COLORS.textColor}>
                      {'x' + i?.quantity}
                    </Text>
                  </Block>

                  <Block row justifyEnd wrap>
                    {i?.price_buy === i?.price_buy ? (
                      <Text
                        numberOfLines={1}
                        fontSize={16}
                        regular
                        color={COLORS.oriolesOrange}>
                        {formatCurrency(i?.price_buy)}
                      </Text>
                    ) : (
                      <>
                        <Text
                          marginRight={5}
                          numberOfLines={1}
                          fontSize={14}
                          regular
                          lineThrough
                          color={COLORS.chaliceSilver}>
                          {formatCurrency(i?.price)}
                        </Text>
                        <Text
                          numberOfLines={1}
                          fontSize={16}
                          regular
                          color={COLORS.oriolesOrange}>
                          {formatCurrency(i?.price_buy)}
                        </Text>
                      </>
                    )}
                  </Block>
                </Block>
              </Block>
              <Block
                marginTop={10}
                height={0.5}
                width={'100%'}
                backgroundColor={COLORS.border}
              />
            </Block>
          );
        })}
      </Block>
    </>
  );
};

export default ProductPrice;
