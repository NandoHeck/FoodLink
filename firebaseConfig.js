import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDm6B9IDicHpPRg1zpApO4a5fYQ0x_TsaE",
  authDomain: "foodlink-62eaf.firebaseapp.com",
  projectId: "foodlink-62eaf",
  storageBucket: "foodlink-62eaf.firebasestorage.app",
  messagingSenderId: "863076718561",
  appId: "1:863076718561:web:c7e2f3d2241ef0a6de24a0",
  measurementId: "G-NKBSSTR657"
};

if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export { db };