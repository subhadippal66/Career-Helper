import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpEBHsH8Rorgfk7GIv6umWy3HSdZa6MY8",
  authDomain: "targettree-eb641.firebaseapp.com",
  projectId: "targettree-eb641",
  storageBucket: "targettree-eb641.appspot.com",
  messagingSenderId: "106029943706",
  appId: "1:106029943706:web:e29668ea2990a3eb3b8823",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();

export { db, auth };
