import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import One from './views/One.vue'
import Two from './views/Two.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/One',
      name:'one',
      component:One
    },
    {
      path:'/two',
      name:'two',
      component:Two
    }
  ]
})
