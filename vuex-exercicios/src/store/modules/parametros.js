//O STATE É LOCAL, PARA USAR O STATE GLOBAL rooState
export default{
    state:{
        quantidade: 0,
        preco: 0
    },
    mutations:{
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    }

}