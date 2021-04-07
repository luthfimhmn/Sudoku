import React, { useState } from 'react'
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

function Home (props) {
  const [username, setUsername] = useState('')

  function onPressButton (level) {
    if(username === '') {
      return alert('Username is required')
    }
    props.navigation.navigate('Board', {
      username,
      difficulty: level
    })
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Game Sudoku</Text>
      <Text style={Styles.textMini}>Input your Username :</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        textAlign="center"
        textAlignVertical="center"
      />
      <View style={Styles.buttonContainer}>
        <Text style={Styles.textMini}>Choose Difficulty :</Text>
        <Button
          onPress={() => onPressButton('easy')}
          title="Easy"
        />
        <Button
          onPress={() => onPressButton('medium')}
          title="Medium"
        />
        <Button
          onPress={() => onPressButton('hard')}
          title="Hard"
        />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f5DD42',
    alignItems: 'stretch',
    justifyContent: 'space-evenly'
  },
  input: {
    borderBottomWidth: 2,
    height: 50
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 40
  },
  textMini: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 100
  }
})

export default Home;