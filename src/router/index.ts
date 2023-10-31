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
        path: '/study-case-t1/:id',
        name: 'study-case-t1',
        component: () => import(/* webpackChunkName: "Study Case" */ '../views/StudyCaseView/StudyCaseTemplate1/StudyCaseTemplate1.vue')
      },
      {
        path: '/study-case-t2/:id',
        name: 'study-case-t2',
        component: () => import(/* webpackChunkName: "Study Case" */ '../views/StudyCaseView/StudyCaseTemplate2/StudyCaseTemplate2.vue')
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
