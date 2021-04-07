const initialState = {
  data: [],
  dataBegin: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case "data/setData":
      return {...state, data: action.payload, dataBegin: action.payload}
    case "data/updateData":
      return {...state, data: action.payload}
    default:
      return state
  }
}


export default reducer;