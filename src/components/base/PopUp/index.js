import {Block, Modal, Pressable, Text} from 'components';
import Loading from 'components/base/Loading';
import {COLORS, GRADIENTS} from 'theme';
import {width} from '@utils/responsive';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Keyboard, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function PopUp({
  text1,
  text2,
  button1,
  button2,
  hideModal,
  onButton2Press,
  onButton1Press,
  isLoading = false,
  onlySubmit = false,
  cancelAble = false,
}) {
  const {t} = useTranslation();
  return (
    <Modal
      hideModal={cancelAble ? hideModal : undefined}
      contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
      {isLoading ? (
        <Loading />
      ) : (
        <Block alignCenter>
          <Block
            borderTopRadius={7}
            backgroundColor={'white'}
            paddingHorizontal={10}
            width={width * 0.85}
            alignCenter>
            <Text
              lineHeight={22}
              semiBold
              fontSize={18}
              center
              color={COLORS.textColor}
              paddingHorizontal={35}
              paddingTop={20}
              paddingBottom={text2 ? 15 : 20}>
              {text1 || ''}
            </Text>
            {text2 && (
              <Text
                lineHeight={20}
                center
                light
                marginBottom={10}
                fontSize={15}
                color={COLORS.textColor}>
                {text2 || ''}
              </Text>
            )}
          </Block>
          <Block
            spaceAround
            padding={15}
            backgroundColor={'white'}
            borderBottomRadius={7}
            row
            width={width * 0.85}>
            {!onlySubmit && (
              <Pressable
                radius={7}
                backgroundColor={COLORS.lineBreak}
                onPress={() => {
                  hideModal?.();
                  onButton2Press?.();
                }}
                style={styles.button}>
                <Text fontSize={16} color={COLORS.black}>
                  {button2 || t('common.cancel')}
                </Text>
              </Pressable>
            )}
            <LinearGradient
              colors={GRADIENTS.primary}
              style={{borderRadius: 7}}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Pressable
                radius={7}
                // backgroundColor={COLORS.primary}
                onPress={() => {
                  Keyboard.dismiss();
                  hideModal?.();
                  onButton1Press?.();
                }}
                style={styles.button}>
                <Text fontSize={16} color={COLORS.white}>
                  {button1 || t('common.confirm')}
                </Text>
              </Pressable>
            </LinearGradient>
          </Block>
        </Block>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.3 - 0.5,
    alignItems: 'center',
    paddingVertical: 10,
  },
});
