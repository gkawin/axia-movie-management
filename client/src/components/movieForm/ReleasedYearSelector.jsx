import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import FormSelect from '../misc/FormSelect'

function getYearRangeOptions () {
  return _.range('1900', new Date().getFullYear() + 10)
}

class ReleasedYearSelection extends React.PureComponent {
  static propTypes = {
    nolabel: PropTypes.bool,
    value: PropTypes.number,
    onChange: PropTypes.func,
  }

  static get defaultValue () {
    return { value: new Date().getFullYear() }
  }

  onChange = (o) => {
    this.props.onChange({ id: 'releasedYear', ...o })
  }

  render () {
    return (
      <FormSelect
        nolabel={this.props.nolabel}
        label='Rating'
        name='rating'
        optionItems={getYearRangeOptions()}
        value={this.props.value}
        onChange={this.onChange}
      />
    )
  }
}

export default ReleasedYearSelection
