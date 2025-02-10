import {Block, Carousel, Image, Pressable} from 'components';
import {commonRoot} from '@navigation/navigationRef';
import router from '@navigation/router';
import {COLORS} from 'theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Linking, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {unescape} from 'lodash';

const Slider = () => {
  const bannerByID = useSelector(state => state.getBannerByID?.data);
  const getFlashSaleHome = useSelector(
    state => state.getFlashSaleHome.data || {},
  );

  const _renderItem = ({item}) => {
    const handlePress = () => {
      if (+item?.link_website?.length > 1) {
        Linking.openURL(unescape(item?.link_website));
      } else {
        if (
          item.screen !== '' &&
          item.screen === router.FLASH_SALE_SCREEN &&
          getFlashSaleHome.date_end
        ) {
          commonRoot.navigate(router[item.screen]);
        } else if (item.screen !== '' && item.link !== '') {
          commonRoot.navigate(router[item.screen], {data: item.link});
        }
      }
    };
    return (
      <Pressable width={width} onPress={handlePress}>
        <Image
          source={{uri: item.img_link}}
          style={styles.image}
          resizeMode="stretch"
        />
      </Pressable>
    );
  };

  return (
    <Block flex marginHorizontal={15} marginTop={10}>
      <Carousel
        data={bannerByID?.length > 0 ? bannerByID[0] : []}
        autoPlay={true}
        duration={2000}
        renderItem={_renderItem}
        dotStyles={{
          backgroundColor: 'white',
          width: 6,
          height: 6,
          marginTop: -15,
        }}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width - 30,
    height: 165,
    borderRadius: 15,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.white,
  },
});
export default Slider;
