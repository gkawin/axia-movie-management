import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'main-design'

import Panel from '../components/dashboard/Panel.jsx'
import AddMovieContainer from './AddMovieContainer.jsx'
import ShowAllMoviesContainer from './ShowAllMoviesContainer.jsx'

class Dashboard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    employee: PropTypes.shape({
      position: PropTypes.string.isRequired,
    }),
  }

  state = { toggleForm: false, mode: null }

  onClickOperation = (e) => {
    this.setState({ toggleForm: true, mode: e.target.name })
  }

  renderForm = () => {
    if (!this.state.toggleForm) return null
    const Component = this.state.mode === 'add' ? AddMovieContainer : ShowAllMoviesContainer
    return (
      <div className='form-viewer'>
        <Component
          employee={this.props.employee}
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

export default styled(Dashboard)`
  width: 100%;
  .form-viewer {
    padding: 30px;
    background-color: ${colors.$grey200}
  }
`
