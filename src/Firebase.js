import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyCdvQM7zmFoWFz5J2sc954QggsrpnJTku8",
    authDomain: "eshop-78e3f.firebaseapp.com",
    projectId: "eshop-78e3f",
    storageBucket: "eshop-78e3f.appspot.com",
    messagingSenderId: "39558233209",
    appId: "1:39558233209:web:0636665f5dd405d8a428a8",
    measurementId: "G-D4C4269PZ7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage };

