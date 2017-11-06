
import * as firebase from 'firebase'

export const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_HOST,
  storageBucket: process.env.STORAGE_HOST,
  messagingSenderId: process.env.SENDER_ID
}

let f
function createConnection () {
  if (f === undefined) {
    f = firebase.initializeApp(config)
  }
}
createConnection()
export const db = firebase.database()
