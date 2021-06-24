import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { TweenMax, TweenLite, TimelineMax, gsap } from 'gsap'
// import '@/assets/styles.css'

Vue.config.productionTip = false

Vue.prototype.$tween = TweenMax;
Vue.prototype.$gsap = gsap;
Vue.prototype.$tweenLite = TweenLite;
Vue.prototype.$timeline = TimelineMax;

Vue.prototype.$wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
Vue.prototype.$log = function (...args) {
  console.log(`[${this.$options.name}] `, ...args)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
