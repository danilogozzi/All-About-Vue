//O STATE É LOCAL, PARA USAR STATE GLOBAL rooState
export default{
    //EVITA CONFLITO NA RAIZ DA STORE, FAZ COM QUE TODO
    namespaced:true,
    state:{
        produtos: []
    },
    //GETTERS É UMA FUNCTION QUE LE UMA INFORMAÇÃO E RETORNA ELA, SEJA A ORIGINAL OU UMA TRANSFORMAÇÃO DA MESMA
    //NO CASO CALCULANDO O TOTAL DE TODOS OS PRODUTOS QUE ESTÃO NO ESTADO CENTRAL DA APLICAÇÃO
    getters:{
       //PODEMOS CONCENTRAR O TOTAL CALCULADO EM UM GETTER 
       //ESTA RECEBENDO COMO PARAMETRO A PROPRIA STATE
       //LÓGICA CENTRALIZADA
       valorTotal(state){ 
           return state.produtos.map(p => p.quantidade * p.preco)
           .reduce((total, atual) => total + atual, 0)
       }
    },
    mutations:{
        //CRIANDO UM METODO PARA MUTATIONS, AGORA PRECISAMOS COMMITAR O METODO
        adicionarProduto(state, payload){
            state.produtos.push(payload)
        }
    },
    actions:{
        //{COMMIT} ->DESTRUCTURIN
        adicionarProduto({commit},payload){
            setTimeout(()=>{
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
    
}