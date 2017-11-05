
const initialState = { }

export default (state = initialState, action) => {
  if (action.type === 'FetchAllMoviesRequested') {
    return { status: 'loading' }
  }
  if (action.type === 'FetchAllMoviesSucceed') {
    return { status: 'loaded' }
  }
  if (action.type === 'FetchAllMoviesFailed') {
    return { status: 'failed' }
  }
  return state
}
