import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import * as firebase from 'firebase';

import user from "../reducers/userReducer";
import thunk from "redux-thunk"

  var config = {
    apiKey: "AIzaSyCvb0VPRsqbPAsgcOZiBh9BEvXIs2sHezE",
    authDomain: "myhothead-2272f.firebaseapp.com",
    databaseURL: "https://myhothead-2272f.firebaseio.com",
    projectId: "myhothead-2272f",
    storageBucket: "myhothead-2272f.appspot.com",
    messagingSenderId: "152123066940"
  };
  firebase.initializeApp(config);
export default createStore( combineReducers({user}),{},applyMiddleware(thunk));

