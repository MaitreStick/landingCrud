import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import adminPanelRouter from "@/modules/adminpanel/router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path:'/adminpanel',
    ...adminPanelRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
