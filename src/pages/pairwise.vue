<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import card from "../components/card.vue";
import btn from "../components/btn.vue";
import { useQuestions } from "../composables/useQuestions.js";
import { useVotes } from "../composables/useVotes.js";
const { fetchQuestion } = useQuestions();
const { createVote } = useVotes();
const route = useRoute();
const questionIds = route.query.q;
const questions = ref({});

onMounted(async () => {
  if (questionIds?.length === 0) console.error("no questions provided");
  questionIds.forEach(async (id, index) => {
    const question = await fetchQuestion(questionIds[index]);
    questions.value[id] = question;
  });
});

async function selectQuestion(id) {
  createVote(id);
}
</script>

<template>
  <div class="row">
    <card class="m-a-3" v-for="({ title, body }, id) in questions" :title :body>
      <template #footer>
        <btn @click="selectQuestion(id)">Choose</btn>
      </template>
    </card>
  </div>
</template>
<style></style>
