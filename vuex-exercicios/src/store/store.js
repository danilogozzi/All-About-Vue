import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//IMPORTANDO GETTERS
import * as getters from './getters'

//IMPORTANDO MÓDULOS
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

export default new Vuex.Store({
    state:{
        nome:'Danilo',
        sobrenome:'Gozzi'
    },
    getters,
 modules:{carrinho, parametros}
})