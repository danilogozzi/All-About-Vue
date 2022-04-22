<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <!--USANDO `` PARA PASSAR OS PARAMETROS / PODE SE USAR AINDA ${$ROUTE.PARAMS.ID}-->
    <!--`/usuario/${id}/editar`-->
    <!--PASSANDO PARAMETRO NA ROTA-->
    <!--ADD A ROTA PASSADA POR HASH NO BOTÃO(PARA QUE FUNCIONE O ROLANDO PARA O COMPONENTE COM O HASH PRECISANDO DE UMA FUNCTION CHAMADA SCROLLBEHAVOR)-->
    <router-link tag="button" primario :to="{name: 'editarUsuario', params:{id},
    query:{ completo:true, lingua:'pt'},hash:'#rodape'}">Editar</router-link>
  </div>
</template>

<script>
export default {
  //PEGANDO A PROPRIEDADE ID PARA O PARAMETRO DA ROTA
  props: ["id"], //RESOLVENDO O PROBLEMA COM ECMASCRIPT SEM WTACH E DATA
  /*APESAR DE ASSIM FUNCIONAR, EXISTE OUTRA MANEIRA DE CUIDAR DOS PARAMETROS DAS ROTAS
  //PRECISAMOS MONITRAR A MUDANÇA NAS ROTAS//WATCH -> MONITORA AS COISAS
  watch:{
    //(rota que está indo, qual rota veio)
    $route(to, from){
      this.id = to.params.id
    }
  },
  data(){
    return{
      //$ REPRESENTA VARIÁVEL CRIADA GLOBALMENTE/RESERVADA
      id:this.$route.params.id
    }
  },*/
  //METODOS DE CICLO DE VIDA SÃO COLOCADOS DIRETO NA INSTÂNCIA
  //ANTES DA ROTA CRIANR, ESPECÍFICAMENTE NESSE COMPONENTE
  //AQUI O COMPONENTE AINDA NÃO FOI CRIADO
  beforeRouteEnter(to, from, next){
    console.log('dentro do componente -> usuário detalhe')
    next()
  }
};
</script>

<style>
</style>