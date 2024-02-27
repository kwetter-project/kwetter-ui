<template>
  <div class="list">
    <div class="detail">
      <span v-if="icon" class="material-symbols-outlined">{{ icon }}</span>
      <Profile v-if="profile" :userImg="profile" />
      <div class="info">
        <p class="subtext" v-if="subtextTop">{{ subtextTop }}</p>
        <p class="title" v-if="title">{{ title }}</p>
        <p class="subtext" v-if="subtextBottom">{{ subtextBottom }}</p>
      </div>
    </div>

    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import Profile from "@/components/Profile.vue";
defineProps({
  icon: String,
  profile: String,
  title: String,
  subtextTop: String,
  subtextBottom: String,
});
</script>
<style lang="scss" scoped>
@import "@/styles/breakpoints.scss";
.list {
  padding: 0.5em 0;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
.detail {
  display: flex;
  gap: 1rem;
}
.title {
  font-weight: bold;
}
.subtext {
  color: var(--secondary);
  font-size: var(--small);
}
</style>
