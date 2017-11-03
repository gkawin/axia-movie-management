import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel } from 'react-bootstrap'
import Select from 'react-select'

import withReactSelectOptionsValue from '../../concerns/withReactSelectOptionsValue'

class FormSelect extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    optionItems: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.any,
    onChange: PropTypes.func,
  }

  render () {
    return (
      <FormGroup controlId={this.props.name}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <Select
          name={this.props.name}
          value={this.props.value}
          options={withReactSelectOptionsValue(this.props.optionItems)}
          onChange={this.props.onChange}
        />
      </FormGroup>
    )
  }
}

export default FormSelect
