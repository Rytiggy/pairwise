<script setup>
import card from "../components/card.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const question = [
  {
    title: "Red",
    body: "hello world",
  },
  {
    title: "Blue",
    body: "hello world",
  },
];

const db = getFirestore();
console.log(db);
const querySnapshot = await getDocs(collection(db, "questions"));
console.log(querySnapshot);
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
</script>

<template>
  <div class="flex-center">
    <card class="m-a-3" v-for="{ title, body } in question" :title :body></card>
  </div>
</template>
<style></style>
