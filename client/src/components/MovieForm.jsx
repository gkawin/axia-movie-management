import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap'
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
    formData: PropTypes.shape({
      movieTitle: PropTypes.string.isRequired,
      releasedYear: PropTypes.number.isRequired,
      rating: PropTypes.string,
    })
  }

  state = { movieTitle: undefined, releasedYear: null, rating: null }

  componentDidMount = () => {
    if (_.isEmpty(this.props.formData)) {
      this.setState({ releasedYear: currentYear })
      return
    }
    this.setState({ ...this.props.formData })
  }

  onChange = (target) => {
    const id = _.get(target, 'id')
    const value = _.get(target, 'value')
    this.setState({ [id]: value })
  }

  render () {
    return (
      <Form>
        <FormGroup controlId='movieTitle'>
          <ControlLabel>Movie Title</ControlLabel>
          <FormControl
            type='text'
            label='Movie Title'
            placeholder='Movie Title'
            value={this.state.movieTitle}
            onChange={(e) => this.onChange(e.target)}
          />
        </FormGroup>
        <FormGroup controlId='releasedYear'>
          <ControlLabel>Year Released</ControlLabel>
          <Select
            name='releasedYear'
            value={this.state.releasedYear}
            options={withOptionsValue(getYearRangeOptions())}
            onChange={(o) => this.onChange({ ...o, id: 'releasedYear' })}
          />
        </FormGroup>
        <FormGroup controlId='rating'>
          <ControlLabel>Rating</ControlLabel>
          <Select
            name='rating'
            value={this.state.rating}
            options={withOptionsValue(rates)}
            onChange={(o) => this.onChange({ ...o, id: 'rating' })}
          />
        </FormGroup>
        <Button type='submit'>
          Submit
        </Button>
      </Form>
    )
  }
}

export default MovieForm
