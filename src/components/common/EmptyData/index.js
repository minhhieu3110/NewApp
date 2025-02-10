import React from 'react';
import {Block, Text} from 'components';
import LottieView from 'lottie-react-native';
import {LOTTIES} from '@assets';
import Loading from 'components/base/Loading';
import {useTranslation} from 'react-i18next';

const EmptyData = ({
  lottieName,
  width = 200,
  height = 200,
  title = 'common.data_empty',
  isLoading,
}) => {
  const {t} = useTranslation();
  return (
    <Block flex justifyCenter alignCenter>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <LottieView
            loop
            autoPlay
            source={LOTTIES.emptyBox}
            style={{width: width, height: height}}
          />
          <Text>{t(title)}</Text>
        </>
      )}
    </Block>
  );
};
export default EmptyData;
