<script setup>
import { useRouter } from "vue-router";
import card from "../components/card.vue";
import btn from "../components/btn.vue";

import { useRankings } from "../composables/useRankings";
import { ref, onMounted } from "vue";

function pairwise(arr) {
  let pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    pairs.push([arr[i], arr[i + 1]]);
  }
  return pairs;
}
const router = useRouter();
const { getRanking, updateRanking } = useRankings();
const done = ref(false);
const ranking = ref({});
const items = ref([]);
const currentIndex = ref(0);
onMounted(async () => {
  ranking.value = await getRanking(router.currentRoute.value.params.id);
  items.value = pairwise(ranking.value.items);
});

function chooseItem(item) {
  if (currentIndex.value < items.value.length - 1) {
    if (item)
      ranking.value.items = ranking.value.items.map((i) => {
        if (items.value[currentIndex.value].find((itm) => itm.name === i.name))
          if (i.name === item.name) {
            i.score++;
          } else {
            i.score--;
          }
        return i;
      });

    currentIndex.value++;
  } else {
    done.value = true;
    updateRanking(ranking.value.id, ranking.value);
  }
}
</script>
<template>
  <div v-if="done">
    <div class="flex-center">
      <div class="text-xl">Thank you!</div>
    </div>
    <div class="grid">
      <div v-for="item in ranking.items">
        {{ item.name }}
        {{ item.score }} <span class="text-xs">score</span>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex-center">
      <div class="text-xl">{{ ranking.name }}</div>
    </div>
    <div class="flex-center">
      <card
        :showTopBorder="true"
        class="m-a-3 p-a-3 w-50 clickable"
        v-for="item in items[currentIndex]"
        @click="chooseItem(item)"
        :title="item.name"
      />
    </div>
    <div class="flex-center">
      <btn @click="chooseItem(null)">Equal</btn>
    </div>
  </div>
</template>

<style>
.ranking {
  min-height: 200px;
}
</style>
