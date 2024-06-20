<script setup>
import { computed, ref } from "vue";
import btn from "../components/btn.vue";
import { useQuestions } from "../composables/useQuestions";
const title = ref("");
const body = ref("");
const { createQuestion } = useQuestions();
function createQuestionPair() {
  console.log({ title: title.value, body: body.value });
  createQuestion(title.value, body.value);
}

const idsToCompare = ref([]);
const compareUrl = computed(() => {
  return window.location.origin + "/compare" + "?q=" + idsToCompare.value;
});
</script>

<template>
  <h1>Create Question</h1>
  Title
  <input v-model="title" placeholder="title" />
  <input v-model="body" placeholder="body" />
  <btn @click="createQuestionPair">Create</btn>

  <h1>build url</h1>
  <input v-model="idsToCompare" />
  {{ compareUrl }}
</template>
