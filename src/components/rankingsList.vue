<script setup>
import { useRouter } from "vue-router";
import card from "../components/card.vue";
import Btn from "./btn.vue";
const router = useRouter();
const items = defineModel();
function edit(id) {
  router.push({ name: "editRanking", params: { id } });
}
function view(id) {
  router.push({ name: "ranking", params: { id } });
}
</script>
<template>
  <div class="grid">
    <card v-for="item in items">
      <div class="text-xl">{{ item.name }}</div>
      <div class="text-xs">{{ item?.items?.length }} Items</div>

      <template #footer>
        {{ item.id }}
        <btn @click="edit(item.id)">Edit</btn>
        <btn @click="view(item.id)">Rank</btn>
      </template>
    </card>
  </div>
</template>
