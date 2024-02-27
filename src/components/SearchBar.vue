<template>
  <div class="search-bar">
    <span class="material-symbols-outlined">search</span
    ><input
      type="text"
      placeholder="Search Kwetter"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span
      class="material-symbols-outlined clear-btn"
      v-if="modelValue"
      @click="clearInput"
      >cancel</span
    >
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const clearInput = () => {
  emit("update:modelValue", ""); // Update the modelValue prop with an empty string
};
</script>
<style lang="scss" scoped>
@import "@/styles/breakpoints.scss";
.search-bar {
  display: flex;
  align-items: flex-start;
  background: var(--grey-alt);
  border-radius: 50px;
  padding-left: 1em;
  width: fit-content;
}

.search-bar .material-symbols-outlined {
  width: 1em;
  align-self: center;
  color: var(--secondary);
}
.search-bar input {
  width: 100%;
  background: var(--grey-alt);
}
.clear-btn {
  margin-right: 0.3em;
}
.clear-btn:hover {
  cursor: pointer;
}
input {
  font-size: 14px;
  border: none;
  color: var(--light);
  border-radius: 50px;
  padding: 1em 1em;
  @include sm {
    font-size: 12px;
  }
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
</style>
