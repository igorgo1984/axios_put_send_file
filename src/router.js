import Vue from 'vue'
import Router from 'vue-router'
import Dash from './views/Dash'
import {
  dash
} from './constants/routePaths'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: dash,
      name: 'dash',
      component: Dash,
      meta: { requiresAuth: false }
    },
  ]
})
