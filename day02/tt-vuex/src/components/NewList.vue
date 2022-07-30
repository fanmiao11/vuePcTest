<template>
  <div>
    <div class="list">
      <div class="article_item" v-for="item in $store.state.newlist.list" :key="item.art_id">
        <h3 class="van-ellipsis">{{item.title}}</h3>
        <div class="img_box">
          <img src="@/assets/back.jpg"
              class="w100" />
        </div>
        <!---->
        <div class="info_box">
          <span>13552285417</span>
          <span>0评论</span>
          <span>2018-11-29T17:02:09</span>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const  {mapState:mapCategoryState } = createNamespacedHelpers('category')
export default {
  data () {
    return {

    }
  },

  created () {

  },
  computed:{
    ...mapCategoryState(['active','list'])

  },
    // watch 可以监视什么数据？
  //  data computed props 路由 $route
  watch:{
    active:{
      handler(){
        this.$store.dispatch('newlist/getList',this.active)
      },
    immediate:true,
    },
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
