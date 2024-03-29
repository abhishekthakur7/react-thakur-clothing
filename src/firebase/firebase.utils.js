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

  export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth) { //userAuth is user only, userAuth is null when user sign out, the firebase.signOut() returns null
      return;
    }

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({    //API call to add new user
           displayName,
           email,
           createdAt,
           ...additionalData
          })
      } catch(error){
        console.log('Error creating user', error.message);
      }
    }
    return userRef; //This will return newly stored user ref
  };

  //Method to add collections & documents to firestore
  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };
  
  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Config for google sign in
  //const provider = new firebase.auth.GoogleAuthProvider();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' }); //prompt will trigger pop up window to login with google id

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;
