import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({

    apiKey: "AIzaSyDK-jF5t6HkAoNnP5Uev5lm6-5B7G5tGDU",
    authDomain: "fb-messenger-clone-qe-6ca75.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-qe-6ca75.firebaseio.com",
    projectId: "fb-messenger-clone-qe-6ca75",
    storageBucket: "fb-messenger-clone-qe-6ca75.appspot.com",
    messagingSenderId: "614258661212",
    appId: "1:614258661212:web:cab718b50cf68816429399",
    measurementId: "G-089CV653N0"
  
})

const db = firebaseApp.firestore();

export default db;