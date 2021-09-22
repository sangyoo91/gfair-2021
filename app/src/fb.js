import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/functions'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCAEFMM_U2G6O1HOepeNB-mu-r2gJDFVLM",
  authDomain: "gfair2021-14929.firebaseapp.com",
  projectId: "gfair2021-14929",
  storageBucket: "gfair2021-14929.appspot.com",
  messagingSenderId: "86451216946",
  appId: "1:86451216946:web:d1394d82e08f8bfacdd22b",
  measurementId: "G-Q0YK2CZ3MS"
};

const main = firebase.initializeApp(firebaseConfig)

// utils
const db = main.firestore()
const auth = main.auth()


export {
  db, auth
}
