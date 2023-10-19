import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/layout.vue'
import NotFound from '@/layouts/404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/HomeView/HomeView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "About" */ '../views/AboutView/AboutView.vue')
      },
      {
        path: '/study-case/:case',
        name: 'study-case',
        component: () => import(/* webpackChunkName: "Study Case" */ '../views/StudyCaseView/StudyCaseView.vue')
      },
    ] 
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  }

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
