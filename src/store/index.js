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
    async casesGet () {
      console.log('casesGet start')
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
