import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ghibli-vuepage/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      component: DetailView
    }
  ]
});

export default router