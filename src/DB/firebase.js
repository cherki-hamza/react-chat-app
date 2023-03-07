import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC_reg57yP8kVCp86TsaVR2bLuwKsA_NNo",
    authDomain: "cherki-chat-app.firebaseapp.com",
    projectId: "cherki-chat-app",
    storageBucket: "cherki-chat-app.appspot.com",
    messagingSenderId: "942333495183",
    appId: "1:942333495183:web:1e8f8e3fec5ea88b326dfa"
}).auth();