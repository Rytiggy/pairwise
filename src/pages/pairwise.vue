<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import card from "../components/card.vue";
import btn from "../components/btn.vue";
import { useQuestions } from "../composables/useQuestions.js";
import { useVotes } from "../composables/useVotes.js";
const { fetchQuestion } = useQuestions();
const { createVote, fetchVotesForQuestion } = useVotes();
const route = useRoute();
const questionIds = route.query.q;
const questions = ref({});

onMounted(async () => {
  if (questionIds?.length > 0)
    questionIds.forEach(async (id, index) => {
      const question = await fetchQuestion(questionIds[index]);
      const votes = await fetchVotesForQuestion(id);

      questions.value[id] = { ...question, votes };
    });
  else alert("No questions provided to compare");
});

const hasVoted = ref(false);

async function selectQuestion(id) {
  await createVote(id);
  hasVoted.value = true;
}
</script>

<template>
  <div class="row">
    <card v-if="hasVoted" title="Thank you"></card>
    <card
      v-else
      class="m-a-3"
      v-for="({ title, body, votes }, id) in questions"
      :title
      :body
    >
      <div class="text-xs">{{ votes }} votes</div>

      <template #footer>
        <btn @click="selectQuestion(id)">Choose</btn>
      </template>
    </card>
  </div>
</template>
<style></style>
