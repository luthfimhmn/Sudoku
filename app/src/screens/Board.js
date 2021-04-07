import React, { useEffect, useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, setBoardAsync, updateBoard } from '../store/actions';

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
        dispatch(setBoard(response.data.solution))
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
      <View style={styles.container}>
        <Text>{props.route.params.username}</Text>
        <View>
          {
            board.map((row, rowIndex) => {
              return (
                <View style={styles.row} key={rowIndex}>
                  {
                    row.map((col, colIndex) => {
                      return (
                        <TextInput
                          style={styles.box}
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
        <View style={styles.buttonContainer}>
        <Button
          onPress={() => solveBoard()}
          title="Solve"
        />
        <Button
          onPress={() => validateBoard()}
          title="Validate"
        />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3cc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  box: {
    width: (Dimensions.get("window").width - 50)/9,
    height: (Dimensions.get("window").width - 50)/9,
    borderColor: "black",
    color: "black",
    borderWidth: 1
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff3cc',
    alignItems: 'stretch',
    marginTop: 40
  }
});

export default Board;