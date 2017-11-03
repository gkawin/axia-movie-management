import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  AddNewMovie: { },

  FetchAllMoviesRequested: { },
  FetchAllMoviesSucceed: { },
  FetchAllMoviesFailure: { },
})

export default Action
