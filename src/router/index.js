import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import NotFound from "../views/NotFound.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ghibli-vuepage/home',
      redirect: '/'
    },
    {
      path: '/ghibli-vuepage/',
      component: HomeView
    },
    {
      path: '/ghibli-vuepage/detail/:id',
      component: DetailView
    },
    {
      path: "/ghibli-vuepage/404",
      name: "notFound",
      component: NotFound,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/ghibli-vuepage/404",
    }
  ]
});

export default router;