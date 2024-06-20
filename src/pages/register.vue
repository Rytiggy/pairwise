<template>
  <h1>Create an Account</h1>
  <p><inputEle type="text" placeholder="Email" v-model="email" /></p>
  <p><inputEle type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; // import router
import inputEle from "../components/inputEle.vue";

const email = ref("");
const password = ref("");

const router = useRouter(); // get a reference to our vue router
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value) // need .value because ref()
    .then((data) => {
      router.push({ name: "home" }); // redirect to the feed
    })
    .catch((error) => {
      alert(error.message);
    });
};
</script>
