import Action from '../Action'
import { db } from '../../libs/firebase'

export const fetchAllMovies = () => (dispatch, getState) => {
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

export const addMovie = (payload) => (dispatch, getState) => {
  dispatch(Action.AddMovieItemRequested())
  const newMovieKey = db.ref().child('movies').push().key
  db.ref('movies').update({ [newMovieKey]: { ...payload, id: newMovieKey } })
    .then(() => {
      dispatch(Action.AddMovieItemSucceed())
    })
    .catch((e) => {
      dispatch(Action.AddMovieItemFailed({ error: e.message }))
    })
}

export const editMovie = (payload) => (dispatch, getState) => {
  const id = payload.id
  dispatch(Action.UpdateMovieRequested())
  db.ref(`movies`).update({ [id]: payload })
    .then(() => {
      dispatch(Action.UpdateMovieSucceed())
    })
    .catch((e) => {
      dispatch(Action.UpdateMovieFailed({ error: e.message }))
    })
}
