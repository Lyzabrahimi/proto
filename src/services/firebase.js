
//import  * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAxcvcy56qQVUIdi9FhFxudO4j63HGgVOQ",
  authDomain: "etudiant-e96f9.firebaseapp.com",
  databaseURL: "https://etudiant-e96f9-default-rtdb.firebaseio.com",
  projectId: "etudiant-e96f9",
  storageBucket: "etudiant-e96f9.appspot.com",
  messagingSenderId: "10187592621",
  appId: "1:10187592621:web:5b250fbf2b6d34358c0724",
  measurementId: "G-T65RK6XH4P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


{/*
    export const database =firebase.firebase
    export  const auth= firebase.auth
    export const db = firebase.firestore
*/}

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export {projectStorage,projectFireStore};
  export default firebase;
