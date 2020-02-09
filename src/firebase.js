import * as firebase from 'firebase';
import 'firebase/firestore'

const config = {
    /* apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID, */

    apiKey: "AIzaSyCok1_VK2PXjScQcTELw8jSrSbeUtqPWjU",
    authDomain: "lafuga-8ef6d.firebaseapp.com",
    databaseURL: "https://lafuga-8ef6d.firebaseio.com",
    projectId: "lafuga-8ef6d",
    storageBucket: "lafuga-8ef6d.appspot.com",
    messagingSenderId: "496213732348",
    appId: "1:496213732348:web:f3a81c4748e3bce242e079"
  };

export const firebaseApp = firebase.initializeApp(config);

