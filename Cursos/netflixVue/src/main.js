import Vue from 'vue'
//import App from './App.vue'
import VueResource from 'vue-resource'

import Home from './paginas/Home.vue'
const Contato = {template: '<p>Pagina de Contato</p>'}
const semPagina = {template: '<p>Pagina não encontrada</p>'}

Vue.use(VueResource)

const rotas = {
  '/': Home,
  '/contato': Contato
}

new Vue({
  el: '#app',
  data:{
      rotaAtual: window.location.pathname
  },
  computed:{
    exibeComponente (){
      return rotas[this.rotaAtual] || semPagina
    }
  },
  render (h) { return h(this.exibeComponente)}
})
