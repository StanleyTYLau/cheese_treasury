import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAwklI6CCoa_eIgXf-KC0RnIRxpcg07dMU",
  authDomain: "cheese-treasury.firebaseapp.com",
  databaseURL: "https://cheese-treasury.firebaseio.com",
  projectId: "cheese-treasury",
  storageBucket: "cheese-treasury.appspot.com",
  messagingSenderId: "508548616566"
};

firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase