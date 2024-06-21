<template>
  <div>
    <nav class="flex-center">
      <div v-if="userProfile">
        <btn class="m-a-3" @click="goToPage('home')">Home</btn>
        <btn class="m-a-3" @click="handleSignOut">Logout</btn>
      </div>
      <div v-else>
        <btn class="m-a-3" @click="goToPage('register')">Sign up</btn>
        <btn class="m-a-3" @click="goToPage('authenticate')">Login</btn>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue"; // used for conditional rendering
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import btn from "./components/btn.vue";

const router = useRouter();

const isLoggedIn = ref(true);
const userProfile = ref();
// runs after firebase is initialized
onAuthStateChanged(getAuth(), function (user) {
  if (user) {
    userProfile.value = user;
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});

function goToPage(name) {
  router.push({ name });
}
const handleSignOut = () => {
  signOut(getAuth());
  router.push("/");
};
</script>

<style></style>
