import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCn0FypAFhakrARpaTi1TgBHSS8-8-_qgY",
    authDomain: "vuetify-todo-11e1b.firebaseapp.com",
    databaseURL: "https://vuetify-todo-11e1b.firebaseio.com",
    projectId: "vuetify-todo-11e1b",
    storageBucket: "vuetify-todo-11e1b.appspot.com",
    messagingSenderId: "792403614200",
    appId: "1:792403614200:web:9ec877072ce7ce4b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;