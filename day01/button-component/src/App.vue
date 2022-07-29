<template>
  <div id="app">
    <!--  -->
    <v-button 
    title="ButtonTitle" 
    type='warning'
    round
    disabled
    size='large'
    @click='clickFn'>
      <!-- <template #title>插槽传title</template> -->
    </v-button>
  </div>
</template>

<script>
import vButton from './components/Button.vue'

export default {
  name: 'App',
  components: {
    vButton
  },
  methods: {
    clickFn() {
      console.log('click')
    }
  }
}
</script>

<style lang="less"></style>
