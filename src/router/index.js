import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/PublicLayout.vue'),
    children: [
      { path: '/', name: 'ИНТРО', component: () => import(/* webpackChunkName: "about" */ '../pages/Gif.vue') },
      { path: '/about', name: 'О НАС', component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue') },
      { path: '/cases', name: 'КЕЙСЫ', component: () => import(/* webpackChunkName: "cases" */ '../pages/Cases.vue') },
      { path: '/services', name: 'УСЛУГИ', component: () => import(/* webpackChunkName: "servises" */ '../pages/Services.vue') },
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
