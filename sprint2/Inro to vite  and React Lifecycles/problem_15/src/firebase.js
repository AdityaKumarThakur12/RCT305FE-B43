import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue, update, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCgCvCsifP5EO9M2ADHaXBfflPInhuBji8",
  authDomain: "masai-45749.firebaseapp.com",
  databaseURL: "https://masai-45749-default-rtdb.firebaseio.com",
  projectId: "masai-45749",
  storageBucket: "masai-45749.firebasestorage.app",
  messagingSenderId: "198888529822",
  appId: "1:198888529822:web:32f45cc263317be1e8c08f"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, onValue, update, remove };