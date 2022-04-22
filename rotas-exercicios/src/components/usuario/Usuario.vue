<template>
  <div class="usuario">
      <h2>Usuários</h2>
      <hr>
      <router-view/>
      <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods:{
    irParaInicio(){
      //this.$router.push('/')//PASSA O PATH QUE IRA NAVEGAR PARA O COMPONENTE
      //ALTERNATIVA PARA NAVEGAR ENTRE AS ROTAS
      this.$router.push({name:'inicio'})//PASSA O PATH QUE IRA NAVEGAR PARA O COMPONENTE
    }
  }
}
</script>

<style>

</style>