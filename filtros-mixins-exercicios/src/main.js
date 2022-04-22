import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//NOME DO FILTRO E O PARAMETRO PASSADO PARA A FUNÇÃO
Vue.filter('inverter', function(valor){
	return valor.split('').reverse().join('')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
