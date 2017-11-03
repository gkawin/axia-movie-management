import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Button } from 'react-bootstrap'
import styled from 'styled-components'
import _ from 'lodash'

import { isGranted } from '../../policies/restriction'

class Panel extends React.PureComponent {
  static propTypes = {
    employee: PropTypes.shape({
      position: PropTypes.string.isRequired,
    }),
    className: PropTypes.string,
    onClickOperation: PropTypes.func.isRequired,
  }

  onClickOperation = (e) => {
    e.preventDefault()
    this.props.onClickOperation(e)
  }

  renderButton = (btnItem, key) => {
    return (
      <Button
        key={key}
        bsStyle={btnItem.btnStyle}
        className='operation__button'
        name={btnItem.name}
        onClick={this.onClickOperation}
      >
        {btnItem.label}
      </Button>
    )
  }

  renderButtons = () => {
    return _([
      { name: 'add', label: 'Add Movie', btnStyle: 'default' },
      { name: 'read', label: 'Show All Movies', btnStyle: 'primary' },
    ])
      .filter(obj => isGranted(this.props.employee.position, obj.name))
      .map(this.renderButton)
      .value()
  }

  render () {
    return (
      <Jumbotron className={this.props.className}>
        <h1>Welcome Mr. {this.props.employee.position}</h1>
        <p>Movie Management</p>
        <p className='operation'>{this.renderButtons()}</p>
      </Jumbotron>
    )
  }
}

export default styled(Panel)`
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
