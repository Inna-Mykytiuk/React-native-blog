// initialize the project
import { initializeApp } from 'firebase/app';
// Function for connecting the database to the project
import { getFirestore } from 'firebase/firestore';
// Function for connecting file storage to the project
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyARIeRd9vPDcfMkPz7rzVOURyfQc7mNQjQ",
  authDomain: "react-native-blog-ef7d8.firebaseapp.com",
  projectId: "react-native-blog-ef7d8",
  storageBucket: "react-native-blog-ef7d8.appspot.com",
  messagingSenderId: "1065838430729",
  appId: "1:1065838430729:web:0d3acffda9b934c00986d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
