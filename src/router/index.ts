import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "Home" */ '../views/HomeView/index.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "About" */ '../views/AboutView/index.vue')
	},
  {
		path: '/study-case/:case',
		name: 'study-case',
		component: () => import(/* webpackChunkName: "Study Case" */ '../views/StudyCaseView/index.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
