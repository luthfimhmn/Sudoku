import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import Board from './src/screens/Board'
import Finish from './src/screens/Finish'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import { Provider, useSelector } from 'react-redux'
import store from './src/store'
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Welcome to Sugoku" component={Home}/>
          <Stack.Screen name ="Board" component={Board}/>
          <Stack.Screen name ="Finish" component={Finish}/>
        </Stack.Navigator>
        {/* <View style={styles.container}>
          <StatusBar style="auto" />
          <Home>
          </Home>
          <Board>
          </Board>
          <Finish>
          </Finish>
        </View> */}
        </NavigationContainer>
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
