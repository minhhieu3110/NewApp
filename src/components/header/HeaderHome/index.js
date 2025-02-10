import {Block} from 'components';
import {COLORS} from 'theme';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Slider from './Slider';

const HeaderHome = () => {
  return (
    <Block backgroundColor={COLORS.white}>
      <LinearGradient
        style={{
          height: 200,
          width: '100%',
          marginTop: -10,
          borderBottomLeftRadius: 40,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={COLORS.gradient}>
        <Slider />
      </LinearGradient>
    </Block>
  );
};

export default HeaderHome;
