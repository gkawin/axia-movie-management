import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import { colors } from 'main-design'

import DashboardContainer from '../containers/Dashboard.jsx'

injectGlobal`
  body {
    background-color: ${colors.$grey200};
  }
  .ReactTable .rt-tbody .rt-td { overflow: visible; }
`

class AppLayout extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    moviesData: PropTypes.arrayOf(PropTypes.object),
    employee: PropTypes.shape({
      position: PropTypes.string.isRequired,
    })
  }

  render () {
    return (
      <div className={this.props.className}>
        <DashboardContainer
          employee={this.props.employee}
          moviesData={this.props.moviesData}
        />
      </div>
    )
  }
}

export default AppLayout
