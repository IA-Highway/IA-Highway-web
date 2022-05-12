import firebase from 'firebase/app';
import "firebase/storage";
  
var firebaseConfig = {
    apiKey: "AIzaSyAZ_MigZ4Mr6Yajkl8J6KjyVZXuCK_AO-A",
    authDomain: "ia-highway-37627.firebaseapp.com",
    databaseURL: "https://ia-highway-37627-default-rtdb.firebaseio.com",
    projectId: "ia-highway-37627",
    storageBucket: "ia-highway-37627.appspot.com",
    messagingSenderId: "324356895130",
    appId: "1:324356895130:web:d96396606b41c35ee1ca23",
    measurementId: "G-9S74BTQJGM"
  };
    
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { storage, firebase as default,  projectFirestore, timestamp };