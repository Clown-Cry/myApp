import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import population from './page/population.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/population',
      component: Home,
      children:[
        {
          path:'population',
          component:population,
        },
        {
          path:'Gdpage',
          component: () => import( './page/Gdpage.vue')
        },
        {
          path:'Ydpage',
          component: () => import( './page/Ydpage.vue')
        },
        {
          path:'scan',
          component: () => import( './page/scan.vue')
        },
        {
          path:'Management',
          component: () => import( './page/Management.vue')
        },
        {
          path:'monitor',
          component: () => import( './page/monitor.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import( './views/index.vue')
    },
    {
      path: '/registered',
      name: 'registered',
      component: () => import( './views/registered.vue')
    }
  ]
})
