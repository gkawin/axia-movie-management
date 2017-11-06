import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import * as MovieActions from '../action-creators/MovieActions'

import AddMovie from '../components/movieForm/AddForm.jsx'

class AddMovieContainer extends React.Component {
  static propTypes = {
    employee: PropTypes.shape({
      position: PropTypes.string
    }),
    onSubmit: PropTypes.func,
  }

  render () {
    return (
      <div>
        <AddMovie
          employee={this.props.employee}
          onSubmit={this.props.onSubmit}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    addMovieStatus: state.addMovieStatus,
  }),
  { onSubmit: MovieActions.addMovie }
)(AddMovieContainer)
