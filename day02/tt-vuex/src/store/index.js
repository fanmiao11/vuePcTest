import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import newlist from './modules/newlist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category,
    newlist,
  }
})
