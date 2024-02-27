<template>
  <div>
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal-content">
        <div class="top">
          <div class="top-left">
            <span class="material-symbols-outlined" @click="modal.close"
              >close</span
            >
            <div class="title">Edit Profile</div>
          </div>

          <div class="actions">
            <ActionButton
              v-for="action in actions"
              @click="action.callback(model)"
              :key="action.name"
              :type="action.btnType"
              >{{ action.label }}</ActionButton
            >
          </div>
        </div>
        <component :is="view" v-model="model"></component>
      </div>
    </div>
  </div>
</template>
<script setup>
import ActionButton from "@/components/Button.vue";
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useModal } from "@/stores/modal";

const modal = useModal();
const model = reactive({});
const { isOpen, view, actions } = storeToRefs(modal);
</script>

<style lang="scss" scoped>
.material-symbols-outlined:hover {
  cursor: pointer;
}
.top-left {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.top {
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 1rem;
}
.actions {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
}
.title {
  font-weight: bold;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.modal-content {
  background-color: var(--dark);
  border-radius: 20px;
  color: var(--light);
  padding: 1rem;
  border: 1px solid var(--grey);
  padding-bottom: 2rem;
}
</style>
