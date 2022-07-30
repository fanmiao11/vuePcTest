<template>
  <div>
      <ul class="catagtory">
    <li 
    :class='{select:item.id===active}'
    v-for="item in list"
    :key="item.id"
    @click="updateActive(item.id)"
    >
    {{item.name}}
    </li>
  </ul>
  </div>
</template>

<script>
import { mapState, createNamespacedHelpers } from 'vuex'
const  { mapActions:mapCategoryActions } = createNamespacedHelpers('category')
export default {
  data () {
    return {

    }
  },

  created () {
    // this.$store.dispatch('category/getCategory')
    this.getCategory()
  },
  computed:{
    ...mapState('category',['list','active'])
  },

  methods: {
    ...mapCategoryActions(['getCategory','updateActive'])
  }
}
</script>

<style scoped>

</style>
