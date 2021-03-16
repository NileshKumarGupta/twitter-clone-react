import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtlG2wyOAa1R65Y99-mKGOEBE7FS4x27Y",
  authDomain: "twitter-clone-react-6a263.firebaseapp.com",
  projectId: "twitter-clone-react-6a263",
  storageBucket: "twitter-clone-react-6a263.appspot.com",
  messagingSenderId: "1026962418182",
  appId: "1:1026962418182:web:fcc922a51440a945abf187",
};

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
