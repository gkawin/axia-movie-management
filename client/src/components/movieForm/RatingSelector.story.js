import React from 'react'
import { storiesOf } from '@storybook/react'
import RatingSelector from './RatingSelector.jsx'

storiesOf('RatingSelector', module)
.add('Initial', (log) => (
  <RatingSelector
    onChange={(o) => { console.log(o) }}
  />
))
