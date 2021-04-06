import React, { useEffect } from 'react'
import { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestionAsync } from '../store/actions';

function Board (props) {
  const [editableBoard, setEditableBoard] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
      .then(res => res.json())
      .then(res => {
        setEditableBoard(res.board)})
      .catch(err => console.log(err))
    // dispatch(setQuestionAsync())
  }, [])

  function onChangeText (text) {
    console.log(text);
  }

  return (
      <View style={styles.container}>
        <View>
          {
            editableBoard.map((row, rowIndex) => {
              return (
                <View style={styles.row} key={rowIndex}>
                  {
                    row.map((col, colIndex) => {
                      return (
                        <TextInput
                          value={String(col)}
                          onChangeText={(text) => onChangeText(text)}
                          key={"" + rowIndex + colIndex}
                        />
                      )
                    })
                  }
                </View>
              )
            })
          }
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row'
  }
});

export default Board;