import { combineReducers} from 'redux'
import questionReducer from './question'
const reducer = combineReducers({
  test: questionReducer
})

export default reducer;