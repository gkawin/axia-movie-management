import React from 'react'
import { storiesOf } from '@storybook/react'
import AddForm from './AddForm.jsx'

storiesOf('Movie Form', module)
.add('Add new one', () => (
  <AddForm />
))
.add('Editing', () => (
  <AddForm
    formData={{
      movieTitle: 'Kimi no Musubime (きみの結びめ)',
      releasedYear: 2017,
      rating: 'G'
    }}
  />
))
