import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//COMPONENTES
import Bar from './components/Bar.vue'
import Nav from './components/Nav.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'


Vue.config.productionTip = false

//ADD COMPONENTE EM APP
Vue.component('Bar', Bar)
Vue.component('Nav', Nav)
Vue.component('Content', Content)
Vue.component('Footer', Footer)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
