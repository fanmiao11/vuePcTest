export default{
    namespaced: true,
    state:{
        title:'标题'
      },
      mutations:{
        updateTitle(state,payload){
            state.title = payload
        }
      },
      actions:{},
      getters:{},      
}