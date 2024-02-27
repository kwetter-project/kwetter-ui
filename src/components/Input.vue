<template>
  <div class="input-container">
    <input
      v-if="type != 'textarea'"
      ref="inputRef"
      @focus="showInputLabel = true"
      @blur="handleBlur"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-field"
      :type="type"
      :placeholder="showInputLabel ? '' : label"
    />
    <textarea
      v-if="type == 'textarea'"
      ref="inputRef"
      @focus="showInputLabel = true"
      @blur="handleBlur"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-field"
      :placeholder="showInputLabel ? '' : label"
    ></textarea>
    <label v-if="showInputLabel" class="input-label" @click="focusInput">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, watch, nextTick, defineEmits } from "vue";

const inputRef = ref(null);
const showInputLabel = ref(false);
const props = defineProps(["label", "type", "modelValue"]);
defineEmits(["update:modelValue"]);
const inputValue = ref(props.modelValue.value);

// Handle label appearance on initial value or focus
onMounted(() => {
  showInputLabel.value =
    !!inputValue.value || inputRef.value === document.activeElement;
});

// Watch for changes in the input value and update the label visibility
watch(inputValue, (newValue) => {
  showInputLabel.value = !!newValue;
});

// Handle label appearance when input is blurred
const handleBlur = () => {
  nextTick(() => {
    if (!inputValue.value) {
      showInputLabel.value = false;
    }
  });
};

// Function to focus the input element when the label is clicked
const focusInput = () => {
  inputRef.value.focus();
};
</script>

<style>
.input-container {
  width: 100%;
  position: relative;
  display: inline-block; /* Make the container take the size of the input */
}

.input-field {
  padding: 8px;
  font-size: 16px;
  background-color: var(--dark);
  border: 1px solid var(--grey-alt-2);
  border-radius: 5px;
  outline: none;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--light);
}

.input-label {
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 12px;
  color: #999;
  pointer-events: none;
  transition: transform 0.15s, font-size 0.15s;
  background-color: var(
    --dark
  ); /* Ensure the label background matches the input background */
  padding: 0 4px; /* Add some padding to make it visually appealing */
}

.input-field:focus + .input-label,
.input-field:not(:placeholder-shown) + .input-label {
  transform: translateY(-16px) scale(0.85);
}
</style>
