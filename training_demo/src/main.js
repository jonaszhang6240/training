import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
import '@/assets/rem.js'
import { Swipe, SwipeItem ,Grid, GridItem  } from 'vant';


createApp(App).use(Swipe).use(Grid).use(GridItem).use(SwipeItem).use(store).use(router).mount('#app')
