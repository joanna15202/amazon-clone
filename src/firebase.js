import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxx0_zRsnGkuU2BgzuU6UG2PVlv42f-eI",
  authDomain: "challenge-64600.firebaseapp.com",
  projectId: "challenge-64600",
  storageBucket: "challenge-64600.appspot.com",
  messagingSenderId: "179689642864",
  appId: "1:179689642864:web:91db7dbbe010d915a50db5",
  measurementId: "G-7HN6KS5ZMD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
