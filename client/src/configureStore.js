import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import * as FirebaseConfig from './firebaseConfig'

const enhance = compose(
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
