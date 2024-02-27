<template>
  <div class="row wrapper">
    <div class="col">
      <img :src="require('@/assets/' + user.displayPicture)" alt="" />
    </div>
    <div class="col">
      <div class="row top">
        <div class="col names">
          <div class="d-name">{{ user.displayName }}</div>
          <div class="u-name">{{ user.userName }}</div>
        </div>
        <Button type="outline">{{
          user.status == "" ? "Follow back" : "Following"
        }}</Button>
      </div>
      <div class="p-txt">
        {{ user.profilDesc }}
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Button.vue";
import { defineProps } from "vue";
defineProps({
  user: Object,
});
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 1rem;
}
img {
  width: 2rem;
  border-radius: 2px;
}
.row {
  display: flex;
}
.col {
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
}
.u-name {
  color: var(--secondary);
}
.names {
  gap: 0.2rem;
}
.d-name {
  font-weight: bold;
}
.top {
  justify-content: space-between;
  gap: 0.5rem;
}
</style>
