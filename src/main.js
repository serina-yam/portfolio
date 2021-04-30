import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
Vue.use(router)

Vue.config.productionTip = true; // 開発中は true にしたほうがいいかも
// true の場合の方が開発者向けのメッセージがコンソールによりたくさん出るようです。

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})