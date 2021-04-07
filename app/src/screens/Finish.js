import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

function Finish (props) {

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Congratulations {props.route.params.username}!</Text>
      <Text style={Styles.text}>You have finished the game</Text>
      <Button
        title="Back to Home"
        onPress={() => props.navigation.replace('Welcome to Sugoku')}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5DD42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 40
  }
})

export default Finish;