import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChxT7QY-UnlgEF-oFkxjf2C3INu6HDe4M",
    authDomain: "react-real-estate-f5357.firebaseapp.com",
    projectId: "react-real-estate-f5357",
    storageBucket: "react-real-estate-f5357.appspot.com",
    messagingSenderId: "25458185614",
    appId: "1:25458185614:web:feea029218a159853c40df"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
/*
export { auth };
export default db;
*/
export { db, auth };
  export default firebase;