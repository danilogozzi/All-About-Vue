import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'

//IMPORTANDO MENU
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'

//COPONENTE DE ROTAS
//import Usuario from './components/usuario/Usuario'
//import UsuarioLista from './components/usuario/UsuarioLista'
//import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
//import UsuarioEditar from './components/usuario/UsuarioEditar'

//REGISTRANDO PLUGIN DENTRO DO VUE
Vue.use(Router)

//IMPORT DINAMICO/ FUNÇÃO CALLBACK /TIRA DO BUNDLE INICIAL E AJUDA A CARREGAR APENAS O NECESSÁRIO
//Chunk coloca todos os componenente num grupo de componentes
const Usuario = () => import(/*webpackChunkName:"usuario"*/'./components/usuario/Usuario')
const UsuarioLista = () => import(/*webpackChunkName:"usuario"*/'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/*webpackChunkName:"usuario"*/'./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/*webpackChunkName:"usuario"*/'./components/usuario/UsuarioEditar')


//OBJETO DE CONFIGURAÇÃO DO VUE ROUTER
//ARMAZENANDO O ROUTER NUMA CONSTANTE
const router = new Router({
    mode:'history',//'hash(#) o history necessita de configuração no servidor'
    //FUNÇÃO PARA FUNCIONAR O DIRECIONAMENTO DE ROTA COM HASH
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        }else if(to.hash){
            return {selector: to.hash}
        }else{
            return {x:0,y:0}
        }
    },
    routes:[{
        name: 'inicio',
        path:'/',
        //component: Inicio
        components:{
            default:Inicio,
            menu:Menu
        }
    },{
        path:'/usuario',//ROTA COM PARAMETROS ->ROTA BASE USUARIOS
        //component: Usuario,
        components:{
            default:Usuario,
            menu:MenuAlt
        },
        //NOVO ESQUEMA PARA DAR PARAMETROS AS ROTAS COM ECMASCRIPT
        props:true,
        //CRIANDO PROPRIEDADE PARA ROTAS ANINHADAS
        children:[
            //ROTAS E AVISANDO QUE VAI SER PASSADO VIA PROPRIEDADES -> ECMASCRIPT
            {path:'', component:UsuarioLista,props:true},
            //BEFORE DIRETO NA ROTA ->QUANDO FOR DIRETO NA ROTA É BEFOREENTER
            {path:':id', component:UsuarioDetalhe,props:true,
            beforeEnter:(to, from, next)=>{
            console.log('antes da rota -> usuário detalhe')
            next()//NEXT PARA PERMITIR RENDERIZAR O COMPONENTE
        }},
            {path:':id/editar', component:UsuarioEditar,props:true,name:'editarUsuario'}
        ]
    },{
        path:'/redirecionar',
        //REDIRECIONAMENTO DE PÁGINA ATRÁVEZ DE UM COMPONENTE
        redirect:'/usuario'
    },{
        //GARANTINDO QUE QUALQUER COISA ESCRITA NA URL REDIRECIONE
        path:'*',
        redirect:'/'
    }]
})

//DEFININDO DE FORMA GLOBAL O BEFOREEACH(ANTES DE CADA NAVEGAÇÃO DE FORMA GLOBAL)
//QUANDO FOR DE FORMA GLOBAL É BEFOREEACH
router.beforeEach((to, from, next)=>{
    console.log('antes das rotas -> global')
    next()
})

export default router