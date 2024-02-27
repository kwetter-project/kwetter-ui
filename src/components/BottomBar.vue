<template>
  <div class="menu">
    <router-link to="/" class="button">
      <span class="material-symbols-outlined">home</span>
    </router-link>
    <router-link to="/explore" class="button">
      <span class="material-symbols-outlined">search</span>
    </router-link>
    <router-link to="/notifications" class="button">
      <span class="material-symbols-outlined">notifications</span>
    </router-link>
    <router-link to="/profile" class="button">
      <span class="material-symbols-outlined">person</span>
    </router-link>
    <router-link to="/settings" class="button">
      <span class="material-symbols-outlined">settings</span>
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
h3 {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

h3 {
  color: var(--grey);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.menu {
  display: flex;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  justify-content: center;
  background-color: var(--dark);
  z-index: 999;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  .button {
    display: flex;
    align-items: center;
    text-decoration: none;

    transition: 0.2s ease-in-out;
    padding: 0.5rem 1rem;

    .material-symbols-outlined {
      font-size: 2rem;
      color: var(--secondary);
      transition: 0.2s ease-in-out;
    }

    &:hover {
      background-color: var(--dark-alt);
      border-radius: 50px;
    }

    &.router-link-exact-active {
      .material-symbols-outlined {
        font-weight: bold;
        color: var(--light);
      }
    }
  }
}
</style>
