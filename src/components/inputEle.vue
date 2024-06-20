<script setup>
const model = defineModel();
</script>
<template>
  <input v-model="model" class="input" />
</template>
<style>
.input {
  padding: 6px 12px;
  border: 1px solid rgba(0, 0, 0, 0.37);
  border-radius: 4px;
  font-size: 13px;
  appearance: none;
  width: auto;
  transition: border 0.15s ease 0s;
}
.input:focus {
  outline: none;
  box-shadow: none;
  border-color: rgb(100, 153, 255);
}
</style>
