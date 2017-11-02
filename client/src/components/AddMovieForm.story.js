import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddMovieForm from './AddMovieForm.jsx'

storiesOf('Add Movie Form', module)
.add('Manager accessed', (log) => (
  <AddMovieForm />
))
