<script setup>
import inputEle from "../components/inputEle.vue";
import { useQuestions } from "../composables/useQuestions";
import card from "../components/card.vue";
import btn from "../components/btn.vue";
import { onMounted, computed, ref } from "vue";
import { useRouter } from "vue-router";
import Fuse from "fuse.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const { fetchQuestions, questions } = useQuestions();
const router = useRouter();
const query = ref("");
const filteredQuestions = ref({});

onMounted(async () => {
  await fetchQuestions();
  search();
});

const isLoggedIn = ref(false);
// runs after firebase is initialized
onAuthStateChanged(getAuth(), function (user) {
  console.log(user);
  if (user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

function search() {
  const arrayFormat = Object.keys(questions.value).map((id) => {
    const question = questions.value[id];
    return { ...question, id };
  });
  if (!query.value.length) {
    filteredQuestions.value = questions.value;
    return;
  }
  const fuse = new Fuse(arrayFormat, {
    keys: ["title", "body"],
    threshold: 0.3,
  });

  const objectFormat = {};
  const results = fuse.search(query.value);
  results.forEach((data) => {
    objectFormat[data.item.id] = data.item;
  });
  filteredQuestions.value = objectFormat;
}

// const questionsAndAnswers = ref([]);
// async function combineVotesAndQuestions() {
//   for (const id in questions.value) {
//     const question = questions.value[id];

//     const votes = await fetchVotesForQuestion(id);
//     questionsAndAnswers.value.push({ id, ...question, votes });
//   }
// }

const idsToCompare = ref([]);
function addToCompare(id) {
  idsToCompare.value.push(id);
}

function removeFromCompare(id) {
  idsToCompare.value = idsToCompare.value.filter((savedId) => savedId !== id);
}
const compareUrl = computed(() => {
  const url = new URL(window.location.origin + "/compare");
  idsToCompare.value.forEach((id) => url.searchParams.append("q", id));
  return url;
});

function viewPairWise() {
  router.push({ name: "compare", query: { q: idsToCompare.value } });
}

function goToPage(name) {
  router.push({ name });
}
</script>
<template>
  <card :showTopBorder="true">
    <div class="text-xl">Create a new Pairwise</div>
    <div class="text-sm">
      Your url will appear below once you select 2 or more questions.
    </div>

    <code class="text-xs" v-if="idsToCompare.length > 1">
      {{ compareUrl }}
    </code>
    <div class="text-lg m-t-2">All Questions</div>
    <div class="flex-spaced">
      <inputEle placeholder="Search" v-model="query" @input="search" />

      <btn v-if="isLoggedIn" @click="goToPage('create')"> Create Question </btn>
      <btn v-else @click="goToPage('authenticate')">
        login to create questions
      </btn>
    </div>
    <card
      :showTopBorder="idsToCompare.includes(id)"
      class="m-a-3"
      v-for="(question, id) in filteredQuestions"
    >
      {{ question.title }}
      <div class="text-xs">{{ question.body }}</div>
      <template #footer>
        <btn v-if="idsToCompare.includes(id)" @click="removeFromCompare(id)">
          selected
        </btn>
        <btn v-else @click="addToCompare(id)">select</btn>
      </template>
    </card>
  </card>
</template>
