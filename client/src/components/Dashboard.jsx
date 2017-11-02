import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Button } from 'react-bootstrap'
import styled from 'styled-components'

class Dashboard extends React.PureComponent {
  static propTypes = {
    employee: PropTypes.shape({
      position: PropTypes.string.isRequired
    }),
    className: PropTypes.string,
    onClickOperation: PropTypes.func.isRequired,
  }

  onClickOperation = (e) => {
    e.preventDefault()
    this.props.onClickOperation(e)
  }

  render () {
    return (
      <Jumbotron className={this.props.className}>
        <h1>Welcome Mr. {this.props.employee.position}</h1>
        <p>Movie Management</p>
        <p className='operation'>
          <Button
            bsStyle='default'
            className='operation__button'
            name='add'
            onClick={this.onClickOperation}
          >
              Add Movie
          </Button>
          <Button
            bsStyle='primary'
            className='operation__button'
            name='showAll'
            onClick={this.onClickOperation}
          >
              Show All Movies
          </Button>
          <Button
            bsStyle='warning'
            className='operation__button'
            name='edit'
            onClick={this.onClickOperation}
          >
              Edit Movie
            </Button>
          <Button
            bsStyle='danger'
            className='operation__button'
            name='delete'
            onClick={this.onClickOperation}
          >
              Delete Movie
            </Button>
        </p>
      </Jumbotron>
    )
  }
}

export default styled(Dashboard)`
  width: 100%;
  padding: 20px;
  display: inline-block;
  text-align: center;
  .operation {
    display: inline-block;
    &__button {
      margin-right: 20px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`
