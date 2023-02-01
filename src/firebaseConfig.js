import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgDM5Q1-dcMTGiVL9dB9r8q_ft8Fyk8Gc",
  authDomain: "handi-fc35a.firebaseapp.com",
  projectId: "handi-fc35a",
  storageBucket: "handi-fc35a.appspot.com",
  messagingSenderId: "1069962181716",
  appId: "1:1069962181716:web:26edc214885089510181c1",
  measurementId: "G-4MZ1ZC1KHH"
};

export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);