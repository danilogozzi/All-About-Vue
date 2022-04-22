new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alert(){
            alert("Olá")
        },
        valorInput(event){
            this.valor = event.target.value
        }
    }
})