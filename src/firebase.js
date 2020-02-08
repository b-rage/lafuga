import * as firebase from 'firebase';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCok1_VK2PXjScQcTELw8jSrSbeUtqPWjU",
    authDomain: "lafuga-8ef6d.firebaseapp.com",
    databaseURL: "https://lafuga-8ef6d.firebaseio.com",
    projectId: "lafuga-8ef6d",
    storageBucket: "lafuga-8ef6d.appspot.com",
    messagingSenderId: "496213732348",
    appId: "1:496213732348:web:f3a81c4748e3bce242e079"
  };

export const firebaseApp = firebase.initializeApp(config);

