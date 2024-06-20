<script setup>
import { ref } from "vue";
import btn from "../components/btn.vue";
import { useQuestions } from "../composables/useQuestions";
const title = ref("");
const body = ref("");
const { createQuestion } = useQuestions();
function createQuestionPair() {
  console.log({ title: title.value, body: body.value });
  createQuestion(title.value, body.value);
}
</script>

<template>
  <h1>Create</h1>
  <input v-model="title" />
  <input v-model="body" />
  <btn @click="createQuestionPair">Create</btn>
</template>
