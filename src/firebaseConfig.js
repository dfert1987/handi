import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCTX6zU6e7ysHn0JjMFNDxqM-kVdid0Pj4',
    authDomain: 'handi-app-d1bd8.firebaseapp.com',
    projectId: 'handi-app-d1bd8',
    storageBucket: 'handi-app-d1bd8.appspot.com',
    messagingSenderId: '933178164023',
    appId: '1:933178164023:web:303f790a6ff645c194d0b2',
    measurementId: 'G-TGEM51BRPW',
};

export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const storage = getStorage(app);
