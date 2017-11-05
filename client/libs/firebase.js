
import * as firebase from 'firebase'

export const config = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.DB_HOST,
  // storageBucket: process.env.STORAGE_HOST,
  // messagingSenderId: process.env.SENDER_ID
  apiKey: 'AIzaSyBTJ39mIjHxO8vDg81DwFoIQUk_0LvSJoI',
  authDomain: 'axia-movie-management.firebaseapp.com',
  databaseURL: 'https://axia-movie-management.firebaseio.com',
  projectId: 'axia-movie-management',
  storageBucket: 'axia-movie-management.appspot.com',
  messagingSenderId: '603417327257'
}

let f
function createConnection () {
  if (f === undefined) {
    f = firebase.initializeApp(config)
  }
}
createConnection()
export const db = firebase.database()
