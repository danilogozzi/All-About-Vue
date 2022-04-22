<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <!--PROPRIEDADES SÃO CASE-SENSITIVE-->
        <p>Nome do Usuário: <strong>{{inverterNome()}}</strong></p>
        <p>Idade do Usuário: <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <!--CHAMANDO PROPRIEDADES VIA CALLBACJ-->
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
//IMPORTANDO barramento
import barramento from '@/barramento'
export default {
    //IMPORTANDO PROPS DO PAI, A VÁRIAS MANEIRAS DE CRIAR OU CHAMAR AS PROPRIEDADES
    props:/*[
        'nome'
    ]*/{
        nome:{
            type:String,
            //FAZ COM QUE SEJA NECESSÁRIO O NOME PARA O FUNCIONAMENTO DO COMPONENTE
            //PARA DECLARAR UM VALOR DEFAULT PODE USAR DEFAULT
            //default: 'Anônimo -< PODE RETORNAR UMA FUNCTION COMO DEFAULT
            required:true
        },
        idade:Number
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            //PARA DISPARAR UM EVENTO COM VUE USASSE THIS.#EMIT('NOMEMUDOU')
            this.$emit('nomeMudou', this.nome)
        }
    },
    //CRIANDO METODO DE CÝCLO DE VIDA
    created(){
        barramento.quandoIdadeMudar(idade =>{
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
