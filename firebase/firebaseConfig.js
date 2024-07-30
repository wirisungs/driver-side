// firebaseConfig.js
import {initializeApp,getApps} from 'firebase/app'
import { getDatabase } from 'firebase/database';
import { initializeAuth } from 'firebase/auth';
/* import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
 */

const firebaseConfig = {
  apiKey: "AIzaSyC5_aXy4e3G7cnEekqBrpnTSEq6JLca7Bw",
  authDomain: "tp-express-673c9.firebaseapp.com",
  databaseURL: "https://tp-express-673c9-default-rtdb.firebaseio.com",
  projectId: "tp-express-673c9",
  storageBucket: "tp-express-673c9.appspot.com",
  messagingSenderId: "658390252003",
  appId: "1:658390252003:web:97f8a0de963681c063c8d6",
  measurementId: "G-8LWE6R99PR"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; 
}

const database = getDatabase(app);
const firebase_auth = initializeAuth(app); 

export { app, database, firebase_auth };

//Android: 340177214409-lj9scb163sa9blbivk8tu99spsnbh9dd.apps.googleusercontent.com