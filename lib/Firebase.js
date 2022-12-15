import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMG5uGbB1KXx_MvaG2GUKtEzsLVlUIh8A",
  authDomain: "bblog-134df.firebaseapp.com",
  projectId: "bblog-134df",
  storageBucket: "bblog-134df.appspot.com",
  messagingSenderId: "151170513271",
  appId: "1:151170513271:web:96f23793419985d6b04972",
  measurementId: "G-YSNMHCQLGV",
};

if (!firebase.apps.length) {
  firebase.intiallizeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
