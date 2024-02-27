<template>
  <div class="app">
    <Modal />
    <!-- Sidebar -->
    <Sidebar v-if="!isMobileView && $route.path !== '/login'" />
    <Bottombar v-if="isMobileView && $route.path !== '/login'" />
    <!-- Content -->
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from "./components/SideBar.vue";
import Bottombar from "./components/BottomBar.vue";
import Modal from "@/components/Modal.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isMobileView = ref(window.innerWidth <= 768);

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

<style lang="scss">
:root {
  --primary: #1d9bf0;
  --primary-alt: #22c55e;
  --secondary: #71767b;
  --grey-alt-3: #16181c;
  --grey-alt-2: #333639;
  --grey-alt: #202327;
  --grey: #2f3336;
  --dark: black;
  --dark-alt: #181818;
  --light: #f1f5f9;
  --sidebar-width: 300px;
  --small: 12px;
  --link-color: #1c84cb;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
  color: var(--link-color);
}

body {
  background: var(--dark);
  color: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
.view-wrapper {
  padding: 1.5em;
}
</style>
