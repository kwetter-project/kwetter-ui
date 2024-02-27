<template>
  <div class="wrapper">
    <Input label="Display name" type="text" v-model="fields[0].value" />
    <Input label="Bio" type="textarea" v-model="fields[1].value" />
  </div>
</template>
<script setup>
import Input from "@/components/Input.vue";
import { useModal } from "@/stores/modal";
import { storeToRefs } from "pinia";

const modal = useModal();
const { fields } = storeToRefs(modal);
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 30vw;
}
</style>
