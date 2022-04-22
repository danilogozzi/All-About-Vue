//IMPORTANDO VUE
import Vue from 'vue'

//EXPORTANDO INSTANCIA DO VUE PARA SER COMPARTILHADA NOS COMPONENTES
export default new Vue({
    methods:{
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },
        //AQUI FICA ESCUTANDO SEMPRE QUE UM EVENTO DO TIPO usuarioSelecionado
        onUsuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)
        }
    }
})
