import _ from 'lodash'

export default (state = [], action) => {
  if (action.type === 'ReceivedMoviesSucceed') {
    return _.values(action.movies)
  }
  return state
}
