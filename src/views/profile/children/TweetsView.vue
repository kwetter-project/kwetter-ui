<template>
  <div class="view-wrapper">
    <Tweet v-for="tweet in tweets" :key="tweet.id" />
  </div>
</template>
<script setup>
import Tweet from "@/components/Tweet.vue";
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
}
</style>
