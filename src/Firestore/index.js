import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyBNLwbEbGUYf8Uutb8tzoA556ruV18rVmc",
    authDomain: "lea-website-4ac0a.firebaseapp.com",
    projectId: "lea-website-4ac0a",
    storageBucket: "lea-website-4ac0a.appspot.com",
    messagingSenderId: "804521212273",
    appId: "1:804521212273:web:ff91067ccc342e7de5ded0",
    measurementId: "G-LVW7V9LTG5"
      
});

const db = firebase.firestore();

export default {
    firebase, db
}