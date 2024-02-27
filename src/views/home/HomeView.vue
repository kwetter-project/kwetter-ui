<template>
  <div class="view-wrapper">
    <div class="col">
      <div class="top-section">
        <h3 class="page-title">Home</h3>
        <TabMenu :items="menuItems" />
      </div>
      <router-view></router-view>
    </div>
    <div class="col">
      <SearchBar v-model="searchQuery" class="searchbar" />
      <Card class="trends-card" title="Trends for you"
        ><List
          v-for="trend in trends"
          :key="trend.title"
          :subtextTop="trend.subtextTop"
          :subtextBottom="trend.subtextBottom"
          :title="trend.title"
        />
        <div class="more-trends">
          <router-link to="/explore">Show more</router-link>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup>
import SearchBar from "@/components/SearchBar.vue";
import Card from "@/components/Card.vue";
import List from "@/components/List.vue";
import TabMenu from "@/components/TabMenu.vue";
import { ref } from "vue";

const searchQuery = ref("");
const menuItems = ref([
  {
    name: "For you",
    routeName: "ForYou",
  },
  {
    name: "Following",
    routeName: "Following",
  },
]);
const trends = ref([
  {
    subtextTop: "Trending in Netherlands",
    title: "#benvolliefde",
    subtextBottom: "2,706 Tweets",
  },
  {
    subtextTop: "Trending in Netherlands",
    title: "#benvolliefde1",
    subtextBottom: "2,707 Tweets",
  },
  {
    subtextTop: "Trending in Netherlands",
    title: "#benvolliefde2",
    subtextBottom: "2,708 Tweets",
  },
  {
    subtextTop: "Trending in Netherlands",
    title: "#benvolliefde3",
    subtextBottom: "2,709 Tweets",
  },
]);
</script>
<style lang="scss" scoped>
.page-title {
  margin-bottom: 1rem;
  padding-left: 1rem;
}
.view-wrapper {
  display: flex;
  width: 100%;
  padding: 0;
}
.col {
  padding: 1rem;
}
.col:nth-child(1) {
  width: 60%;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.col:nth-child(2) {
  flex-grow: 1;
  border-left: solid 1px var(--grey);
  padding-right: 3rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow-y: auto;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
}

.searchbar {
  width: 100%;
}
.trends-card {
  width: 100%;
}
.more-trends {
  margin-top: 1em;
}
.top-section {
  height: 95px;
}
</style>
