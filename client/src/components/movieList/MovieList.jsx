import 'react-table/react-table.css'

import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import { Button, FormControl } from 'react-bootstrap'
import _ from 'lodash'
import styled from 'styled-components'
import Select from 'react-select'

import { isGranted } from '../../policies/restriction'
import ReleasedYearSelector from '../movieForm/ReleasedYearSelector.jsx'
import RatingSelector from '../movieForm/RatingSelector.jsx'

class MovieList extends React.PureComponent {
  static propTypes = {
    employee: PropTypes.shape({
      position: PropTypes.string,
    }),
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
  }

  state = { editItem: { editable: false, at: undefined, payload: { } } }

  onEditRow = (rowInfo) => {
    this.setState({ editItem: { editable: true, at: rowInfo.index, payload: rowInfo.original } })
  }

  onDeleteRow = (rowInfo) => {

  }

  onChangeInputUpdate = (e, cellInfo) => {
    const affectAtColumn = cellInfo.column.id
    this.setState({
      editItem: {
        ...this.state.editItem,
        payload: {
          ...this.state.editItem.payload,
          [affectAtColumn]: e.target.value
        } }
    })
  }

  onClickOperation = (e, rowInfo) => {
    const fnOperation = e.target.name === 'edit'
      ? this.onEditRow
      : this.onDeleteRow
    fnOperation(rowInfo)
  }

  renderButton = (btnItem, rowInfo) => {
    return (
      <Button
        bsStyle={btnItem.btnStyle}
        className='btn-operation__btn'
        name={btnItem.name}
        onClick={(e) => this.onClickOperation(e, rowInfo)}
      >
        {btnItem.label}
      </Button>
    )
  }

  renderOperation = (rowInfo) => {
    const buttonGroup = _([
      { name: 'edit', label: 'Edit', btnStyle: 'warning' },
      { name: 'delete', label: 'Delete', btnStyle: 'danger' }
    ])
      .filter(obj => isGranted(this.props.employee.position, obj.name))
      .map((btn) => this.renderButton(btn, rowInfo))
      .value()
    return (<div className='btn-operation'>{buttonGroup}</div>)
  }

  renderTextInputEditableCell = (cellInfo) => {
    if (!this.state.editItem.editable ||
      this.state.editItem.at !== cellInfo.index) return (<div>{cellInfo.value}</div>)
    const affectAtColumn = cellInfo.column.id
    const representValue = _.get(this.state.editItem.payload, affectAtColumn, '')
    return (
      <FormControl
        type='text'
        label='Movie Title'
        placeholder='Movie Title'
        value={representValue}
        onChange={(e) => this.onChangeInputUpdate(e, cellInfo)}
      />
    )
  }

  renderSelectInputEditableCell = (cellInfo) => {
    if (!this.state.editItem.editable ||
      this.state.editItem.at !== cellInfo.index) return (<div>{cellInfo.value}</div>)
    const affectAtColumn = cellInfo.column.id
    const representValue = _.get(this.state.editItem.payload, affectAtColumn, '')
    const Component = affectAtColumn === 'releasedYear'
      ? ReleasedYearSelector
      : RatingSelector
    return (
      <Component
        nolabel
        value={representValue}
        onChange={(o) => { console.log(o) }}
      />
    )
  }

  render () {
    return (
      <div className={this.props.className}>
        <ReactTable
          data={this.props.data}
          columns={[
            { Header: 'Movie Title', accessor: 'movieTitle', Cell: this.renderTextInputEditableCell },
            { Header: 'Released Year', accessor: 'releasedYear', Cell: this.renderSelectInputEditableCell },
            { Header: 'Rating', accessor: 'rating', Cell: this.renderSelectInputEditableCell },
            { Header: 'Action', Cell: this.renderOperation }
          ]}
          defaultPageSize={10}
        />
      </div>
    )
  }
}

export default styled(MovieList)`
  .btn-operation {
    &__btn {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`
