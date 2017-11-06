import _ from 'lodash'

import Action from '../Action'
import { db } from '../../libs/firebase'

export const fetchAllMovies = (movieItem) => (dispatch, getState, foo) => {
  if (_.isEmpty(getState().movies)) {
    dispatch(Action.FetchAllMoviesRequested())
    db.ref('movies').once('value')
    .then(resultSet => {
      dispatch(Action.FetchAllMoviesSucceed())
      dispatch(Action.ReceivedMoviesSucceed({ movies: resultSet.val() }))
    })
    .catch((e) => {
      dispatch(Action.FetchAllMoviesFailed({ error: e.message }))
    })
  }
}
