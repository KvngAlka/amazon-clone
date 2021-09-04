import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD8vm3OKRcKi6lKIVSgcRWXSFdaoAgdY2Y",
    authDomain: "seriousprojects-1.firebaseapp.com",
    databaseURL: "https://seriousprojects-1.firebaseio.com",
    projectId: "seriousprojects-1",
    storageBucket: "seriousprojects-1.appspot.com",
    messagingSenderId: "824631723696",
    appId: "1:824631723696:web:f29f779d1e617f9f095d75",
    measurementId: "G-DC2693S48N"
};
  // Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
