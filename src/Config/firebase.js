import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDHvz_uyFZRe04iWqIszf9nL21fpZ27bIc",
    authDomain: "firstfirebaseproject-a95d9.firebaseapp.com",
    projectId: "firstfirebaseproject-a95d9",
    storageBucket: "firstfirebaseproject-a95d9.appspot.com",
    messagingSenderId: "289719862759",
    appId: "1:289719862759:web:ef8ab2f94596bfc04a6942",
    measurementId: "G-J2L8WV1VHK"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase