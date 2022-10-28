import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { seedDatabase } from '../seed';

const config = {

    apiKey: "AIzaSyByZ4I3I-aQmtYn5pbBiTEwL_4KPabLGh8",
    authDomain: "instagram-dc81f.firebaseapp.com",
    projectId: "instagram-dc81f",
    storageBucket: "instagram-dc81f.appspot.com",
    messagingSenderId: "804620268688",
    appId: "1:804620268688:web:dedaf1af7f9a7011c51415"
};

const firebase = Firebase.initializeApp(config);

const { fieldvalue } = Firebase.firestore;

// seedDatabase(firebase);

console.log("firebase",firebase);


export {firebase, fieldvalue };