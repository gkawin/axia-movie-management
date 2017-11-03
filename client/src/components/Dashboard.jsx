import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'main-design'

import Panel from './Panel.jsx'
// import MovieForm from './MovieForm.jsx'

class Dashboard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    restriction: PropTypes.arrayOf(PropTypes.object),
    employee: PropTypes.shape({
      position: PropTypes.string.isRequired,
    })
  }

  state = { toggleMovieForm: false, mode: null }

  onClickOperation = (e) => {
    this.setState({ toggleMovieForm: true, mode: e.target.name })
  }

  renderForm () {
    if (!this.state.toggleMovieForm) return null
    return (
      <section className='form'>
        {/* <MovieForm /> */}
      </section>
    )
  }

  render () {
    return (
      <div className={this.props.className}>
        <Panel
          employee={this.props.employee}
          restriction={this.props.restriction}
          onClickOperation={this.onClickOperation}
        />
        {this.renderForm()}
      </div>
    )
  }
}

export default styled(Dashboard)`
  width: 100%;
  .form {
    padding: 30px;
    background-color: ${colors.$grey100}
  }
`
