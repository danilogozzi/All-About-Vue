<template>
  <div class="home">
   <div id="calculadora">
     <Botoes/>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Botoes from '../components/Botoes.vue'

export default {
  name: "Home",
  components: {Botoes},
};
</script>
<style>

</style>