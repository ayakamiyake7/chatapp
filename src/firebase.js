import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4za1tYWScGF_FrgaqIg9o786RIB1B9No",
  authDomain: "chatapp-with-ham.firebaseapp.com",
  projectId: "chatapp-with-ham",
  storageBucket: "chatapp-with-ham.appspot.com",
  messagingSenderId: "1061176660240",
  appId: "1:1061176660240:web:8f4fe1b42689d6d754d595",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
