<template>
  <div>
    <button @click="changeSkinAction">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
export default {
  data () {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created () {},

  methods: {
    ...mapActions(['skins/changeSkinAction']),
    changeSkinAction(){
      this['skins/changeSkinAction']()
    }
  }
}
</script>

<style scoped></style>
