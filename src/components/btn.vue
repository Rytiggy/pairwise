<template>
  <button class="btn btn-primary"><slot></slot></button>
</template>
<style scoped>
.btn {
  font-weight: 600;
  border-radius: 0.25rem;
  display: inline-block;
  padding: 0.5em 1em;
  font-family: Arial, sans-serif;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
  border: none;
}
.btn-xs {
  font-size: 0.75rem;
}
.btn-brand {
  color: #fff;
  background-color: #00ceae;
}
.btn-brand:hover {
  background-color: #00b598;
}
.btn-primary {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
  color: #525e65;
  background: transparent;
  transition-property: background color;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
}
.btn-primary:hover {
  color: #fff;
  background: #00ceae;
}
</style>
