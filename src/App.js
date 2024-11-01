import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import {View, StyleSheet, StatusBar} from 'react-native';
import BottomTabNavigator from './navigation/BottomTabContainer';
// import {Provider} from 'react-redux';
// import store from './redux/store/index'
export default function App() {
  return (
    
      <View style={styles.container}>
        <StatusBar backgroundColor={'#0060AF'}/>
        <StackNavigation />
        {/* <BottomTabNavigator/> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
