import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
import '@/assets/rem.js'
import { Swipe, SwipeItem ,Grid, GridItem,NavBar ,Tabbar, TabbarItem  } from 'vant';


createApp(App).use(Swipe).use(Grid).use(GridItem).use(NavBar).use(SwipeItem).use(Tabbar).use(TabbarItem).use(store).use(router).mount('#app')
