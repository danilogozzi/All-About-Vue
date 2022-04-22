import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    counter:0
  },
  mutations: {
    decrement: state => state.counter--,
    //increment: (state, num) => state.counter += num * 3
    increment: state => state.counter++
  },
  actions: {
    //CONTEXT -> ({COMMIT})
    decrement: ({commit}) => commit('decrement'),
    //increment: ({commit}) => commit('increment', 5)//QUANDO RECEBEMOS UMA RESPOSTA DA API
    increment: ({commit}) => commit('increment')
  },
  getters:{
    counter: state => state.counter
  },
  modules: {
   
  }
})
