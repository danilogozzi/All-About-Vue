//CRIANDO COMUNICAÇÃO VIA BARRAMENTO
//ACHO QUE A IDEIA É DE UM MIDDLEWARE
import Vue from 'vue'
export default new Vue({
    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    },
    data(){
        return{

        }
    }
})
