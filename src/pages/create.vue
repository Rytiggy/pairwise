<script setup>
import { computed, ref } from "vue";
import btn from "../components/btn.vue";
import card from "../components/card.vue";

import inputEle from "../components/inputEle.vue";
import { useQuestions } from "../composables/useQuestions";
import { useRouter } from "vue-router";
const router = useRouter();
const title = ref("");
const body = ref("");

const { fetchQuestions, createQuestion, questions } = useQuestions();
fetchQuestions();

async function createQuestionPair() {
  console.log({ title: title.value, body: body.value });
  try {
    await createQuestion(title.value, body.value);
    router.push({ name: "home" });
  } catch (e) {}
}

// const idsToCompare = ref([]);
// function addToCompare(id) {
//   idsToCompare.value.push(id);
// }
// const compareUrl = computed(() => {
//   const url = new URL(window.location.origin + "/compare");
//   idsToCompare.value.forEach((id) => url.searchParams.append("q", id));
//   return url;
// });
</script>

<template>
  <card :showTopBorder="true">
    <div class="text-xl">Create Question</div>

    <div class="m-a-3">
      <inputEle v-model="title" placeholder="title" />
    </div>

    <div class="m-a-3">
      <inputEle v-model="body" placeholder="body" />
    </div>
    <template #footer>
      <btn @click="createQuestionPair">Create new step</btn>
    </template>
  </card>
</template>
