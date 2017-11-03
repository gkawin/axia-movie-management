import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import * as FirebaseConfig from './firebaseConfig'

const logger = store => next => action => {
  console.group(action.type)
  console.log('current state', store.getState())
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const enhance = compose(
  applyMiddleware(...[
    thunk.withExtraArgument(getFirebase),
    logger
  ]),
  reactReduxFirebase(FirebaseConfig.firebase, { userProfile: 'users' }),
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
