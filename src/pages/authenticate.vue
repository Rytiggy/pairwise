<template>
  <div class="flex-center">
    <div>
      <h1>Login to Your Account</h1>
      <p><inputEle type="text" placeholder="Email" v-model="email" /></p>
      <p>
        <inputEle type="password" placeholder="Password" v-model="password" />
      </p>
      <p v-if="errMsg">{{ errMsg }}</p>
      <p><button @click="signIn">Submit</button></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import inputEle from "../components/inputEle.vue";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "vue-router"; // import router

const email = ref("");
const password = ref("");
const errMsg = ref(); // ERROR MESSAGE

const router = useRouter(); // get a reference to our vue router

onAuthStateChanged(getAuth(), function (user) {
  if (user) {
    router.push({ name: "home" });
  }
});

const signIn = () => {
  // we also renamed this method
  signInWithEmailAndPassword(getAuth(), email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
      router.push({ name: "home" }); // redirect to the feed
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>
