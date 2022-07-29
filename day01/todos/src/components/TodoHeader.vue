<template>
  <header class="header">
    <h1 :style="{color}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="name"
      @keyup.enter="addToDoList(name)"
    />
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    ...mapActions(['todos/addToDoListAction']),
    addToDoList(name) {
      if(name===''){
        return alert('输入不能为空')
      }
      this['todos/addToDoListAction'](name)
      this.name=''
    },
  },
  computed:{
    ...mapState('skins',['color'])
  }
}
</script>
