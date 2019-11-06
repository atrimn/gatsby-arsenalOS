import firebase from "firebase/app"
import "firebase/firestore"

// use env vars later
const config = {
  apiKey: "AIzaSyA5WQT9lyBV83Ir3pJ9_7jB9ACVSVGgXJk",
  authDomain: "stealth-tour-demo.firebaseapp.com",
  databaseURL: "https://stealth-tour-demo.firebaseio.com",
  projectId: "stealth-tour-demo",
  storageBucket: "stealth-tour-demo.appspot.com",
  messagingSenderId: "259446614364",
  appId: "1:259446614364:web:590c4306b329d67fb5b999",
}

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(config)
  firebaseInstance = firebase
  return firebase
}
