// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjmiORAlkw_TDOdmFDSKGOKov57UDfvqQ",
  authDomain: "whatsapp-clone-b6fa9.firebaseapp.com",
  projectId: "whatsapp-clone-b6fa9",
  storageBucket: "whatsapp-clone-b6fa9.appspot.com",
  messagingSenderId: "434205705541",
  appId: "1:434205705541:web:157f56cfe01bfaf965aa2c",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
