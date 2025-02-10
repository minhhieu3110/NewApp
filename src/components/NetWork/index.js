import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import NetInfo from '@react-native-community/netinfo';
import {useTranslation} from 'react-i18next';

const NetWork = () => {
  const {t} = useTranslation();
  const [isConnection, setIsConnection] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnection(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnection) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <Text style={styles.text}>{t('homeScreen.internet')}</Text>
      </View>
    </View>
  );
};

export default NetWork;
