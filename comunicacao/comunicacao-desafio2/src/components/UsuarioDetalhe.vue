<!--AQUI TUDO QUEREMOS ESCUTAR UM EVENTO QUE FOI DISPARADO EM OUTRO COMPONENTE-->
<template>
    <div class="usuario-detalhe">
        <!--TESTANDO PARA VER SE HÁ PU NÃO USUÁRIO SELECIONADO-->
        <h2 v-if="!usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuario.id }}</h2>
            <h2>Nome: {{ usuario.nome }}</h2>
            <h2>Idade: {{ usuario.idade }}</h2>
        </div>
    </div>
</template>

<script>
//IMPORTANDO O BARRAMENTO
import barramento from '@/barramento'

export default {
    props: { usuarios: Array },
    data() {
        return {
            usuario: null
        }
    },
    //VINCULANDO A FUNÇÃO CHAMADA SEMPRE QUE O EVENTO ACONTECER, RECEBENDO UMA CALLBACK
    //PELO FATO DE  NÃO DISPARAR EVENTOS NO USUARIODETALHES, CRIAMOS UMA FUNÇÃO DE CICLO DE VIDA QUE SEMPRE SERÁ CHAMADA QUANDO ESSE COMPONENTE FOR CRIADO, PARA DAI CONSEGUIR BINDA DA FUNÇÃO QUE SERÁ CHAMADA QUANDO UM EVENTO ACONTECER
    created(){
        //EM CIMA DO USUARIOSELECIONADO VAMOS SETAR USUARIO QUE É UM DADO INTERNO DO COMPONENTE
        //PARA REFLETIR O USUARIO SELECIONADO
        barramento.onUsuarioSelecionado(usuario =>{
            this.usuario = usuario
        })
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
