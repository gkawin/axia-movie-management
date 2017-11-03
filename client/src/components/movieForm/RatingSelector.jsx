import React from 'react'
import PropTypes from 'prop-types'

import FormSelect from '../misc/FormSelect'

const rates = [ 'G', 'PG', 'M', 'MA', 'R' ]

class RatingSelector extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static get defaultValue () {
    return { value: 'G' }
  }

  onChange = (o) => {
    this.props.onChange({ id: 'rating', ...o })
  }

  render () {
    return (
      <FormSelect
        label='Rating'
        name='rating'
        optionItems={rates}
        value={this.props.value}
        onChange={this.onChange}
      />
    )
  }
}

export default RatingSelector
