import React, { useState } from 'react'
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import { useSelector } from 'react-redux';

function Home (props) {
  const [username, setUsername] = useState('')
  const [difficulty, setDifficulty] = useState('easy')

  return (
    <View>
      <Text>Ini halaman Home</Text>
      <Text>Input your Username :</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Button
        onPress={() => props.navigation.push('Board', {
          username,
          difficulty
        })}
        title="To Board"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  }
})

export default Home;