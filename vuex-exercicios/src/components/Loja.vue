<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
//MAPEANDO MUTATIONS
//import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed:{
        quantidade(){
            return this.$store.state.parametros.quantidade
        },
        preco(){
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        //...mapMutations(['adicionarProduto']),
        //MAP CRIA UMA FUNCTION QUE DISPARA UM DISPACH
            //USANDO OPERADOR SPREAD PRA JOGAR AS MUTATIONS NO METHODS
        ...mapActions('carrinho',['adicionarProduto']),//PARA ACESSAR A ACTION CARRINHO PELO NAMESPACED
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line
            //console.log(produto)

            //DANDO PUSH DOS PRODUTOS ADICIONADOS A LISTA
            //this.$store.state.produtos.push(produto)

            //this.$store.commit('adicionarProduto', produto)
            //QUANDO FOR MAPEAR AS MUTATIONS
            //this.adicionarProduto(produto)
            this.adicionarProduto(produto)//MAPACTIONS
            //this.$store.dispatch('adicionarProduto', produto)
            console.log(this.$store.getters.getNome)//GETTER SE CHAMA COMO ATRIBUTO
            console.log(this.$store.getters.getNomeCompleto)//GETTER SE CHAMA COMO ATRIBUTO
        }
    },
    
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
