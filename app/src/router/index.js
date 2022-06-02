//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Vue from 'vue'
//引入组件
// import About from '@/component/About'
// import Home from '@/component/Home'
Vue.use(VueRouter)
//创建并暴露一个路由器
// export default new VueRouter({
//     routes:[
//         {
//             path:'/home',
//             component:Home
//          },
        
//     ]
// })
const routes =[
    {
        path:'/',
        name:'Main',
        component:()=>import('../views/Main.vue'),
        redirect:'/home',
        children:[
            // {
            //     path:'/home',
            //     name:'home',
            //     component:()=>import('../views/home')
            // }, {
            //     path:'/user',
            //     name:'user',
            //     component:()=>import('../views/user')
            // }, {
            //     path:'/mall',
            //     name:'mall',
            //     component:()=>import('../views/mall')
            // }, {
            //     path:'/page1',
            //     name:'page1',
            //     component:()=>import('../views/other/PageOne')
            // }, {
            //     path:'/page2',
            //     name:'page2',
            //     component:()=>import('../views/other/PageTwo')
            // }

        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/login/login.vue')
    }

]

const router = new VueRouter({
    mode:'history',
    routes
})


 



export default router

