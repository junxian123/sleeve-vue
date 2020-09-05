import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Detail from '../views/detail.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
