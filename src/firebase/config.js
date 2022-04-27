import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCILBkEOfpnqu_GW6tK2OG0MFsIGBEnvs0",
    authDomain: "blog-system-77c12.firebaseapp.com",
    projectId: "blog-system-77c12",
    storageBucket: "blog-system-77c12.appspot.com",
    messagingSenderId: "894942681842",
    appId: "1:894942681842:web:79dd102d291352902e8e6b"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db , timestamp , auth}