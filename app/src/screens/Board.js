import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { setBoardAsync, updateBoard } from '../store/actions';
import Styles from './Styles'

import axios from 'axios'
import { encodeParams } from '../helpers/encodeBoard';

function Board (props) {
  const difficulty = props.route.params.difficulty
  const boardBegin = useSelector(state=> state.dataBegin)
  const board = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setBoardAsync(difficulty))
  }, [])

  function onChangeText (text, rowIndex, colIndex) {
    const newBoard = JSON.parse(JSON.stringify(board))
    newBoard[rowIndex][colIndex] = +text
    dispatch(updateBoard(newBoard))
  }

  function solveBoard () {
    axios({
      method:"POST",
      url: "https://sugoku.herokuapp.com/solve",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: encodeParams({ board })
    })
      .then(response => {
        dispatch(updateBoard(response.data.solution))
      })
      .catch(console.log)
  }

  function validateBoard () {
    axios({
      method: "POST",
      url: "https://sugoku.herokuapp.com/validate",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: encodeParams({ board })
    })
      .then(response => {
        if(response.data.status === "solved"){
          return props.navigation.replace('Finish', {username:props.route.params.username})
        }
        alert(response.data.status)
      })
      .catch(console.log)
  }

  return (
    <>
      <View style={Styles.container}>
        <Text style={Styles.textLarge}>Let's Play</Text>
        <View>
          {
            board.map((row, rowIndex) => {
              return (
                <View style={Styles.row} key={rowIndex}>
                  {
                    row.map((col, colIndex) => {
                      return (
                        <TextInput
                          style={boardBegin[rowIndex][colIndex] !== 0 ? Styles.box : Styles.boxBegin}
                          maxLength={1}
                          value={col === 0 ? "" : String(col)}
                          onChangeText={(text) => onChangeText(text, rowIndex, colIndex)}
                          key={"" + rowIndex + colIndex}
                          textAlign="center"
                          keyboardType={'numeric'}
                          editable={boardBegin[rowIndex][colIndex] === 0 ? true : false}
                        />
                      )
                    })
                  }
                </View>
              )
            })
          }
        </View>
        <View style={Styles.buttonContainer}>
        <Button
          buttonStyle={Styles.button}
          onPress={() => solveBoard()}
          title="Solve"
        />
        <Button
          buttonStyle={Styles.button}
          onPress={() => validateBoard()}
          title="Validate"
        />
        </View>
      </View>
    </>
  )
}

export default Board;