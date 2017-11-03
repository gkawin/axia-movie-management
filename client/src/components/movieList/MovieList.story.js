import React from 'react'
import { storiesOf } from '@storybook/react'
import MovieList from './MovieList.jsx'

storiesOf('Movie List', module)
.add('has data', () => (
  <MovieList
    employee={{
      position: 'Manager'
    }}
    data={[
      {
        movieTitle: 'Kimi no Musubime (きみの結びめ)',
        releasedYear: 2017,
        rating: 'G'
      },
      {
        movieTitle: 'Inception',
        releasedYear: 2014,
        rating: 'G'
      }
    ]}
  />
))
