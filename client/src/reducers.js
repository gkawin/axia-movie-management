import { combineReducers } from 'redux'

import moviesLoadingState from './reducers/moviesLoadingStateReducer'
import movies from './reducers/moviesReducer'

const rootReducer = combineReducers({
  moviesLoadingState,
  movies
})

export default rootReducer
