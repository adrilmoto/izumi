import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createClient } from '@supabase/supabase-js'
// import { TweenMax, TweenLite, TimelineMax, gsap } from 'gsap'
// import '@/assets/styles.css'

Vue.config.productionTip = false
Vue.prototype.$supabase = createClient("https://zciaztuesdhslzgfxcov.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzA1NTA0MiwiZXhwIjoxOTQ4NjMxMDQyfQ.cEZiMR7sICCwXN40d7rdeSbj5NGH_9XWxkKNkDwjF3Y")
Vue.prototype.$wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
Vue.prototype.$log = function (...args) {
  console.log(`[${this.$options.name}] `, ...args)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
