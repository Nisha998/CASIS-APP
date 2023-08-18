import firebase from "firebase";
require("@firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDrB7oV3nuLCEsHO-TI1oo7sS2zAM1pBEY",
  authDomain: "casis-app-c1c83.firebaseapp.com",
  projectId: "casis-app-c1c83",
  storageBucket: "casis-app-c1c83.appspot.com",
  messagingSenderId: "954957008851",
  appId: "1:954957008851:web:14101c722932e38a5e2926"
  };
 
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
