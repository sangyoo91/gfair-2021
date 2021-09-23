import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/companies/:categoryName?',
    name: 'Companies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "companies" */ '../views/Companies.vue')
  },
  {
    path: '/apply-now',
    name: 'ApplyNow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "companies" */ '../views/ApplyNow.vue')
  },
  {
    path: '/company/:companyId',
    name: 'Company',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "companies" */ '../views/Company.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
