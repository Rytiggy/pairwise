<script setup>
import { useQuestions } from "../composables/useQuestions";
import card from "../components/card.vue";

const { fetchQuestions, questions } = useQuestions();
fetchQuestions();
</script>
<template>
  <h1>Home</h1>
  <h3>All Questions ({{ questions.length }})</h3>
  <card class="m-a-3" v-for="{ title, body } in questions" :title :body> </card>
</template>
