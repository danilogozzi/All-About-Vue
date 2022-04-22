<template>
  <div>
    <h1>Counter:{{counter}}</h1>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Counter',
  computed:{
    //PARA MAPEAR SE USA PROPRIEDADE COMPUTADA
    ...mapGetters([
      'counter'
    ])
  },
  methods:{
   ...mapActions([
     'decrement',
     'increment'
   ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
