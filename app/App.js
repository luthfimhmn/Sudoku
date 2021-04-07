import React from 'react';
import Home from './src/screens/Home'
import Board from './src/screens/Board'
import Finish from './src/screens/Finish'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import store from './src/store'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Welcome to Sugoku" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name ="Board" component={Board} options={{headerShown: false}}/>
          <Stack.Screen name ="Finish" component={Finish} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
