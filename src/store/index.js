import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const caseFragment = `
id
img {
  url
}
caseCategory {
  id
  name
}
media {
  url
}
guide {
  url
}
name
description {
  markdown
  html
}
caseLinks {
  id type url
}
`

export default new Vuex.Store({
  state: {
    metaAbout: null,
    openedBrif: false,
  },
  mutations: {
    SET_STATE: (state, [key, val]) => {
      state[key] = val
    },
    OPEN_BRIF: (state, val) => {
      state.openedBrif = val
    }
  },
  actions: {
    openBrif({commit, state}, val) {
      console.log('ACTION START', val, state.openedBrif)
      commit('OPEN_BRIF', val)
      console.log('ACTION END', state.openedBrif)
    },
    async metaAboutGet ({commit}) {
      console.log('metaAboutGet :start')
      const { data: { data: { metaAbouts } } } = await axios.post('', {
        query: `
          query {
            metaAbouts {
              id
              title
              subtitle
              bullets
              title_values
              values
              link_email
              link_telegram
              link_instagram
            }
          }
        `
      })
      console.log('metaAboutGet :done', metaAbouts)
      // return metaAbouts[0] || null
      commit('SET_STATE', ['metaAbout', metaAbouts[0] || null])
    },
    async servicesGet () {
      console.log('servicesGet')
      const { data: { data: { services } } } = await axios.post('', {
        query: `
          query {
            services {
              id
              title
              subtitle {
                markdown
                html
              }
              bullets
              bgcolor { hex }
              accent { hex }
              textcolor { hex }
              buttonbg { hex }
              buttontext { hex }
            }
          }
        `
      })
      return services
    },
    async categoriesGet () {
      console.log('categoriesGet :start')
      const { data: { data: { caseCategories } } } = await axios.post('', {
        query: `
          query {
            caseCategories(orderBy: order_ASC) {
              id
              name
            }
          }
        `
      })
      console.log('categoriesGet :caseCategories', caseCategories)
      return caseCategories
    },
    async casesGet () {
      console.log('casesGet :start')
      const { data: { data: { cases } } } = await axios.post('', {
        query: `
          query {
            cases {
              ${caseFragment}
            }
          }
        `
      })
      // console.log('casesGet :done', cases)
      return cases
    },
    async caseGet ({ dispatch }, id) {
      console.log('caseGet :start', id)
      if (!id) return null
      const { data: { data: { cases } } } = await axios.post('', {
        query: `
          query {
            cases (where: {id: "${id}"}) {
              ${caseFragment}
            }
          }
        `
      })
      // console.log('caseGet done', cases)
      return cases[0] || null
    }
  }
})
