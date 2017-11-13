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

const store = configureStore()

render(
  <Provider store={store}>
    <AppLayout
      employee={employee}
    />
  </Provider>,
  document.getElementById('app')
)
