<template>
  <div>

    {{this.$store.state.count}}
    {{count}}
    {{username}}
    {{this.$store.getters.formatCount}}
    <!-- 触发mutations中的方法 通过$store.commit -->
    <button @click="$store.commit('delCount',2)">-2</button>
    <button @click="clickHandle">修改count+5</button>
    <button @click="addCount(5)"> +5 </button>
    <hr>
    <!-- actions -->
    <button @click="asyncClickHandle">异步修改count</button>
    <hr>
    调用user模块里的token：{{this.$store.state.user.token}}
    <br>
    调用setting模块里的title：{{this.$store.state.setting.title}}
    <br>
    mapGetters调用token:{{token}}
    <br>
    mapGetters调用title:{{title}}
    <hr>
    <!-- 模块中的mutations -->
    <button @click="updateTitleClick('新标题')">修改标题</button>
    <!-- <button @click="['setting/updateTitle']()">修改标题</button> -->
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters,createNamespacedHelpers} from 'vuex'
const {mapMutations:mapSettingMutations} = createNamespacedHelpers('setting')
// 1.本质： 是一个函数
// 2.作用：将vuex中的数据映射为计算属性
// 3.mapState(['count']) 将vuex中的count数据变成了计算属性 并且返回值是一个对象

// mapMutations(['addCount'])可以把mutations中的方法快速映射过来
export default {
  data () {
    return {
    }
  },
  // 这样可以写，但是无法定义本组件计算属性
  // computed:    mapState(['count']),
  computed:{
    ...mapState(['count','username']),
    ...mapGetters(['token','title'])
    // 即有vuex映射的计算属性
    // 也有自己组件的计算属性
    // count(){
    //   return this.$store.state.count
    // }

  },
  methods: {
    clickHandle(){
      this.$store.commit('addCount',5)
    },
    // 可以直接在点击方法中使用
    // ...mapMutations(['addCount','setting/updateTitle']),
    asyncClickHandle(){
      this.$store.dispatch('asyncAddCount')
    },
        ...mapSettingMutations(['updateTitle']),
    updateTitleClick(payload){
      // 启用命名空间
      // this.$store.commit('setting/updateTitle','新标题')
      // this['setting/updateTitle'](payload)
      this.updateTitle(payload)
    },



  }
}
</script>

<style scoped>

</style>
