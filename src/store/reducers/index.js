import { combineReducers } from 'redux'
import newsReducer from './NewsReducers'

const reducer = combineReducers({
  news: newsReducer
})

export default reducer