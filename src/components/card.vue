<script setup>
import btn from "./btn.vue";

defineProps(["title", "body"]);
</script>
<template>
  <div
    class="crop bg-light border-t border-brand border-thick border-rounded-lg box-shadow"
  >
    <div class="p-x-4 p-y-3 border-b">
      {{ title }}
      <div class="text-sm">{{ body }}</div>
    </div>
    <div class="text-dark-soft"></div>
    <div class="bg-soft text-center p-a-3">
      <btn class="">Choose</btn>
      <!-- <div class="p-y-3 text-sm text-dark-soft">By {{ author }}</div> -->
    </div>
  </div>
</template>
