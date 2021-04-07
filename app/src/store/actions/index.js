import axios from 'axios'

export function setBoard (payload) {
  return {
    type: 'data/setData',
    payload
  }
}

export function updateBoard (payload) {
  return {
    type: 'data/updateData',
    payload
  }
}

export function setBoardAsync (payload) {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `https://sugoku.herokuapp.com/board?difficulty=${payload}`
    })
      .then(res => dispatch(setBoard(res.data.board)))
      .catch(err => console.log(err))
  }
}

