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

class AddMovieForm extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
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
          />
        </FormGroup>
        <FormGroup controlId='yearReleased'>
          <ControlLabel>Year Released</ControlLabel>
          <Select
            name='yearReleased'
            value={currentYear}
            options={withOptionsValue(getYearRangeOptions())}
            onChange={this.props.onChange}
          />
        </FormGroup>
        <FormGroup controlId='rating'>
          <ControlLabel>Rating</ControlLabel>
          <Select
            name='rating'
            value='G'
            options={withOptionsValue(rates)}
            onChange={this.props.onChange}
          />
        </FormGroup>
      </form>
    )
  }
}

export default AddMovieForm
