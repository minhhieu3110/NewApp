import {icons} from '@assets';
import {
  Block,
  Icon,
  Image,
  ImagePickerChat,
  Pressable,
  Loading,
  Text,
} from 'components';
import {COLORS} from 'theme';
import {width} from '@utils/responsive';
import React, {useState} from 'react';
import {useController} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

const MultiImageInputChat = ({
  label = '',
  name,
  control,
  setClearImage,
  maxImage = 4,
  imageOptions = {},
}) => {
  const {bottom} = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const {
    field: {value: images = [], onChange},
    fieldState: {error},
  } = useController({name, control});
  const {isLoading} = useSelector(state => state.postUserMessage);

  const {t} = useTranslation();
  const errorMessage = t(error?.message);

  const onImagePick = imgs => {
    const filteredImage = Array.isArray(imgs)
      ? imgs?.filter(img => !images.some(image => image.data === img.data))
      : [imgs];
    onChange([...images, ...filteredImage].slice(0, maxImage));
  };

  const _renderPlaceHolder = () => {
    if (images.length >= maxImage) {
      return null;
    }
    return (
      <Pressable
        onPress={() => {
          setModalVisible(true), Keyboard.dismiss(), setClearImage(false);
        }}
        marginHorizontal={5}>
        <Image source={icons.sendPicture} round={40} />
      </Pressable>
    );
  };

  const _renderImagePreview = () => {
    return (
      <Block row backgroundColor={COLORS.white} width={width}>
        {isLoading && <Loading />}
        {images?.map((item, index) => {
          const onPress = () => {
            const newImages = images.filter((_, i) => i !== index);
            onChange(newImages);
          };
          return (
            <Block
              backgroundColor="placeholder2"
              key={index}
              marginLeft={15}
              marginVertical={15}>
              <Image
                source={{uri: item.path || item}}
                resizeMode="cover"
                square={74}
              />
              <Pressable absolute right={0} top={0} onPress={onPress}>
                <Icon
                  IconType={AntDesign}
                  iconName="closecircle"
                  iconSize={15}
                  iconColor="primary"
                />
              </Pressable>
            </Block>
          );
        })}
      </Block>
    );
  };

  return (
    <>
      <Block>
        {label?.length > 0 && (
          <Text fontSize={17} marginBottom={15}>
            {t(label)}
          </Text>
        )}
        <Block rowCenter>
          {_renderPlaceHolder()}
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {_renderImagePreview()}
        </ScrollView> */}
        </Block>

        {errorMessage?.length > 0 && (
          <Text
            color="red"
            fontSize={11}
            marginTop={2}
            marginLeft={15}
            marginBottom={10}>
            {errorMessage}
          </Text>
        )}
        {modalVisible && (
          <ImagePickerChat
            hidePicker={() => setModalVisible(false)}
            onImagePick={onImagePick}
            options={{
              multiple: true,
              maxFiles: 3,
              includeBase64: true,
              ...imageOptions,
            }}
          />
        )}
      </Block>
      <ScrollView
        style={{
          position: 'absolute',
          zIndex: 99,
          width: width - 10,
          top: -bottom - 70,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {_renderImagePreview()}
      </ScrollView>
    </>
  );
};

export default MultiImageInputChat;
