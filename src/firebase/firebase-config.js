import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDl3ImS3sSkbHjB_UxryrBKTg7w8nlHbp8",
    authDomain: "block-master-765b2.firebaseapp.com",
    projectId: "block-master-765b2",
    storageBucket: "block-master-765b2.appspot.com",
    messagingSenderId: "150136770203",
    appId: "1:150136770203:web:d19c6869b67efa1709c03e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}