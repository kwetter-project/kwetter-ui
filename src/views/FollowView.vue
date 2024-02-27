<template>
  <div class="view-wrapper">
    <div class="col">
      <div class="top">
        <router-link style="color: white" :to="lastRoute.fullPath"
          ><div class="material-symbols-outlined back-btn">
            arrow_back
          </div></router-link
        >

        <div class="user">
          <h3 class="page-title">John Doe</h3>
          <p class="subtext">@user45678</p>
        </div>
      </div>
      <TabMenu :items="menuItems" />
      <router-view>
        <Follow v-for="user in users" :key="user.userName" :user="user" />
      </router-view>
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
        <div class="more-trends"><a href="#">Show more</a></div>
      </Card>
      <Card class="trends-card" title="Who to follow"
        ><List
          v-for="trend in trends"
          :key="trend.title"
          :subtextBottom="trend.subtextBottom"
          :title="trend.title"
          profile="user.jpg"
          ><Button type="light" class="follow-btn">Follow</Button></List
        >
      </Card>
    </div>
  </div>
</template>
<script setup>
import SearchBar from "@/components/SearchBar.vue";
import Card from "@/components/Card.vue";
import List from "@/components/List.vue";
import Button from "@/components/Button.vue";
import TabMenu from "@/components/TabMenu.vue";
import Follow from "@/components/Follow.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const lastRoute = computed(() => {
  const backUrl = router.options.history.state.back;
  const route = router.resolve({ path: `${backUrl}` });

  return route;
});
const menuItems = ref([
  {
    name: "Followers",
    routeName: "followers",
  },
  {
    name: "Following",
    routeName: "following",
  },
]);
const searchQuery = ref("");
const users = [
  {
    displayName: "AWS Startup",
    userName: "@AWSStartup",
    displayPicture: "user.jpg",
    profilDesc:
      "AWS Startups delivers valuable info for founders, including updates, resources, customer stories, insight, events & product news.",
    status: "Following",
  },
  {
    displayName: "AWS Startup",
    userName: "@AWSStartup2",
    displayPicture: "user.jpg",
    profilDesc:
      "AWS Startups delivers valuable info for founders, including updates, resources, customer stories, insight, events & product news.",
    status: "",
  },
  {
    displayName: "AWS Startup",
    userName: "@AWSStartup3",
    displayPicture: "user.jpg",
    profilDesc:
      "AWS Startups delivers valuable info for founders, including updates, resources, customer stories, insight, events & product news.",
    status: "",
  },
];
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
  padding: 0;
  position: relative;
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
.more-trends {
  margin-top: 1em;
}
.subtext {
  color: var(--secondary);
  font-size: 12px;
}
.top {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background-color: var(--dark);
}
.material-symbols-outlined {
  align-self: center;
}
.cover-profile {
  width: 100%;
  aspect-ratio: 599/197;
  background-color: var(--grey-alt-2);
  position: relative;
}
.cover-profile ::v-deep .wh-user {
  width: 140px;
}
.profile-picture {
  position: absolute;
  left: 1rem;
  bottom: -70px;
}
.edit-profile {
  display: flex;
  justify-content: end;
  padding: 1rem;
}
.edit-profile-btn {
  font-size: 16px;
}
.row {
  display: flex;
  gap: 1rem;
}
.row a {
  color: var(--secondary);
}
.row a:hover {
  text-decoration: underline;
}
.row b {
  color: var(--light);
}
.join:hover {
  cursor: default;
}
.join {
  color: var(--secondary);
  padding-left: 0;
  opacity: 1;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 0.2rem;
  margin-left: -0.5rem;
}
.username {
  color: var(--secondary);
  margin-bottom: 0.5rem;
}
.user-details {
  padding: 1rem;
  padding-top: 1.5rem;
}
.back-btn:hover {
  cursor: pointer;
}
</style>
