<template>
  <img :src="require('@/assets/' + userImg)" class="wh-user" alt="" />
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  userImg: { type: String, default: "user.jpg" },
});
</script>
<style lang="scss" scoped>
.wh-user {
  border-radius: 100%;
  width: 50px;
  align-self: self-start;
}
</style>
