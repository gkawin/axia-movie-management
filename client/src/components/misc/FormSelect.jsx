import 'react-select/dist/react-select.css'

import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel } from 'react-bootstrap'
import Select from 'react-select'

import withReactSelectOptionsValue from '../../concerns/withReactSelectOptionsValue'

class FormSelect extends React.PureComponent {
  static propTypes = {
    nolabel: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    optionItems: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
  }

  render () {
    return (
      <FormGroup controlId={this.props.name}>
        {this.props.nolabel ? null : <ControlLabel className='label'>{this.props.label}</ControlLabel>}
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
