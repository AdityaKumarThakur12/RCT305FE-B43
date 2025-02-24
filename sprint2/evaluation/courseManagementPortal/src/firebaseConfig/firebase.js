import { initializeApp } from "firebase/app";
import { getDatabase  } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBMyNjCOubXtgRogfH7Nx_X-uIXGuSULWI",
  authDomain: "app-5912d.firebaseapp.com",
  databaseURL: "https://app-5912d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "app-5912d",
  storageBucket: "app-5912d.firebasestorage.app",
  messagingSenderId: "397947768328",
  appId: "1:397947768328:web:2f133d8ffa62def39f0bbd"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);