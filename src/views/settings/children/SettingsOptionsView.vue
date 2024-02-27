<template>
  <h3 class="page-title">Your Account</h3>
  <p class="settings-section-desc">See information about your account.</p>
  <router-link to="/changepassword" class="settings-section-option-link"
    ><List
      subtextBottom="Change your password at any time."
      title="Change your password"
      icon="key"
      class="settings-section-option"
      ><span class="material-symbols-outlined">chevron_right</span></List
    ></router-link
  >
</template>
<script setup>
import List from "@/components/List.vue";
</script>
<style lang="scss" scoped>
.page-title {
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-left: 1rem;
}
.settings-option .material-symbols-outlined,
.settings-section-option .material-symbols-outlined {
  color: var(--secondary);
  font-size: 2em;
}
.settings-section-option .material-symbols-outlined {
  align-self: center;
}
.settings-section-option ::v-deep .subtext {
  margin-top: 0.5em;
  font-size: 14px;
}
.settings-section-option ::v-deep .title {
  font-weight: normal;
}
.settings-section-desc {
  margin-bottom: 1rem;
  color: var(--secondary);
  font-size: 14px;
  padding: 0 1rem;
}
.col:nth-child(2) .page-title {
  margin-bottom: 0;
}
.settings-section-option:hover {
  cursor: pointer;
  background: var(--grey-alt-3);
}
.settings-section-option {
  padding: 1rem 1rem;
}
.settings-section-option-link {
  color: var(--light);
}
</style>
