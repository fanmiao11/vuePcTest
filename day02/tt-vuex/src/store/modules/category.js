import axios from 'axios'
export default{
    namespaced: true,
    state: {
        list:[],
        active:0,

    },
    mutations: {
        // 更新list数据的方法
        updateList(state,payload){
            state.list = payload
        },
        updateActive(state,payload){
            state.active = payload
        }
        
    },
    actions: {
       async getCategory(context){
            // context  上下文 环境
            const{data:{data:{channels}}} = await axios.get('http://toutiao.itheima.net/v1_0/channels')
            context.commit('updateList',channels)
        },
        updateActive({commit},payload){
            commit('updateActive',payload)
        }
    },
    getters: {
        
    }
}