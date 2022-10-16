import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfiguration = {
    apiKey: "AIzaSyC9p_VyMaaOIHNvQvNK93uVox9KIZDciqk",
    authDomain: "abenzaggagh-14be0.firebaseapp.com",
    projectId: "abenzaggagh-14be0",
    storageBucket: "abenzaggagh-14be0.appspot.com",
    messagingSenderId: "472578384928",
    appId: "1:472578384928:web:6d335289f1884a8ddb4845",
    measurementId: "G-2ZRKJS3ZHV"
};

initializeApp(firebaseConfiguration);

const Firestore = getFirestore();

export default Firestore;

