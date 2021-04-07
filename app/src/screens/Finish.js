import React from 'react';
import {View, Text} from 'react-native'
import { Button } from 'react-native-elements'
import Styles from './Styles'

function Finish (props) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Congratulations {props.route.params.username}!</Text>
      <Text style={Styles.text}>You have finished the game</Text>
      <Button
        buttonStyle={Styles.button}
        title="Back to Home"
        onPress={() => props.navigation.replace('Welcome to Sugoku')}
      />
    </View>
  )
}

export default Finish;