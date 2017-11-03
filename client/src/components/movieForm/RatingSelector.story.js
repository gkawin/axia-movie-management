import React from 'react'
import { storiesOf } from '@storybook/react'
import RatingSelector from './RatingSelector.jsx'

storiesOf('RatingSelector', module)
.add('with Label', (log) => (
  <RatingSelector
    onChange={(o) => { console.log(o) }}
  />
))
.add('no Label', (log) => (
  <RatingSelector
    nolabel
    onChange={(o) => { console.log(o) }}
  />
))
