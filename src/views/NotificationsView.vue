<template>
  <div class="view-wrapper">
    <div class="col">
      <h3 class="page-title">Notifications</h3>
      <List
        v-for="trend in trends"
        :key="trend.title"
        profile="user.jpg"
        class="trend-list"
      >
        <div class="text-notif">
          There was a login to your account @user23456 from a new device on Jul
          26, 2023. Review it now.
        </div>
      </List>
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
import { ref } from "vue";

const searchQuery = ref("");
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
  margin-top: 1rem;
  padding-left: 1rem;
}
.view-wrapper {
  display: flex;
  width: 100%;
  padding: 0;
}
.col {
  padding: 1rem;
  overflow-y: auto;
  height: 100vh;
}
.col:nth-child(1) {
  width: 60%;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
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
  padding-left: 1rem;
  padding-right: 1rem;
}
::v-deep .list .detail {
  gap: 0;
}
.more-trends {
  margin-top: 1em;
}
</style>
