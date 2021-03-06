import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://api-eu-central-1.graphcms.com/v2/ckvb5t6jj01sp01z03vdbb5wf/master'

// import { TweenMax, TweenLite, TimelineMax, gsap } from 'gsap'
// import '@/assets/styles.css'

Vue.config.productionTip = false
Vue.prototype.$wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
Vue.prototype.$log = function (...args) {
  console.log(`[${this.$options.name}] `, ...args)
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
