<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    //PODEMOS MAPEAR UM GETTER, CHAVE VALOR
    computed: 
    mapGetters('carrinho',{
        total:'valorTotal'
    })
    //computed: mapGetters(['valorTotal]) USANDO DENTRO DO COMPONENTE USANDO O GETTER DEFINIDO
    /*computed: {
        total() {
            //acessando getters na store
            return this.$store.getters.valorTotal
        }
    }ACESSO DIRETO DO COMPONENTE AO GETTER*/
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
