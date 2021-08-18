import firebase from 'firebase'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFZLmSnOQX7aSl4KxHexqBQGsLzXvCFV8",
    authDomain: "theexamsoffice-a005f.firebaseapp.com",
    projectId: "theexamsoffice-a005f",
    storageBucket: "theexamsoffice-a005f.appspot.com",
    messagingSenderId: "127161366996",
    appId: "1:127161366996:web:0b4e397b32bc539b517e41"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;