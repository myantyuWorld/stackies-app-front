import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MenuView from '../views/MenuView.vue'
import MasterDataView from '../views/MasterDataView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProjectListView from '../views/ProjectListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path : '/login',
      name : 'login',
      component : LoginView
    },
    {
      path : '/menu',
      name : 'menu',
      component : MenuView
    },
    {
      path : '/master',
      name : 'master',
      component : MasterDataView
    },
    {
      path : '/register',
      name : 'register',
      component : RegisterView
    },
    {
      path : '/projects',
      name : 'projects',
      component : ProjectListView
    },
  ]
})

export default router
