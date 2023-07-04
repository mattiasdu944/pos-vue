import { createRouter, createWebHistory } from 'vue-router'

import ShopView from "@/views/ShopView.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShopView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => AdminLayout,
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('@/views/admin/products/ProductsView.vue')
        },
        {
          path: 'products/new',
          name: 'new-product',
          component: () => import('@/views/admin/products/NewProductView.vue')
        },
        {
          path: 'sales',
          name: 'sales',
          component: () => import('@/views/admin/sales/SalesView.vue')
        },
      ]
    },
  ]
})

export default router
