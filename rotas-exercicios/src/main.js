import './style.css'
import Vue from 'vue'
import App from './App.vue'
//REGISTRO PARA ENCONTRAR O BUILD DO ROUTER
import router from './router'

Vue.config.productionTip = false

new Vue({
  //REGISTRANDO A BUILD DO ROUTER DENTRO DA INSTANCIA DO VUE
  router,//SINTAXE NOVA DO ECMASCRIPT router:router
  render: h => h(App),
}).$mount('#app')
