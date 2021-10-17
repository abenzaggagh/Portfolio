import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfiguration = {
    projectId: "abenzaggagh",
    messagingSenderId: "571177422593",
    storageBucket: "abenzaggagh.appspot.com",
    authDomain: "abenzaggagh.firebaseapp.com",
    apiKey: "AIzaSyDo_LlQ937nQxwcz_-99R2UXobmiSJtNfM",
    appId: "1:571177422593:web:35e3120eff54ab4cdfd500",
    databaseURL: "https://abenzaggagh-default-rtdb.europe-west1.firebasedatabase.app",
};

initializeApp(firebaseConfiguration);

const Firestore = getFirestore();

export default Firestore;

