import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/PublicLayout.vue'),
    children: [
      { meta: { name: 'ИНТРО', color: '#6362A0' }, path: '/', name: 'ИНТРО', component: () => import(/* webpackChunkName: "about" */ '../pages/Gif.vue') },
      { meta: { name: 'О НАС', color: '#EABE44' }, path: '/about', name: 'О НАС', component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue') },
      { meta: { name: 'КЕЙСЫ', color: '#CE5236' }, path: '/cases', name: 'КЕЙСЫ', component: () => import(/* webpackChunkName: "cases" */ '../pages/Cases.vue') },
      { meta: { name: 'УСЛУГИ', color: '#52427A' }, path: '/services', name: 'УСЛУГИ', component: () => import(/* webpackChunkName: "servises" */ '../pages/Services.vue') },
      { meta: null, path: '/cases/:id', name: 'Case', component: () => import('../pages/Case.vue') },
      // { path: '/community', name: 'Комьюнити', component: () => import(/* webpackChunkName: "faces" */ '../pages/Community.vue') },
    ]
  },
]

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  mode: 'history',
  base: process.env.VUE_ROUTER_BASE
})

export default router
