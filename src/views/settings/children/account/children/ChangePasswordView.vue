<template>
  <div class="top">
    <router-link style="color: white" :to="lastRoute.fullPath"
      ><div class="material-symbols-outlined back-btn">
        arrow_back
      </div></router-link
    >
    <h3 class="page-title">Change your password</h3>
  </div>
  <div class="section-1">
    <Input label="Current password" type="password" v-model="currentPassword" />
  </div>
  <div class="section-2">
    <Input label="New password" type="password" v-model="newPassword" />
    <Input label="Confirm password" type="password" v-model="confirmPassword" />
  </div>
  <div class="section-3">
    <Button
      type="primary"
      class="save-btn"
      :disabled="!isFormFilled"
      @click="saveForm"
      >Save</Button
    >
  </div>
</template>

<script setup>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const lastRoute = computed(() => {
  const backUrl = router.options.history.state.back;
  const route = router.resolve({ path: `${backUrl}` });

  return route;
});
const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

// Computed property to check if the form is filled
const isFormFilled = computed(() => {
  return currentPassword.value && newPassword.value && confirmPassword.value;
});

// Function to handle the "Save" button click
const saveForm = () => {
  if (newPassword.value !== confirmPassword.value) {
    // Handle case when new password and confirm password do not match
    // You can show an error message here
    return;
  }

  // Save the form data or perform any other action here
  console.log("Form saved!");
};
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  padding: 1rem;
  gap: 1.5rem;
}
.section-1,
.section-2 {
  padding: 1rem;
  padding-top: 0;
  border-bottom: 1px solid var(--grey-alt-2);
  display: flex;
}
.section-2 {
  flex-direction: column;
  gap: 1rem;
}
.section-3 {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid var(--grey-alt-2);
}
.save-btn {
  font-size: 18px;
}
.back-btn {
  cursor: pointer;
}
</style>
