<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import btn from "../components/btn.vue";
import card from "../components/card.vue";
import inputEle from "../components/inputEle.vue";
import { useRankings } from "../composables/useRankings";
const router = useRouter();
const { getRanking, updateRanking } = useRankings();

const ranking = ref({});
const newItem = ref("");

onMounted(async () => {
  ranking.value = await getRanking(router.currentRoute.value.params.id);
  console.log(ranking.value);
});

function addItem() {
  if (!newItem.value.length) return;
  ranking.value.items.push({ name: newItem.value, score: 0 });
  newItem.value = "";
}
function cancel() {
  router.back();
}
async function save() {
  ranking.value = await updateRanking(ranking.value.id, ranking.value);
}
</script>
<template>
  <card :showTopBorder="true">
    <div class="grid">
      <inputEle v-model="ranking.name" placeholder="title" />
      <div v-for="item in ranking.items">
        <inputEle v-model="item.name" :placeholder="item" />
        {{ item.score }} <span class="text-xs">score</span>
      </div>
      <div class="flex">
        <inputEle v-model="newItem" placeholder="Add item" />
        <btn @click="addItem">Add</btn>
      </div>
    </div>
    <template #footer>
      <btn @click="cancel">cancel</btn>
      <btn @click="save">save</btn>
    </template>
  </card>
</template>
