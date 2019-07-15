import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyANnH8hNJOrJAOhf4B0Rl5RcVNRvwpMqRM",
    authDomain: "react-thakur-clothing-db.firebaseapp.com",
    databaseURL: "https://react-thakur-clothing-db.firebaseio.com",
    projectId: "react-thakur-clothing-db",
    storageBucket: "",
    messagingSenderId: "848684756280",
    appId: "1:848684756280:web:c65f0af9968acd16"
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
