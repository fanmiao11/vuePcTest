export default {
  namespaced: true,
  state: {
    todoList: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    addToDoList (state, payload) {
      // console.log(state.todoList.length);
      state.todoList.unshift({
        name: payload,
        done: false,
        id: state.todoList[0] ? state.todoList[0].id+1 : 1
      })
    },
    delToDoList (state, payload) {
      state.todoList = state.todoList.filter((item) => {
        return item.id !== payload
      })
    }
  },
  actions: {
    addToDoListAction ({commit},payload) {
      commit('addToDoList',payload)
    },
    delToDoListAction ({commit},payload) {
      commit('delToDoList',payload)
    }
  },
  getters: {}
}
