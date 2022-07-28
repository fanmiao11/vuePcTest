import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'
// 自动化存储插件
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // vuex里面的全局模块 可以访问到子模块的内容
  state: {
    count:10000101,
    username:'huchun',
  },
  mutations: {
    // 如何拿到state: mutations内部所有的函数，第一个形参都是state
    addCount: function (state,payload){
      // state.count++
      state.count+=payload
      // setTimeout(() => {
      //   state.count += payload
      // },1000)
    },
    // esc语法 省略key 直接在对象里写函数
    delCount(state,payload){
      state.count-=payload
    }
  },
  // mutations 处理同步修改
  // actions 处理异步修改
  actions: {
    // 只能处理异步 不能修改state数据
    // actions内部所有方法的第一个形参都是context
    // 对象:commit方法 dispatch方法...
    // asyncAddCount(context){
    //   setTimeout(()=>{
    //     // console.log('提交mutations');
    //     context.commit('addCount',10)
    // },3000)
    // }
    // 如果参数是一个对象，可以解构出来
    asyncAddCount({commit}){
      setTimeout(()=>{
        // console.log('提交mutations');
        commit('addCount',10)
    },3000)
    }
  },
  // 派生数据 根据某一个数据生成另外一个数据
  // 根据state里面的数据生成新的数据
  getters:{
    // formatCount 生成之后的数据
    formatCount(state){
      return state.count/10000+'万'
    },
    // 只创建一个快捷访问方式  调用时可以使用$store.getters.token
    token(state){
      return state.user.token
    },
    title(state){
      return state.setting.title
    }

  },
  // 进行模块划分
  modules: {
    // 模块里的东西默认在全局 可以启用命名空间 namespaced:true  方法独立不再是全局的
    user,
    setting,
  },

  // 第六个属性 插件
  plugins:[createVuexPersisted({
    reducer(state){
      return {
        // 只把state里面的setting模块存储
        // setting:state.setting,
        title:state.setting.title,
        title:222,
        aa:111
      }
    }
  })]



})
