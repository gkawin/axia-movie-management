import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Panel from './Panel.jsx'

storiesOf('Panel', module)
.add('Manager accessed', (log) => (
  <Panel
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
  <Panel
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
  <Panel
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
  <Panel
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
