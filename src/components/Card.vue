<template>
  <div class="card">
    <h3 class="card-title" v-if="title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  title: String,
});
</script>
<style lang="scss" scoped>
@import "@/styles/breakpoints.scss";
.card {
  background: var(--grey-alt);
  border-radius: 20px;
  padding: 1em;
  width: fit-content;
}
.card-title {
  margin-bottom: 0.7em;
}
</style>
