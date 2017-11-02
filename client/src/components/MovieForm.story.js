import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MovieForm from './MovieForm.jsx'

storiesOf('Movie Form', module)
.add('Add new one', () => (
  <MovieForm
    onChange={action()}
  />
))
