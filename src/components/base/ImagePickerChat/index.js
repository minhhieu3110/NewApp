import {Block, Icon, Modal, Pressable, Text} from 'components';
import {usePhotoPermission} from 'hooks';
import {COLORS} from 'theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Picker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OPTIONS = {
  mediaType: 'photo',
  compressImageQuality: 0.5,
};

const ImagePickerChat = ({hidePicker, onImagePick, options = {}}) => {
  const {t} = useTranslation();
  usePhotoPermission();
  const openCamera = () => {
    hidePicker?.();
    Picker.openCamera({...OPTIONS, ...options}).then(image => {
      onImagePick?.(image);
    });
  };

  const openGallery = () => {
    hidePicker?.();
    Picker.openPicker({...OPTIONS, ...options}).then(image => {
      onImagePick?.(image);
    });
  };

  return (
    <Modal hideModal={hidePicker}>
      <Block backgroundColor="white">
        <Block safePaddingAreaBottom>
          <Pressable
            onPress={openCamera}
            row
            paddingVertical={10}
            paddingHorizontal={15}
            borderBottomWidth={0.5}
            borderColor="lineBreak">
            <Icon IconType={AntDesign} iconName="camera" />
            <Text color={COLORS.textColor} semiBold marginLeft={10}>
              {t('TitleShow.open_camera')}
            </Text>
          </Pressable>
          <Pressable
            onPress={openGallery}
            row
            paddingVertical={10}
            paddingHorizontal={15}
            borderBottomWidth={0.5}
            borderColor="lineBreak">
            <Icon IconType={MaterialIcons} iconName="photo-library" />
            <Text color={COLORS.textColor} semiBold marginLeft={10}>
              {t('TitleShow.open_album')}
            </Text>
          </Pressable>
        </Block>
      </Block>
    </Modal>
  );
};

export default ImagePickerChat;
