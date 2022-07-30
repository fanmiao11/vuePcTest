<template>
  <div id="app">
    <category></category>
    <new-list></new-list>

</div>
</template>

<script>
import Category from '@/components/Category.vue'
import NewList from '@/components/NweList.vue'
export default {
  // 选项： options API vue2.0的选项式api
  data () {
    return {

    }
  },
  components:{
    // es6的缩写语法
    Category,
    NewList,
  },

  created () {

  },

  methods: {

  }
}
</script>

<style scoped>

</style>
