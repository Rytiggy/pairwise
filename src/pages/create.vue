<script setup>
import { ref } from "vue";
import btn from "../components/btn.vue";

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useRouter } from "vue-router";
// import { onBeforeUnmount } from "vue";

// const router = useRouter()
// const authListener = onAuthStateChanged(getAuth(),function(user) {
//     if (!user) { // not logged in
//         alert('you must be logged in to view this. redirecting to the home page')
//         router.push('/')
//     }
// });

// onBeforeUnmount(() => {
//   // clear up listener
//   authListener();
// });

const title = ref("");
const body = ref("");

function createQuestionPair() {
  console.log({ title, body });
}
</script>

<template>
  <h1>Create</h1>
  <input v-model="title" />
  <input v-model="body" />
  <btn @click="createQuestion">Create</btn>
</template>
