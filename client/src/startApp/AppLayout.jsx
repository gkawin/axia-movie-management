import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import { colors } from 'main-design'

import DashboardContainer from '../containers/DashboardContainer.jsx'

injectGlobal`
  body {
    background-color: ${colors.$grey200};
  }
  .ReactTable .rt-tbody .rt-td { overflow: visible; }
`

class AppLayout extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    employee: PropTypes.shape({
      position: PropTypes.string.isRequired,
    })
  }

  render () {
    return (
      <div className={this.props.className}>
        <DashboardContainer
          employee={this.props.employee}
        />
      </div>
    )
  }
}

export default AppLayout
