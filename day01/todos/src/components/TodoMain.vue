<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
    v-for="item in todoList"
    :key="item.id"
    :class="{completed:item.done}"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.done" />
        <label>{{item.name}}</label>
        <button class="destroy" @click="delToDoListAction(item)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters , createNamespacedHelpers } from 'vuex'
const { mapActions : mapToDoActions } = createNamespacedHelpers('todos')
// console.log(mapState(['todos/todoList']));
export default {
  computed: {
    // todoList(){
    //   return this.$store.state.todos.todoList
    // },
    // ...mapGetters(['todoList']) 
    ...mapState('todos',['todoList'])
  },
  methods: {
    ...mapToDoActions(['delToDoListAction'])
  },
  created () {
    // console.log(this.todoList);
  }
}
</script>
