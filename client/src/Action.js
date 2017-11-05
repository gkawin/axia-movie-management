import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  FetchAllMoviesRequested: { },
  FetchAllMoviesSucceed: { },
  FetchAllMoviesFailed: { error: String },

  ReceivedMoviesSucceed: { movies: Object }
})

export default Action
