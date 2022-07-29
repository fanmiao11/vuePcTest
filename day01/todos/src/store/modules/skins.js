export default {
  namespaced: true,
  state: {
    color: '#b83f45',
    colorArray: ['#b83f45', 'black', 'green', 'skyblue', 'pink']
  },
  mutations: {
    changeSkin(state) {
      // 在颜色数组中随机取颜色
      //   state.color =state.colorArray[Math.floor(Math.random() * state.colorArray.length)]
      //  让颜色在数组中循环切换
      try {
        state.colorArray.forEach((item, index) => {
          console.log(item, index)
          if (state.color === item) {
            console.log(index)
            if (index === state.colorArray.length - 1) {
              state.color = state.colorArray[0]
              throw new Error()
            } else {
              state.color = state.colorArray[index + 1]
              throw new Error()
            }
          }
        })
      } catch (e) {}
      // 用rab的形式随机生成一个颜色
      //   state.color = `rgb(${Math.floor(Math.random() * 256)},${Math.random() * 256},${Math.random() * 256})`
    }
  },
  actions: {
    changeSkinAction({ commit }) {
      commit('changeSkin')
    }
  },
  getters: {}
}
