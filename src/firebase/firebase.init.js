import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBKz-XN8-7TxxO5RqoljTiMJgjzKXLus7c",
    authDomain: "ema-john-simple-app-5b37e.firebaseapp.com",
    projectId: "ema-john-simple-app-5b37e",
    storageBucket: "ema-john-simple-app-5b37e.appspot.com",
    messagingSenderId: "853741341372",
    appId: "1:853741341372:web:8d38f59573e14ba0561eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;