import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCVRlcfX4SCclDDrMnFvBJwnXnbZXHykig",
  authDomain: "notes-app-8e01c.firebaseapp.com",
  projectId: "notes-app-8e01c",
  storageBucket: "notes-app-8e01c.firebasestorage.app",
  messagingSenderId: "187437589835",
  appId: "1:187437589835:web:95141e0a9c45190c7eb4ce",
  measurementId: "G-490GYHNGCC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app); 

export { db }; 
