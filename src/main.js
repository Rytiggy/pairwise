import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import "./css/style.css"

/* code from our Firebase console */
const firebaseConfig = {
  apiKey: "AIzaSyCFiHFqB2d_Zc-39XI08yXOhhqn4eRX69A",
  authDomain: "pairwise-69.firebaseapp.com",
  projectId: "pairwise-69",
  storageBucket: "pairwise-69.appspot.com",
  messagingSenderId: "521929544794",
  appId: "1:521929544794:web:83cf938c36c22f91fc7463",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);


if (location.hostname === "localhost") {
  connectAuthEmulator(getAuth(), "http://localhost:9099");
}

const app = createApp(App);

app.use(router);

app.mount("#app");
