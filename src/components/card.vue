<script setup>
defineProps(["title", "body", "showTopBorder"]);
</script>
<template>
  <div
    :class="[
      'crop bg-light border-brand border-thick border-rounded-lg box-shadow',
      showTopBorder ? 'border-t' : '',
    ]"
  >
    <div class="p-x-4 p-y-3 border-b">
      <slot></slot>

      {{ title }}
      <div class="text-sm">{{ body }}</div>
    </div>
    <div class="text-dark-soft"></div>
    <div v-if="$slots.footer" class="bg-soft p-a-3">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
