import Vue from 'vue'
//import App from './App.vue'
import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './paginas/Home.vue'
const Contato = {template: '<p>Pagina de Contato</p>'}
const semPagina = {template: '<p>Pagina não encontrada</p>'}

Vue.use(VueResource)

const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
