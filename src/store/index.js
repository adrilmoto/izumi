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
  },
  mutations: {
  },
  actions: {
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
