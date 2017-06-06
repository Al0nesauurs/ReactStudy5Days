import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCvb0VPRsqbPAsgcOZiBh9BEvXIs2sHezE",
    authDomain: "myhothead-2272f.firebaseapp.com",
    databaseURL: "https://myhothead-2272f.firebaseio.com",
    projectId: "myhothead-2272f",
    storageBucket: "myhothead-2272f.appspot.com",
    messagingSenderId: "152123066940"
  }

firebase.initializeApp(config);
const database = firebase.database();

export default database;