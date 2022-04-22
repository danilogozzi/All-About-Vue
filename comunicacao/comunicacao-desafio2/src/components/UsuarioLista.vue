<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <!--PEGANDO AS PROPRIEDADES DO PAI ELE VAI FAZER UM FOR COLOCANDO OS DADOS DENTRO DA TABELA.
                    , para cada TR vai disparar o @click setando como parametro usuario para o método do barramento
                -->
                
                <tr @click="setUsuarioSelecionado(usuario)" v-for="usuario in usuarios" :key="usuario.id">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    //RECEBENDO PROPRIEDADES PAI
    props: { usuarios: Array },
    //COMO USUÁRIO LISTA QUEM VAI DISPARAR O EVENTO, O USUARIODETALHE SERÁ NOTIFICADO PARA MOSTRAR USUÁRIO SELECIONADO
    //ESTAMOS GERANDO UM EVENTO NA LISTA QUE VAI SER ATUALIZADO EM OUTRO COMPONENTE
    methods:{
        setUsuarioSelecionado(usuario){
            barramento.setUsuarioSelecionado(usuario)
        }
    }
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
