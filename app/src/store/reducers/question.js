const initialState = {
  data: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case "data/setData":
      // console.log(action.payload);
      return {...state, data: state.data.concat(action.payload)}
    default:
      return state
  }
}

export default reducer