import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import skins from './modules/skins'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    // 创建一个快捷访问方式
    // todoList (state) {
    //   return state.todos.todoList
    // }
  },
  mutations: {},
  actions: {},
  modules: {
    todos,
    skins
  },
  plugins:[createVuexPersisted({
    reducer(state){
      return{
        todos:state.todos,
        skins:state.skins
      }
    }
  })]

})
