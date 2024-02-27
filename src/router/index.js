import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ForYouView from '../views/home/children/ForYouView.vue'
import ExploreView from '../views/ExploreView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import ProfileView from '../views/profile/ProfileView.vue'
import SettingsView from '../views/settings/SettingsView.vue'
import TweetsView from '../views/profile/children/TweetsView.vue'
import SettingsOptionsView from '../views/settings/children/SettingsOptionsView.vue'
import ChangePasswordView from '../views/settings/children/account/children/ChangePasswordView.vue'
import FollowView from '../views/FollowView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {path:'/login',
name:'login',
component:LoginView},
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        component: ForYouView,
        name:'ForYou'
      },
      {
        path: 'following',
        component: ForYouView,
        name:'Following'
      },
    ],
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    children: [
      {
        path: '',
        component: TweetsView,
        name:'Tweets'
      },
      {
        path: 'likes',
        component: TweetsView,
        name:'Likes'
      }
    ],
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationsView
  },
  
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
    children: [{
      path:'',
      component: SettingsOptionsView,
      name:'Settings Options',
    },
    {
        
      path:'/changepassword',
      component: ChangePasswordView,
      name:'Change Password'
    
  }]
  },
  {
    path:'/followers',
    name:'followers',
    component: FollowView
  },
  {
    path:'/following',
    name:'following',
    component: FollowView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
