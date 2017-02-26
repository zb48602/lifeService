import Vue from 'vue'
import App from './App.vue'
import Detail from './views/detail.vue'
import VueRouter from 'vue-router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Header,Button,Search, Cell,Toast,Navbar,TabItem,TabContainer, TabContainerItem,IndexList, IndexSection} from 'mint-ui'

Vue.config.debug = true 

Vue.use(MintUI)

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);
Vue.component(Toast.name, Toast);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);


Vue.use(VueRouter);

//然后实例化一个router
var viewPath = './views/'; //component src
const routers = [
    { path: '/', component: require(viewPath + 'home.vue') },
    { path: '/cityList', component: require(viewPath + 'cityList.vue') },
    { path: '/detail', component: Detail }
];
var router = new VueRouter({
    routes: routers
});


new Vue({
    el: '#app',
    router: router,
    render: function(h) {
        return h(App);
    }
}).$mount('#app');
