<template>
  <div class="tab-menu">
    <router-link
      class="r-link"
      :to="{ name: item.routeName }"
      v-for="item in items"
      :key="item.name"
      :class="{ 'active-tab-item': $route.name === item.routeName }"
      ><div class="tab-item">
        {{ item.name }}
      </div></router-link
    >
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  items: { type: Array, default: () => [] },
});
</script>
<style lang="scss" scoped>
@import "@/styles/breakpoints.scss";
.tab-menu {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 0;
  border-bottom: 1px solid var(--grey);
  justify-content: space-around;
}
.tab-item {
  padding-bottom: 1rem;
}
.active-tab-item {
  font-weight: bold;
  border-bottom: 4px solid var(--primary);
  color: var(--light) !important;
}
.r-link {
  color: var(--secondary);
}
</style>
