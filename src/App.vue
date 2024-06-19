<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home' }"> Home </router-link> |
      <span>
        <router-link :to="{ name: 'manage' }"> Manage </router-link> |
      </span>
      <span v-if="isLoggedIn">
        <button @click="handleSignOut">Logout</button>
      </span>
      <span v-else>
        <router-link :to="{ name: 'register' }"> Register </router-link> |
        <router-link :to="{ name: 'authenticate' }"> Login </router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue"; // used for conditional rendering
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoggedIn = ref(true);

// runs after firebase is initialized
onAuthStateChanged(getAuth(), function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});

const handleSignOut = () => {
  signOut(getAuth());
  router.push("/");
};
</script>

<style></style>
