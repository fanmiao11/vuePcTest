import Vue from 'vue'
import App from './App.vue'
// 封装element插件
import './plugins/element'


// 全局引入element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 按需引入
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);

// 引入部分组件
// import { Button } from 'element-ui';
// Vue.component(Button.name, Button);
// Vue.use(Button)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
