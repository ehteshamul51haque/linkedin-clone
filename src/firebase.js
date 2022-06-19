// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkduHb_83o_Ous4VS0Zn2nqdrxJu9VkJo",
    authDomain: "linkedin-clone-2eec9.firebaseapp.com",
    projectId: "linkedin-clone-2eec9",
    storageBucket: "linkedin-clone-2eec9.appspot.com",
    messagingSenderId: "117965861726",
    appId: "1:117965861726:web:d4c0d8e658f024d46315cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };