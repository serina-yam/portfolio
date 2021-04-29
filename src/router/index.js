import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from './views/Home.vue'
import Skills from './views/Skills.vue'
import Career from './views/Career.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/Contact.vue'


Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Career',
      name: 'Career',
      component: Career
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
