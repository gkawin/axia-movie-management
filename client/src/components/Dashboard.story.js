import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Dashboard from './Dashboard.jsx'

storiesOf('Dashboard', module)
.add('Manager accessed', (log) => (
  <Dashboard
    employee={{
      position: 'Manager',
    }}
    restriction={[
      { 'Manager': [ '*' ] },
      { 'TeamLeader': [ 'read', 'add', 'edit' ] },
      { 'FloorSale': [ 'read' ] }
    ]}
    onClickOperation={(e) => action('click' + e.target.name)()}
  />
))
.add('TeamLeader accessed', (log) => (
  <Dashboard
    employee={{
      position: 'TeamLeader',
    }}
    restriction={[
      { 'Manager': [ '*' ] },
      { 'TeamLeader': [ 'read', 'add', 'edit' ] },
      { 'FloorSale': [ 'read' ] }
    ]}
    onClickOperation={(e) => action('click' + e.target.name)()}
  />
))
.add('FloorStaff accessed', (log) => (
  <Dashboard
    employee={{
      position: 'FloorStaff',
    }}
    restriction={[
      { 'Manager': [ '*' ] },
      { 'TeamLeader': [ 'read', 'add', 'edit' ] },
      { 'FloorStaff': [ 'read' ] }
    ]}
    onClickOperation={(e) => action('click' + e.target.name)()}
  />
))
.add('Unknown accessed', (log) => (
  <Dashboard
    employee={{
      position: 'KAKAKAKA',
    }}
    restriction={[
      { 'Manager': [ '*' ] },
      { 'TeamLeader': [ 'read', 'add', 'edit' ] },
      { 'FloorStaff': [ 'read' ] }
    ]}
    onClickOperation={(e) => action('click' + e.target.name)()}
  />
))
