import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA0mb71slXadE9YFiPS9sDRZPr32vC3_YY",
    authDomain: "thakur-db.firebaseapp.com",
    databaseURL: "https://thakur-db.firebaseio.com",
    projectId: "thakur-db",
    storageBucket: "",
    messagingSenderId: "401390780655",
    appId: "1:401390780655:web:4778f41c052b5a34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Config for google sign in
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
