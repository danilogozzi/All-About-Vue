<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr/>
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">
      Mostrar Mensagem
    </b-button>
    <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <!--TYPE="ANIMATION DA PRIORIDADE PARA O TIPO"-->
    <!--MUDANDO APARIÇÃO ABRUPITA DA ANIMAÇÃO/TRANSIÇÃO -> APPEAR (APLICA A ANIMAÇÃO NO MOMENTO QUE A APLICAÇÃO FOR CARREGADA).-->
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <hr />
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <!--VALORES PODE SER FEITO BIND PARA LIGAR NA APLICAÇÃO E SER DINÂMICO-->
    <!--FAZER COM QUE UM ELEMENTO ENTRE E O OUTRO SAIA out-in-->
    <transition :name="tipoAnimacao" mode="out-in">
      <!--PARA QUE O VUE CONSIGA TRANSICIONAR ENTRE ELEMENTOS PRECISAMOS DE UMA CHAVE UNÍCA -> KEY -->
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>

    <hr />
    <button @click="exibir2 = !exibir2">Alternar</button>
    <!--METODOS DE CICLO DE VIDA-->
    <!--CASO A SUA ANIMAÇÃO USE SÓ JAVASCRIPT É ACONCELHAVEL USAR :CSS=FALSE PARA GARANTIR QUE NÃO TENHA INTERFERENCIA CSS-->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <hr />
    <div class="mb-4">
      <b-button
        variant="primary"
        @click="componenteSelecionado = 'AlertaInfo'"
        class="mr-2"
        >Info</b-button
      >
      <b-button
        variant="primary"
        @click="componenteSelecionado = 'AlertaAdvertencia'"
        >Advertencia</b-button
      >
    </div>
	<!--PRECISAMOS DO MODE OUT-IN PARA ESPERAR UM ELEMENTO SAIR PARA O OUTRO ENTRAR-->
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>

    <hr>

    <b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
    <!--POR PADRÃO A TRANSITION-GROUP VEM DENTRO DE UM SPAN, PARA MUDAR USAR TAG="DIV"-->
    <transition-group name="slide" tag="div">
    <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(i)">{{aluno}}</b-list-group-item>
    </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";

export default {
  components: {
    AlertaAdvertencia,
    AlertaInfo,
  },
  data() {
    return {
      alunos:['Roberto', 'Julia', 'Teresa', 'Paulo'],
      msg: "Uma mensagem de informação para o usuário!",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0,
      //PARA SABER QUAL COMPONENTE ESTA SELECIONADO
      componenteSelecionado: "AlertaInfo",
    };
  },
  methods: {
    adicionarAluno(){
      const s = Math.random().toString(36).substring(2)
      this.alunos.push(s)
    },
    removerAluno(indice){
      this.alunos.splice(indice, 1)
    },
    beforeEnter(el) {
      //console.log("beforeEnter");
      //AQUI PRECISAMOS GARANTIR QUE LARGURABASE SEJA 0
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    //PRECISAMOS DO DONE PARA FALAR PARA O VUE QUE A ANIMAÇÃO FOI FEITA
    enter(el, done) {
      /*console.log('enter')
			done()*/
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + rodada * 10;
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled() {
      console.log("enterCancelled");
    },
    //-------------------------
    beforeLeave(el) {
      /*console.log("beforeLeave");*/
      //PELO FALO DO MOMENTO EM QUE LEAVE É CHAMADO A LARGURABASE É IGUAL 0, ENTÃO ACABA DIMINUINDO PARA UM VALOR NEGATIVO
      //PRECISAMOS GARANTIR QUE A LARGURA BASE TENHA O VALOR DE 300
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    //PRECISAMOS DO DONE PARA FALAR PARA O VUE QUE A ANIMAÇÃO FOI FEITA
    leave(el, done) {
      /*console.log('leave')
			done()*/
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase - rodada * 10;
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled() {
      console.log("leaveCancelled");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
.fade-enter,
.fade-lave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}
.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-leave-active {
  position: absolute;
  widows: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-move{
  transition:transform 1s;
}
</style>
