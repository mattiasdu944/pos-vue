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
    },
  ]
})

export default router
