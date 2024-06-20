<script setup>
import { computed, ref } from "vue";
import btn from "../components/btn.vue";
import { useQuestions } from "../composables/useQuestions";
const title = ref("");
const body = ref("");

const { fetchQuestions, createQuestion, questions } = useQuestions();
fetchQuestions();

function createQuestionPair() {
  console.log({ title: title.value, body: body.value });
  createQuestion(title.value, body.value);
}

const idsToCompare = ref([]);
function addToCompare(id) {
  idsToCompare.value.push(id);
}
const compareUrl = computed(() => {
  const url = new URL(window.location.origin + "/compare");
  url.searchParams = idsToCompare.value;
  return idsToCompare.value;
});
</script>

<template>
  <h1>Create Question</h1>
  Title
  <input v-model="title" placeholder="title" />
  <input v-model="body" placeholder="body" />
  <btn @click="createQuestionPair">Create</btn>
  <h1>build url</h1>
  {{ compareUrl }}
  <div v-for="(question, id) in questions" @click="addToCompare(id)">
    {{ question }}
    {{ id }}
  </div>
</template>
