import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Dashboard from './Dashboard.jsx'

storiesOf('Dashboard', module)
.add('Primary', (log) => (
  <Dashboard employee={{
    position: 'Manager'
  }}
    onClickOperation={(e) => action('click' + e.target.name)()}
  />
))
