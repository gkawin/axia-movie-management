import 'react-table/react-table.css'

import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import { Button, FormControl } from 'react-bootstrap'
import _ from 'lodash'
import styled from 'styled-components'
import u from 'updeep'

import { isGranted } from '../../policies/restriction'
import ReleasedYearSelector from '../movieForm/ReleasedYearSelector.jsx'
import RatingSelector from '../movieForm/RatingSelector.jsx'

class MovieList extends React.PureComponent {
  static propTypes = {
    employee: PropTypes.shape({
      position: PropTypes.string,
    }),
    className: PropTypes.string,
    data: PropTypes.array,
  }

  state = { editItem: { editable: false, at: undefined, payload: { } } }

  onEditRow = (rowInfo) => {
    this.setState({ editItem: { editable: true, at: rowInfo.index, payload: rowInfo.original } })
  }

  onDeleteRow = async (rowInfo) => {
    await this.setState({ editItem: u({ at: rowInfo.index })(this.state.editItem) })
    // await this.state.store.deleteAt(this.state.editItem.at)
    this.forceUpdate()
  }

  onChangeInputUpdate = async (o, cellInfo) => {
    const affectAtColumn = cellInfo.column.id
    const updatedValue = o.target.value
    await this.setState({
      editItem: {
        ...this.state.editItem,
        payload: {
          ...this.state.editItem.payload,
          [affectAtColumn]: updatedValue
        } }
    })
  }

  onClickOperation = (e, rowInfo) => {
    const fnOperation = e.target.name === 'edit'
      ? this.onEditRow
      : this.onDeleteRow
    fnOperation(rowInfo)
  }

  onUpdateRow = async (rowInfo) => {
    await this.setState({ editItem: u({ editable: false })(this.state.editItem) })
    // const { at, payload } = this.state.editItem
    console.log(this.state.editItem)
    // await this.state.store.updateAt(at, payload)
  }

  renderButton = (btnItem, rowInfo) => {
    return (
      <Button
        key={rowInfo.column.id}
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
      <div key={affectAtColumn} onBlur={() => this.onUpdateRow(cellInfo)}>
        <FormControl
          type='text'
          label='Movie Title'
          placeholder='Movie Title'
          value={representValue}
          onChange={(o) => this.onChangeInputUpdate(o, cellInfo)}
        />
      </div>
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
      <div key={affectAtColumn} onBlur={() => this.onUpdateRow(cellInfo)}>
        <Component
          nolabel
          value={representValue}
          onChange={(o) => this.onChangeInputUpdate({ target: o }, cellInfo)}
        />
      </div>
    )
  }

  render () {
    return (
      <div className={this.props.className}>
        <ReactTable
          className='movie-list'
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
