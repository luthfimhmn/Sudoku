import React, { useEffect, useState } from 'react'
import { Text, View , TextInput} from 'react-native';
import { Button } from 'react-native-elements'
import Styles from './Styles'

function Home (props) {
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername('')
  }, [])

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
          buttonStyle={Styles.button}
          onPress={() => onPressButton('easy')}
          title="Easy"
        />
        <Button
          buttonStyle={Styles.button}
          onPress={() => onPressButton('medium')}
          title="Medium"
        />
        <Button
          buttonStyle={Styles.button}
          onPress={() => onPressButton('hard')}
          title="Hard"
        />
      </View>
    </View>
  )
}

export default Home;