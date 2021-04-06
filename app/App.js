import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import Board from './src/screens/Board'
import Finish from './src/screens/Finish'

import { Provider, useSelector } from 'react-redux'
import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home>
        </Home>
        <Board>
        </Board>
        <Finish>
        </Finish>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
