
// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBliLGjVo25gqbbHVpmr2oB5rxO7ThxdZg",
//     authDomain: "my-work-dba7f.firebaseapp.com",
//     projectId: "my-work-dba7f",
//     storageBucket: "my-work-dba7f.firebasestorage.app",
//     messagingSenderId: "653410341821",
//     appId: "1:653410341821:web:16799aeccffda27dcd38d4",
//     measurementId: "G-G32QRMZKR2"
//   };
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Add error handling
auth.onAuthStateChanged((user) => {
  if (user) {
    
    //console.log('User is signed in');
  } else {
    return
    //console.log('No user is signed in');
  }
}, (error) => {
  console.error('Auth state changed error:', error);
});



// "rewrites": [
//   {
//     "source": "**",
//     "destination": "/index.html"
//   }
// ]

// {
//   "hosting": {
//     "site": "sparktechsolutions",
//     "public": "dist",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ]
//   },
//   "rewrites": [
//   {
//     "source": "**",
//     "destination": "/index.html"
//   }
// ]

// }