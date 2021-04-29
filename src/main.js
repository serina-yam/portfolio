import Vue from 'vue'
import App from './App.vue'

// vue.js
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false

import router from './router'
Vue.use(router)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})