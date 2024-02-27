<template>
  <button
    :class="buttonClass"
    @click="handleClick"
    :type="submit ? 'submit' : 'button'"
  >
    <slot name="prepend-icon">
      <span v-if="prependIcon" class="button-icon prepend-icon">
        <span class="material-symbols-outlined">{{ props.prependIcon }}</span>
      </span>
    </slot>
    <slot></slot>
    <slot name="append-icon">
      <span v-if="appendIcon" class="button-icon append-icon">
        <span class="material-symbols-outlined">{{ props.appendIcon }}</span>
      </span>
    </slot>
  </button>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  prependIcon: {
    type: String,
  },
  appendIcon: {
    type: String,
  },
  submit: Boolean,
});

const buttonClass = computed(() => [
  "button",
  `button-${props.type}`,
  {
    "button-disabled": props.disabled,
  },
]);

const emit = defineEmits(["click"]);

function handleClick() {
  if (!props.disabled) {
    emit("click");
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
}

.button-primary {
  background-color: var(--primary);
  color: #fff;
}

.button-secondary {
  background-color: var(--secondary);
  color: #fff;
}

.button-label {
  background-color: none;
  color: var(--secondary);
}

.button-light {
  background-color: var(--light);
  color: var(--dark);
}

.button-outline {
  background: none;
  color: var(--light);
  border: var(--grey) 1px solid;
}

.button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.prepend-icon,
.append-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
  margin-left: 4px;
}
</style>
