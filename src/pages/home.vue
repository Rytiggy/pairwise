<script setup>
import { useQuestions } from "../composables/useQuestions";
import card from "../components/card.vue";
import { useVotes } from "../composables/useVotes.js";
import { onMounted, ref } from "vue";
const { fetchVotesForQuestion } = useVotes();

const { fetchQuestions, questions } = useQuestions();

const questionsAndAnswers = ref([]);
async function combineVotesAndQuestions() {
  for (const id in questions.value) {
    const question = questions.value[id];

    const votes = await fetchVotesForQuestion(id);
    questionsAndAnswers.value.push({ ...question, votes });
  }
}
onMounted(async () => {
  await fetchQuestions();
  combineVotesAndQuestions();
});
</script>
<template>
  <h1>Home</h1>
  <h3>All Questions ({{ questionsAndAnswers.length }})</h3>
  <card
    class="m-a-3"
    v-for="{ title, body, votes } in questionsAndAnswers"
    :title
    :body
  >
    <template #footer> Votes: {{ votes }} </template>
  </card>
</template>
