import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchAllMovies, editMovie } from '../action-creators/MovieActions'
import MovieList from '../components/movieList/MovieList.jsx'

class ShowAllMovies extends React.PureComponent {
  static propTypes = {
    fetchAllMovies: PropTypes.func,
    editMovie: PropTypes.func,
    moviesLoadingState: PropTypes.object,
    movies: PropTypes.array,
  }
  componentDidMount () {
    this.props.fetchAllMovies()
  }

  render () {
    if (this.props.moviesLoadingState.status !== 'loaded') return 'Loading'
    return (
      <MovieList
        employee={{ position: 'Manager' }}
        data={this.props.movies}
        editMovie={this.props.editMovie}
      />
    )
  }
}
export default connect(
  (state) => ({
    moviesLoadingState: state.moviesLoadingState,
    movies: state.movies
  }),
  { fetchAllMovies, editMovie }
)(ShowAllMovies)
