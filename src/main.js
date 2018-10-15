import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import api from './mock/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import './fonts/iconfont.css'

Vue.prototype.$http= axios
Vue.prototype.api= api
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
