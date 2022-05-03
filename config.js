import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAka3UHBcICYDPJ2JwKtYGaIHGVH86SMQg",
    authDomain: "e-rider-app-832a3.firebaseapp.com",
    projectId: "e-rider-app-832a3",
    storageBucket: "e-rider-app-832a3.appspot.com",
    messagingSenderId: "644657433338",
    appId: "1:644657433338:web:c4dabfae7dcd1757fad743"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


