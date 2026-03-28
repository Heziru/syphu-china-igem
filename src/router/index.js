// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TeamPage from '../views/Team.vue';
import Labs from '../views/Labs.vue';
import Recruit from '../views/Recruit.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/labs',
    name: 'Labs',
    component: Labs
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: Recruit
  },
  {
    path: '/partnership',
    name: 'Partnership',
    component: () => import('../views/Partnership.vue'),
  },
  {
    path: '/team',
    name: 'TeamPage',
    component: TeamPage  // 新的团队页面路由
  },
  // 其他路由...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
});

export default router;