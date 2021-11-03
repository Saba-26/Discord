import firebase from "./firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCSelqX5aLeyaAIabuStJ0bcyCQiNqIxPI",
    authDomain: "discord-clone-9d6c2.firebaseapp.com",
    projectId: "discord-clone-9d6c2",
    storageBucket: "discord-clone-9d6c2.appspot.com",
    messagingSenderId: "31709035198",
    appId: "1:31709035198:web:4635c1d74c2d41df253cef",
    measurementId: "G-SVB7VMJ9X7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 