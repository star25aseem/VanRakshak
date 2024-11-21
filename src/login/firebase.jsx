import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyBADLgkoSxAj5D6XuL-nG76PAnri8yo5us",
    authDomain: "wanrakshak.firebaseapp.com",
    projectId: "wanrakshak",
    storageBucket: "wanrakshak.appspot.com",
    messagingSenderId: "51192366530",
    appId: "1:51192366530:web:2ffef819adbd61baca025b",
    measurementId: "G-V11LZJGL5W"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log('App Initialized:', app);
  export default app;