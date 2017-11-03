import React from 'react'
import { storiesOf } from '@storybook/react'
import ReleasedYearSelector from './ReleasedYearSelector.jsx'

storiesOf('ReleasedYearSelector', module)
.add('Initial', (log) => (
  <ReleasedYearSelector
    onChange={(o) => { console.log(o) }}
  />
))
