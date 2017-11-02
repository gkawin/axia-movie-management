import React from 'react'
import { storiesOf } from '@storybook/react'
import Dashboard from './Dashboard.jsx'

storiesOf('Dashboard', module)
.add('Initial', (log) => (
  <Dashboard
    employee={{
      _id: 'foo_bar',
      position: 'Manager',
    }}
    restriction={[
      { 'Manager': [ '*' ] },
      { 'TeamLeader': [ 'read', 'add', 'edit' ] },
      { 'FloorSale': [ 'read' ] }
    ]}
  />
))
