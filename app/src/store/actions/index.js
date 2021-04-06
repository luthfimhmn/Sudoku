export function setQuestion (payload) {
  return {
    type: 'data/setData',
    payload
  }
}

export function setQuestionAsync () {
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
      .then(res => res.json())
      .then(res => {
        dispatch(setQuestion(res.board))})
      .catch(err => console.log(err))
  }
}

