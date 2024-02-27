<template>
  <div class="view-wrapper">
    <div class="col">
      <div class="top">
        <div>
          <router-link style="color: white" :to="lastRoute.fullPath">
            <div class="material-symbols-outlined back-btn">
              arrow_back
            </div></router-link
          >
          <div class="user">
            <h3 class="page-title">John Doe</h3>
            <p class="subtext">0 Tweets</p>
          </div>
        </div>

        <Button type="outline" @click="logout">Logout</Button>
      </div>

      <div class="cover-profile">
        <Profile class="profile-picture" userImg="user.jpg" />
      </div>
      <div class="edit-profile">
        <Button
          type="outline"
          class="edit-profile-btn"
          @click="handleOnClickOpenModal"
          >Edit profile</Button
        >
      </div>
      <div class="user-details">
        <div class="name">
          <h3 class="display-name">{{ displayName }}</h3>
          <p class="username">@user23456</p>
        </div>
        <div class="bio">{{ bio }}</div>
        <Button type="label" prependIcon="calendar_month" disabled class="join"
          >Joined July 2023</Button
        >
        <div class="row">
          <router-link :to="{ name: 'following' }"
            ><div class="following"><b>9</b> Following</div></router-link
          >
          <router-link to="/followers"
            ><div class="followers"><b>0</b> Followers</div></router-link
          >
        </div>
      </div>
      <TabMenu :items="menuItems" />
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
import Profile from "@/components/Profile.vue";
import Button from "@/components/Button.vue";
import TabMenu from "@/components/TabMenu.vue";
import EditProfile from "@/components/EditProfile.vue";
import { useModal } from "@/stores/modal";
import { ref, computed } from "vue";
//import Swal from "sweetalert2";
import { useRouter } from "vue-router";
const router = useRouter();
const lastRoute = computed(() => {
  const backUrl = router.options.history.state.back;
  const route = router.resolve({ path: `${backUrl}` });

  return route;
});
const modal = useModal();
const displayName = ref("display name");
const bio = ref("test");
const displayNameModal = ref(displayName.value);
const bioModal = ref(bio.value);
const handleOnClickOpenModal = () => {
  modal.open(
    EditProfile,
    [
      {
        label: "Save",
        btnType: "light",
        callback: () => {
          displayName.value = displayNameModal.value;
          bio.value = bioModal.value;
          modal.close();
        },
      },
    ],
    [displayNameModal, bioModal]
  );
};
const logout = () => {
  router.push("/login");
};
const menuItems = ref([
  {
    name: "Tweets",
    routeName: "Tweets",
  },
  {
    name: "Likes",
    routeName: "Likes",
  },
]);
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
.bio {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
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
  justify-content: space-between;
}
.top > div {
  display: flex;
  gap: 2rem;
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
