<template>
  <div>

    {{this.$store.state.count}}
    {{count}}
    {{username}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
// 1.本质： 是一个函数
// 2.作用：将vuex中的数据映射为计算属性
// 3.mapState(['count']) 将vuex中的count数据变成了计算属性 并且返回值是一个对象

export default {
  data () {
    return {

    }
  },
  // 这样可以写，但是无法定义本组件计算属性
  // computed:    mapState(['count']),
  computed:{
    ...mapState(['count','username']),
    // 即有vuex映射的计算属性
    // 也有自己组件的计算属性
    // count(){
    //   return this.$store.state.count
    // }

  },
  

  created () {

  },

  methods: {

  }
}
</script>

<style scoped>

</style>
