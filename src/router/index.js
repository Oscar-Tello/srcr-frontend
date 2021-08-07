import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Inicio_sesion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/inicio',
    name: 'InicioRestaurante',
    component: Home
  },
  {
    path: '/restaurantes',
    name: 'vistaRestaurante',
    component: () => import('../views/Restaurant/VistaRestaurante.vue')
  },
  {
    path: '/restaurantes/agregar',
    name: 'AgregarRestaurante',
    component: () => import('../views/Restaurant/AgregarRestaurante.vue')
  },
  {
    path: '/restaurantes/modificar',
    name: 'ModificarRestaurante',
    component: () => import('../views/Restaurant/ModificarRestaurante.vue')
  },
  {
    path: '/platillos',
    name: 'vistaPlatillos',
    component: () => import('../views/Platillos/VistaPlatillo.vue')
  },
  {
    path: '/platillos/agregar',
    name: 'AgregarPlatillo',
    component: () => import('../views/Platillos/AgregarPlatillo.vue')
  },
  {
    path: '/Platillos/modificar',
    name: 'ModificarPlatillo',
    component: () => import('../views/Platillos/ModificarPlatillo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
