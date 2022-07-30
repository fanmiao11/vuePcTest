import Vue from 'vue'
import App from './App.vue'
// import store from './store'

import fUi from './components/index'
Vue.use(fUi)

// import fButton from './components/Button'
// Vue.use(() => {
//   Vue.component('f-button', fButton)
//   console.log(11111111);
// })

Vue.config.productionTip = false

new Vue({
  // store,
  render: (h) => h(App)
}).$mount('#app')
