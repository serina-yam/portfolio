import Vue from 'vue'
import App from './App.vue'

import router from './router'
Vue.use(router)

import vuetify from './plugins/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faFileCode, faDatabase, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faJsSquare, faFileCode, faDatabase, faSitemap)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = true; // 開発中は true にしたほうがいいかも
// true の場合の方が開発者向けのメッセージがコンソールによりたくさん出るようです。

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})