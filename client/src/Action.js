import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  AddMovieItemRequested: { },
  AddMovieItemSucceed: { },
  AddMovieItemFailed: { error: String },

  FetchAllMoviesRequested: { },
  FetchAllMoviesSucceed: { },
  FetchAllMoviesFailed: { error: String },

  ReceivedMoviesSucceed: { movies: Object }
})

export default Action
