<template>
  <div class="view-wrapper">
    <div class="top">
      <div class="top-1">
        <Profile />
        <TextArea></TextArea>
      </div>
      <div class="top-2">
        <Button>Tweet</Button>
      </div>
    </div>
    <div class="bottom">
      <Tweet v-for="tweet in tweets" :key="tweet.id" />
    </div>
  </div>
</template>
<script setup>
import TextArea from "@/components/TextArea.vue";
import Button from "@/components/Button.vue";
import Tweet from "@/components/Tweet.vue";
import Profile from "@/components/Profile.vue";
import { ref } from "vue";
const tweets = ref([
  {
    id: 1,
    displayName: "Food and Wine",
    userName: "foodandwine",
    time: "10h",
    tweet: `It all comes down to "sonic seasoning." Read more: https://bit.ly/3O9akDM`,
    likes: 10,
  },
  {
    id: 2,
    displayName: "Spotify",
    userName: "Spotify",
    time: "18h",
    tweet: `Sinéad O’Connor, you will forever be missed.`,
    likes: 3677,
  },
  {
    id: 3,
    displayName: "Food and Wine",
    userName: "foodandwine",
    time: "10h",
    tweet: `It all comes down to "sonic seasoning." Read more: https://bit.ly/3O9akDM`,
    likes: 10,
  },
  {
    id: 4,
    displayName: "Spotify",
    userName: "Spotify",
    time: "18h",
    tweet: `Sinéad O’Connor, you will forever be missed.`,
    likes: 3677,
  },
  {
    id: 5,
    displayName: "Food and Wine",
    userName: "foodandwine",
    time: "10h",
    tweet: `It all comes down to "sonic seasoning." Read more: https://bit.ly/3O9akDM`,
    likes: 10,
  },
  {
    id: 6,
    displayName: "Spotify",
    userName: "Spotify",
    time: "18h",
    tweet: `Sinéad O’Connor, you will forever be missed.`,
    likes: 3677,
  },
]);
</script>
<style lang="scss" scoped>
.view-wrapper {
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
  height: 80vh;
}
.top {
  padding: 0 1rem;
  border-bottom: 1px solid var(--grey);
}
.top textarea {
  flex-grow: 1;
}
.top-1 {
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
}
.top-2 {
  padding: 1rem 0;
  display: flex;
  justify-content: end;
}
.bottom {
  // overflow: scroll;
}
</style>
