import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap'
import _ from 'lodash'

import ReleasedYearSelector from './ReleasedYearSelector.jsx'
import RatingSelector from './RatingSelector.jsx'

class MovieForm extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.shape({
      movieTitle: PropTypes.string.isRequired,
      releasedYear: PropTypes.number.isRequired,
      rating: PropTypes.string,
    })
  }

  state = { movieTitle: undefined, releasedYear: null, rating: null }

  componentDidMount = () => {
    this.setState({ ...this.props.formData })
  }

  onChange = (target) => {
    const id = _.get(target, 'id')
    const value = _.get(target, 'value')
    this.setState({ [id]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
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
        <ReleasedYearSelector
          value={this.state.releasedYear}
          onChange={this.onChange}
        />
        <RatingSelector
          value={this.state.rating}
          onChange={this.onChange}
        />
        <Button type='submit'>
          Submit
        </Button>
      </Form>
    )
  }
}

export default MovieForm
