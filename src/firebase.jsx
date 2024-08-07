import {useState,useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth,onAuthStateChanged} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzNE7kKArzqKSF_5S8zh7kn6qtW4WB1x8",
  authDomain: "myfirstproject-24-9c1b6.firebaseapp.com",
  projectId: "myfirstproject-24-9c1b6",
  storageBucket: "myfirstproject-24-9c1b6.appspot.com",
  messagingSenderId: "578778503003",
  appId: "1:578778503003:web:ce5c9d463b237108072c7e",
  databaseURL: 'https://myfirstproject-24-9c1b6-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) 
const auth = getAuth(app)
const db = getFirestore(app);
export {app, auth, db}

// custome hook
export function useAuth(){
  const[currentUser, setCurrentUser] = useState(null);
 useEffect(() => {
 const unsub = onAuthStateChanged(auth,user=>setCurrentUser(user));
return unsub; 
}, [])
  return currentUser;
}