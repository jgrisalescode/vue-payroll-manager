import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVGcGq8zblr-vqGx5GQGRlQ8jpGuzCEGA",
  authDomain: "payroll-manager-cb940.firebaseapp.com",
  projectId: "payroll-manager-cb940",
  storageBucket: "payroll-manager-cb940.appspot.com",
  messagingSenderId: "1088569500443",
  appId: "1:1088569500443:web:9fc7c815752affbd0c69be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Utils
const auth = firebase.auth();

// Exports
export {
  auth
}