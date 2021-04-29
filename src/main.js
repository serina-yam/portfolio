import Vue from 'vue'
import App from "./App.vue";

// vue.js
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false

import Router from './router'
Vue.use(Router)


new Vue({
  Router,
  render: h => h(App)
}).$mount('#app')