import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import "firebase/compat/functions";

var config = {
  //firebase config
  apiKey: "AIzaSyA3c8Nwn1Us1GAjq-XTkZXKLV0OQcPG_Ro",
  authDomain: "keyppi.firebaseapp.com",
  projectId: "keyppi",
  storageBucket: "keyppi.appspot.com",
  messagingSenderId: "720045809952",
  appId: "1:720045809952:web:edb82ee413a34069c3b745",
  measurementId: "G-H6S5KKMC13"
};

firebase.initializeApp(config);

//Habilitar para hacer llamados a funciones del emulador
// firebase.functions().useFunctionsEmulator("http://localhost:5001");
firebase.functions().useEmulator("localhost","5001");

export const db = firebase.firestore();
export const fb = firebase;
export const analytics = firebase.analytics();
