<template>
  <div class="view-wrapper">
    <div class="col">
      <div class="title-wrapper"><h3 class="page-title">Settings</h3></div>
      <!-- <router-link to="/settings/account" class="settings-option"> -->
      <span class="text">Your account</span>
      <span class="material-symbols-outlined">chevron_right</span>
      <!-- </router-link> -->
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup></script>
