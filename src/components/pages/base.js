import * as firebase from "firebase/app";

import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD8_KgEDyQf-BUrXU0-ovOYnCgYKHc2SKg",
  authDomain: "personality-lens.firebaseapp.com",
  projectId: "personality-lens",
  storageBucket: "personality-lens.appspot.com",
  messagingSenderId: "815010649067",
  appId: "1:815010649067:web:9778485090ad7c31ee3fae",
  measurementId: "G-34CRM2H9RL"
});

export default app;


