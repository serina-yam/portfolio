import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '@/components/Home'
import Skill from '@/components/Skill'
import Career from '@/components/Career'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
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
    }
  ]
})
