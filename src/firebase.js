// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBpSWQQM0mrydJp318fwenN-BUOglUfR9M",
    authDomain: "social-notes-8c084.firebaseapp.com",
    projectId: "social-notes-8c084",
    storageBucket: "social-notes-8c084.appspot.com",
    messagingSenderId: "875249088259",
    appId: "1:875249088259:web:4ccbd5562a1751aeb31b36",
    measurementId: "G-28WNLQV392"
  };
  // connecting frontend with backend
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  // Accessing Database
  const db=firebaseApp.firestore();
  // setting up Authentication
  const auth=firebase.auth();
  // req to provide google login service
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;