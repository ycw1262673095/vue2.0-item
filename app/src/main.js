import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'
//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入 
import { Button,Radio,Container,Main,Header,Aside,Menu,Submenu,MenuItem,MenuItemGroup,Dropdown
  ,DropdownMenu,DropdownItem,Row,Collapse,Card,Col,Table,TableColumn,Breadcrumb,BreadcrumbItem
  ,Tag,Form,FormItem,Input,Select,Switch,DatePicker,Option,Dialog,Pagination,MessageBox,Message} from 'element-ui';
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import store from "./store"
import http from "axios"
import './api/mock'
//关闭Vue的生产提示
Vue.config.productionTip = false
//应用ElementUI
// Vue.use(ElementUI);
// Vue.component('atguigu-button', Button);
// Vue.component('atguigu-row', Row);
// Vue.component('atguigu-date-picker', DatePicker);
// Vue.component('atguigu-dialog', Dialog);
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Collapse)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)

//使用Vuerouter
Vue.use(VueRouter)


Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
//导航守卫   也就是路由守卫
router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token =store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
      next({name:'home'})
  }else{
    next()
  }
})

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App),
  created(){
    store.commit("addMenu", router);
  }
  
})
