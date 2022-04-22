var desafio = new Vue({
  el: "#desafio",
  data: {
    zed:[
      dano = 50,
      skill="Sombra vida"
    ],
    name: "Danilo Gozzi Algaranaz dos Santos",
    age: 27,
    description: "Web Developer Pleno",
    link: "https://www.combocaster.pt/wp-content/uploads/2012/12/maxresdefault-1.jpg"
  },
  methods:{
    sorteio: function(){
      return parseFloat(Math.random(0,1))
    }
  }
})
