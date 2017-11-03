import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import * as FirebaseConfig from './firebaseConfig'

const enhance = compose(
  applyMiddleware(
    thunk.withExtraArgument(getFirebase),
  ),
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
