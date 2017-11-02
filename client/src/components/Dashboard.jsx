import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Button } from 'react-bootstrap'
import styled from 'styled-components'
import _ from 'lodash'

const labels = [
  { name: 'add', label: 'Add Movie', btnStyle: 'default' },
  { name: 'read', label: 'Show All Movies', btnStyle: 'primary' },
  { name: 'edit', label: 'Edit Movie', btnStyle: 'warning' },
  { name: 'delete', label: 'Delete Movie', btnStyle: 'danger' }
]

class Dashboard extends React.PureComponent {
  static propTypes = {
    employee: PropTypes.shape({
      position: PropTypes.string.isRequired,
    }),
    restriction: PropTypes.array.isRequired,
    className: PropTypes.string,
    onClickOperation: PropTypes.func.isRequired,
  }

  onClickOperation = (e) => {
    e.preventDefault()
    this.props.onClickOperation(e)
  }

  renderButton = (btnItem) => {
    return (
      <Button
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
    const restriction = _.flatten(_.values(_.find(this.props.restriction, this.props.employee.position)))
    if (restriction.length === 0) return null
    const permissions = restriction[0] === '*'
      ? _.map(labels, 'name')
      : restriction
    const toAllow = new Set(permissions)
    return _(labels)
      .filter(obj => toAllow.has(obj.name))
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
