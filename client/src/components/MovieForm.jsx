import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import Select from 'react-select'
import _ from 'lodash'

const currentYear = new Date().getFullYear()
const rates = [ 'G', 'PG', 'M', 'MA', 'R' ]

function withOptionsValue (item) {
  return _.map(item, y => ({ label: y, value: y }))
}

function getYearRangeOptions () {
  return _.range('1900', new Date().getFullYear() + 10)
}

class MovieForm extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
  }

  onChange = (target) => {
    const id = _.get(target, 'id')
    const value = _.get(target, 'value')
    this.props.onChange({ id, value })
  }

  render () {
    return (
      <form>
        <FormGroup controlId='movieTitle'>
          <ControlLabel>Movie Title</ControlLabel>
          <FormControl
            type='text'
            label='Movie Title'
            placeholder='Movie Title'
            onChange={(e) => this.onChange(e.target)}
          />
        </FormGroup>
        <FormGroup controlId='yearReleased'>
          <ControlLabel>Year Released</ControlLabel>
          <Select
            name='yearReleased'
            value={currentYear}
            options={withOptionsValue(getYearRangeOptions())}
            onChange={(o) => this.onChange({ ...o, id: 'yearReleased' })}
          />
        </FormGroup>
        <FormGroup controlId='rating'>
          <ControlLabel>Rating</ControlLabel>
          <Select
            name='rating'
            value='G'
            options={withOptionsValue(rates)}
            onChange={(o) => this.onChange({ ...o, id: 'rating' })}
          />
        </FormGroup>
      </form>
    )
  }
}

export default MovieForm
