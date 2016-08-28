import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router'
import app from './App'

/* eslint-disable no-new */

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true,
  linkActiveClass: 'active'
})

routerConfig(router)

router.start(app, '#app');
window.router = router;
