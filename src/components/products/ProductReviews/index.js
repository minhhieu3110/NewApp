import {IMAGES} from '@assets';
import {
  Block,
  Image,
  Pressable,
  RankStar,
  Text,
  UserAvatar,
  ModalReport,
} from 'components';
import {COLORS} from 'theme';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import moment from 'moment';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import Toast from 'react-native-toast-message';
import router from '@navigation/router';
import {commonRoot} from '@navigation/navigationRef';

const ProductReviews = ({item, index, onReport}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const dataListReport = useSelector(state => state.getReportList?.data);

  useEffect(() => {
    dispatch({type: actions.GET_REPORT_LIST});
  }, [dispatch]);

  const onSuccess = e => {
    dispatch({
      type: actions.REPORT_RATING,
      body: {item_id: item?.id, report_id: e?.item_id},
      onSuccess: () => {
        Toast.show({
          type: 'success',
          text1: t('ProductsScreen.reportSuccess'),
        });
        setShow(!show);
      },
      onFail: e => {
        setShow(!show);
        Toast.show({
          type: 'error',
          text1: e?.data?.message,
        });
      },
    });
  };
  return (
    <>
      <Block key={index} row>
        {onReport && (
          <Pressable
            absolute
            zIndex={99}
            right={0}
            onPress={() => setShow(true)}>
            <Text fontSize={12} color={COLORS.primary}>
              {t('ProductsScreen.report')}
            </Text>
          </Pressable>
        )}

        <UserAvatar uri={item?.avatar} name={item?.name} size={33} />
        <Block height={38} paddingLeft={15} flex spaceBetween>
          <Text regular fontSize={14} color={COLORS.textColor}>
            {item?.name}
          </Text>
          <Block rowCenter spaceBetween>
            <Block width={100}>
              <RankStar value={item?.rate} size={15} />
            </Block>

            <Text light fontSize={12} color={COLORS.chaliceSilver}>
              {item?.option_text}
            </Text>
          </Block>
        </Block>
      </Block>
      <Block marginTop={10} paddingLeft={53}>
        {item?.content?.length > 0 && (
          <Text light fontSize={12} color={COLORS.textColor} lineHeight={22}>
            {item?.content}
          </Text>
        )}
        {item?.picture?.length > 0 && (
          <ScrollView
            style={{marginTop: 15}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {item?.picture?.map((itemPicture, i) => {
              return (
                <Pressable
                  key={i}
                  onPress={() =>
                    commonRoot.navigate(router.LIGHT_BOX, {
                      images: item.picture,
                    })
                  }>
                  <Image
                    marginRight={10}
                    source={{uri: itemPicture}}
                    height={70}
                    width={70}
                    radius={5}
                  />
                </Pressable>
              );
            })}
          </ScrollView>
        )}

        <Text marginTop={10} light fontSize={12} color={COLORS.textColor}>
          {moment
            .unix(item?.date_create, ' DD/MMM/YYYY')
            .format('HH:mm, DD/MM/YYYY')}
        </Text>
        {item?.productDetail && (
          <Block
            radius={5}
            marginTop={15}
            rowCenter
            backgroundColor={COLORS.background}>
            <Image
              source={IMAGES.product1}
              height={39}
              width={36}
              marginRight={15}
            />
            <Text flex fontSize={12} regular color={COLORS.textColor}>
              {
                '[HOT] Giày thể thao sneaker nam cổ cao chất vải thoáng khí - Kenji H564'
              }
            </Text>
          </Block>
        )}
        {show && (
          <ModalReport
            data={dataListReport?.data}
            title={t('ProductsScreen.report_this_review')}
            describe={t('ProductsScreen.please_review')}
            type={'product'}
            titleCancel={t('ProductsScreen.cancel')}
            titleConfirm={t('ProductsScreen.to_send')}
            onSuccess={e => {
              onSuccess(e);
              // console.log(e);
            }}
            onFail={() => {
              setShow(!show);
            }}
          />
        )}
      </Block>
    </>
  );
};

export default ProductReviews;
