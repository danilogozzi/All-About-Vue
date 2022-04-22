import Vue from 'vue'
import App from './App.vue'
//IMPORTANDO COMPONENTE PARA MAIN DE FORMA GLOBAL
import Contadores from './Contadores.vue'

Vue.config.productionTip = false
//IMPORTANDO A MAIN PARA APP PRINCÍPAL
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
