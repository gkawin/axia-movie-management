import Action from '../Action'

export const getAllMovies = () => (dispatch) => {
  dispatch(Action.FetchAllMoviesRequested())
}
export const saveMovie = (movieItem) => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  firebase.push('movies', movieItem)
    .then(() => {
      dispatch(Action.AddNewMovie())
    })
}
