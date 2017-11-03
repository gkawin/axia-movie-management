import React from 'react'
import { render } from 'react-dom'

import AppLayout from './AppLayout.jsx'

// mocking from store
const employee = {
  _id: 'foo_bar',
  position: 'Manager',
}

const moviesData = [
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
]

render(<AppLayout
  employee={employee}
  moviesData={moviesData}
/>, document.getElementById('app'))
