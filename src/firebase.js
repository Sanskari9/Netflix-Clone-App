import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCvraMlkO3yoPTYEZAwKv7HSU8qYTHgPYA",
    authDomain: "netflix-clone-app-1823e.firebaseapp.com",
    projectId: "netflix-clone-app-1823e",
    storageBucket: "netflix-clone-app-1823e.appspot.com",
    messagingSenderId: "122455344224",
    appId: "1:122455344224:web:2671b8e33321b028bd2f05"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth();

  export {auth}
  export default db;
  