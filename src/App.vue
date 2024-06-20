<template>
  <div>
    <nav class="flex-center">
      <router-link :to="{ name: 'home' }"> Home </router-link>

      <router-link v-if="isLoggedIn" :to="{ name: 'create' }">
        create
      </router-link>

      <span v-if="userProfile">
        {{ userProfile.email }}
        <Btn @click="handleSignOut">Logout</Btn>
      </span>
      <span v-else>
        <router-link class="btn" :to="{ name: 'register' }">
          Register
        </router-link>

        <router-link :to="{ name: 'authenticate' }"> Login </router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue"; // used for conditional rendering
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import Btn from "./components/btn.vue";

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

const handleSignOut = () => {
  signOut(getAuth());
  router.push("/");
};
</script>

<style></style>
