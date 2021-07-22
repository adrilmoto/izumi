import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: {
      id: '',
      color: ''
    }
  },
  mutations: {
    COLOR_SET: (state, payload) => {
      state.page.id = payload.id
      state.page.color = payload.color
    }
  },
  actions: {
    setColor({ commit }, path) {
      let page = {
        id: 0,
        color: ''
      }
      if (path === '/') { 
        page.id = 0
        page.color = '#6362A0'
      }
      if (path === '/about') {
        page.id = 1
        page.color = '#EABE44'
      }
      if (path === '/cases') {
        page.id = 2
        page.color = '#CE5236'
      }
      if (path === '/services') {
        page.id = 3
        page.color = '#52427A'
      }
      commit('COLOR_SET', page)
    }
  },
  modules: {
  }
})
