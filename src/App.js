import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import BottomTabContainer from './navigation/BottomTabContainer';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// import {Provider} from 'react-redux';
// import store from './redux/store/index'
export default function App() {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0060AF'} />
      <BottomTabContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
