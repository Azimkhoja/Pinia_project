import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'home',
      component: () => import('@/views/Products/ProductView.vue'),
      children: [
        {
          path: '/product/add',
          name: 'ProductAddView',
          component: () => import('@/views/Products/ProductAddView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: () => import('@/views/Products/AddProduct.vue')
    }
  ]
})

export default router
