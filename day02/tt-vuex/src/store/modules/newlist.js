import axios from 'axios'
export default{
    namespaced: true,
    state: {
        list:[]
    },
    mutations: {
        updateList (state,payload) {
            state.list = payload
        }
        
    },
    actions: {
       async getList(context,payload){
            const res = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${payload}&timestamp=${Date.now()}&with_top=1`)
            context.commit('updateList',res.data.data.results)
        }
        
    },
    getters: {
        
    }
}