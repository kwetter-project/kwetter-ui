<template>
  <div class="tweet">
    <Profile />
    <div class="tweet-details">
      <div class="info">
        <h3 class="display-name">Food & Wine</h3>
        <p class="username">@foodandwine</p>
        <p class="time">· 10h</p>
      </div>
      <div class="tweet-text">
        It all comes down to "sonic seasoning." Read more:
        https://bit.ly/3O9akDM
      </div>
      <div class="actions">
        <Button
          class="like-btn"
          :class="{ liked: isLiked }"
          type="label"
          prependIcon="favorite"
          @click="like"
          >1</Button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import Profile from "@/components/Profile.vue";
import Button from "@/components/Button.vue";
import { ref } from "vue";
const isLiked = ref(false);
const like = () => {
  isLiked.value = !isLiked.value;
  console.log(isLiked.value);
};
</script>
<style lang="scss" scoped>
@import "@/styles/breakpoints.scss";
.tweet {
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid var(--grey);
  padding: 1rem;
}
.tweet-details {
  flex-grow: 1;
}
.username,
.time {
  color: var(--secondary);
}
.info {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.user {
  display: flex;
  gap: 1rem;
}
.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: end;
}
.like-btn {
  padding-left: 0;
  padding-right: 0;
}
.liked ::v-deep .material-symbols-outlined {
  font-variation-settings: "FILL" 1;
}
</style>
