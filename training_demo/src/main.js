import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
import '@/assets/rem.js'
import { Swipe, SwipeItem ,Grid, GridItem,NavBar ,Tabbar, TabbarItem ,DropdownMenu, DropdownItem,Field, CellGroup,Button,Form,Sidebar, SidebarItem  } from 'vant';


createApp(App).use(Swipe).use(Grid).use(GridItem).use(NavBar).use(SwipeItem).use(Tabbar).use(TabbarItem).use(DropdownMenu).use(DropdownItem).use(Field).use(CellGroup).use(Button).use(Form).use(Sidebar).use(SidebarItem).use(store).use(router).mount('#app')
