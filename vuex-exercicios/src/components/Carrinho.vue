<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    //EMBORA PROPRIEDADE COMPUTADADA SEJA UM METODO, ELA É PASSADA COMO UM ATRIBUTO
    computed: {
        //MAPEANDO GETTERS COM SPREAD PQ HÁ OUTRAS PROPRIEDADES COMPUTADA
        ...mapGetters('carrinho',{
            total:'valorTotal'
        }),
        /*total() {
            return this.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },*/
        //CASESENSITIVY
        produtos(){
            //IMPORTANDO DADOS DO STATE(STATE É COMO SE FOSSE UM DATE MAS COM OS DADOS CENTRALIZADOS E DISTRIBUIDOS PARA TODOS OS COMPONENTES)
            return this.$store.state.carrinho.produtos
        }
    }
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

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
