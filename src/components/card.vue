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
    <div v-if="$slots.footer" class="bg-soft text-center p-a-3">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
