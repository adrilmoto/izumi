import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Layout',
    component: () => import('../layouts/PublicLayout.vue'),
    children: [
      { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue') },
      { path: '/cases', name: 'cases', component: () => import(/* webpackChunkName: "cases" */ '../pages/Cases.vue') },
      { path: '/services', name: 'services', component: () => import(/* webpackChunkName: "servises" */ '../pages/Services.vue') },
      { path: '/faces', name: 'feces', component: () => import(/* webpackChunkName: "faces" */ '../pages/Faces.vue') },
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
