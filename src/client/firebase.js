import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDpBOFpsu_m3yhzy6-D784JN8ndak0UyvA",
    authDomain: "blockchain-voting-1eb22.firebaseapp.com",
    projectId: "blockchain-voting-1eb22",
    storageBucket: "blockchain-voting-1eb22.appspot.com",
    messagingSenderId: "911595553716",
    appId: "1:911595553716:web:372f33e94b5af10160e8e1",
    measurementId: "G-RJ5WMBEYYF"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase
  