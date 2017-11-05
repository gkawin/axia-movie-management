import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const enhance = compose(
  applyMiddleware(...[thunk, logger]),
  window.devToolsExtension && window.devToolsExtension()
)

export default function configureStore (initialState) {
  const nextReducer = require('./reducers').default
  const store = createStore(nextReducer, initialState, enhance)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
