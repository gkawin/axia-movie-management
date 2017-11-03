import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'main-design'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import * as MovieActions from '../action-creators/MovieActions'

import Panel from '../components/dashboard/Panel.jsx'
import AddForm from '../components/movieForm/AddForm.jsx'
import MovieList from '../components/movieList/MovieList.jsx'

const enhance = compose(
  connect(
    state => ({ movieTransactionState: false }),
    { onSubmit: MovieActions.saveMovie }
  )
)

class Dashboard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    moviesData: PropTypes.arrayOf(PropTypes.object),
    employee: PropTypes.shape({
      position: PropTypes.string.isRequired,
    }),
    // HOC
    onSubmit: PropTypes.func,
  }

  state = { toggleForm: false, mode: null }

  onClickOperation = (e) => {
    this.setState({ toggleForm: true, mode: e.target.name })
  }

  renderForm = () => {
    if (!this.state.toggleForm) return null
    const Component = this.state.mode === 'add' ? AddForm : MovieList
    return (
      <div className='form-viewer'>
        <Component
          employee={this.props.employee}
          data={this.props.moviesData}
          onSubmit={this.props.onSubmit}
        />
      </div>
    )
  }

  render () {
    return (
      <div className={this.props.className}>
        <Panel
          employee={this.props.employee}
          onClickOperation={this.onClickOperation}
        />
        {this.renderForm()}
      </div>
    )
  }
}

export default styled(enhance(Dashboard))`
  width: 100%;
  .form-viewer {
    padding: 30px;
    background-color: ${colors.$grey200}
  }
`
