<script setup>
import btn from "../components/btn.vue";
import rankingsList from "../components/rankingsList.vue";
import { useRouter } from "vue-router";
import { useRankings } from "../composables/useRankings";

const { fetchRankings, createRanking, rankings } = useRankings();
fetchRankings();
const router = useRouter();
async function createNewRanking() {
  const ranking = await createRanking();
  router.push({ name: "editRanking", params: { id: ranking.id } });
}
</script>
<template>
  <div class="m-a-3 grid">
    <btn class="" @click="createNewRanking">Create ranking</btn>
    <rankingsList v-model="rankings" />
  </div>
</template>
