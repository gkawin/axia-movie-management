import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppLayout from './AppLayout.jsx'
import configureStore from '../configureStore'

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

const store = configureStore()

render(
  <Provider store={store}>
    <AppLayout
      employee={employee}
      moviesData={moviesData}
    />
  </Provider>,
  document.getElementById('app')
)
