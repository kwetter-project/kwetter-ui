<template>
  <div class="view-wrapper">
    <div class="col">
      <div class="title-wrapper">
        <div
          class="material-symbols-outlined back-btn"
          v-if="isMobileView && test && $route.name == 'Settings Options'"
          @click="
            () => {
              test = false;
            }
          "
        >
          arrow_back
        </div>
        <h3 class="page-title">Settings</h3>
      </div>
      <router-link
        to="/settings"
        v-if="!isMobileView || (isMobileView && !test)"
        @click="
          () => {
            test = true;
          }
        "
        class="settings-option"
      >
        <span class="text">Your account</span>
        <span class="material-symbols-outlined">chevron_right</span>
      </router-link>
      <router-view v-if="isMobileView && test"></router-view>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const isMobileView = ref(window.innerWidth <= 768);
const test = ref(false);
const handleResize = () => {
  isMobileView.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<style lang="scss" scoped>
.title-wrapper {
  border-bottom: solid 1px var(--grey);
  margin-bottom: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-left: 1rem;
}
.page-title {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.view-wrapper {
  display: flex;
  width: 100%;
  padding: 0;
}
.col {
  overflow-y: auto;
  height: 100vh;
}
.col:nth-child(1) {
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.col:nth-child(2) {
  flex-grow: 1;
  border-left: solid 1px var(--grey);
  border-right: solid 1px var(--grey);

  margin-right: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1em;
  @media (max-width: 768px) {
    display: none;
  }
}
.follow-btn {
  align-self: center;
}
.searchbar {
  width: 100%;
}
.trends-card {
  width: 100%;
}
.trend-list {
  border-bottom: solid 1px var(--grey);
}
.settings-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--light);
  background: var(--grey-alt-3);
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
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
</style>
