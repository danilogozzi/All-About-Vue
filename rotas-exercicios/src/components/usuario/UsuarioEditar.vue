<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Código:</strong> {{ id }} / {{$route.params.id}}</p>
    <p><strong>Completo:</strong> {{ $route.query.completo? 'SIM':'NÃO' }}</p>
    <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
    <!--<router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link>-->
    <hr>
    <button primario @click="confirmou = true">Confirmar</button>
    <!--FORÇANDO ATRAVÉZ DO HASH NO LINK IR PARA UM COMPONENTE DA PÁGINA-->
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data(){
    return{
      confirmou:false
    }
  },
  //INTERCEPTANDO A SAÍDA DE UM COMPONENT
  //PODE INTERCEPTAR O MOMENTO CERTO PARA SAÍDA DO COMPONENTE
  beforeRouteLeave(to, from, next){
    if(this.confirmou){
      next()
    }else{
      if(confirm('Tem certeza?')){
        next()
      }else{
        next(false)
      }
    }
  }
}
</script>

<style>
#rodape{
  margin-top: 1000px;
}
</style>