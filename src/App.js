import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import RootStack from 'navigation/RootStack';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import {ToastProvider} from 'react-native-toast-notifications';

import {Provider} from 'react-redux';
import store from './redux/store/index';
export default function App() {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
  });

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#0060AF'} />
        <ToastProvider>
          <RootStack />
        </ToastProvider>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
