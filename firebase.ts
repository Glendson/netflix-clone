// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGnRRN-butyspYX6vGEHlK-JEBjMDETxI",
  authDomain: "netflix-clone-919d8.firebaseapp.com",
  projectId: "netflix-clone-919d8",
  storageBucket: "netflix-clone-919d8.appspot.com",
  messagingSenderId: "716681536254",
  appId: "1:716681536254:web:dfd6b2330af27f7dcd7baf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }