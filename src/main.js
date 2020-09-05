import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.css'
import 'amfe-flexible'
import {Swipe,SwipeItem,Grid,GridItem,Tag,Image as VanImage,List} from 'vant'

const app = createApp(App).use(router).use(store)
app.use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Tag).use(VanImage).use(List)
app.mount('#app')
