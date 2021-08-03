import firebase from "firebase";
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA0u-nl2jf6b7UUB4kNq7zaFMizUnALC_c",
  authDomain: "casgram-b86f1.firebaseapp.com",
  projectId: "casgram-b86f1",
  storageBucket: "casgram-b86f1.appspot.com",
  messagingSenderId: "295210170647",
  appId: "1:295210170647:web:4381bb445db8afd55fdf52"
};
// Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const storage = firebaseApp.storage();
  const db = firebaseApp.firestore();
  //google authentication
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db, storage};
