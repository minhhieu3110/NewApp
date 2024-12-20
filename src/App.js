import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import BottomTabContainer from './navigation/BottomTabContainer';
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
      <View style={styles.container}>
        <StatusBar backgroundColor={'#0060AF'} />
        <ToastProvider>
          <RootStack />
        </ToastProvider>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
