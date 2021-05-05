import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCZ8KPKb9XUduCym1iMsgsPbauwR1E6vX4",
  authDomain: "products-manager-03.firebaseapp.com",
  projectId: "products-manager-03",
  databaseURL: "https://products-manager-03.firebaseio.com",
  storageBucket: "products-manager-03.appspot.com",
  messagingSenderId: "783829329231",
  appId: "1:783829329231:web:04ace8c19ffd514212913a",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
