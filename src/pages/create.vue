<script setup>
import { ref } from "vue";
import btn from "../components/btn.vue";
const title = ref("");
const body = ref("");

function createQuestionPair() {
  console.log({ title, body });
  createQuestion(title, body);
}
</script>

<template>
  <h1>Create</h1>
  <input v-model="title" />
  <input v-model="body" />
  <btn @click="createQuestionPair">Create</btn>
</template>
