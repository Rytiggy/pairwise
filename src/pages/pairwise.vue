<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import card from "../components/card.vue";
import { useQuestions } from "../composables/useQuestions.js";
import { useAnswers } from "../composables/useAnswers.js";
const { fetchQuestion } = useQuestions();
const { createAnswer } = useAnswers();
const route = useRoute();
const questionIds = route.query.q;
const questions = ref({});
onMounted(async () => {
  console.log(questionIds);
  if (questionIds?.length === 0) console.error("no questions provided");
  questionIds.forEach(async (id, index) => {
    console.log(id);
    const question = await fetchQuestion(questionIds[index]);
    questions.value[id] = question;
  });
});

async function selectQuestion(id) {
  createAnswer(id);
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
