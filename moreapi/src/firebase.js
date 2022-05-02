//create structure to adding firebase database and firebase auth!!!!
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'



// later create structure of database firebase i have caught key autenticatoin!!
const firebaseConfig = {
    apiKey: "AIzaSyDpTzaRhgyq0VtQypvtliwnp5zwJQTYF7Q",
    authDomain: "autenticacao-react-cc4e7.firebaseapp.com",
    projectId: "autenticacao-react-cc4e7",
    storageBucket: "autenticacao-react-cc4e7.appspot.com",
    messagingSenderId: "832823698981",
    appId: "1:832823698981:web:a87453f3495e40242881cc"
  };
firebase.initializeApp(firebaseConfig)

export default firebase