import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ms-studio',
      name: 'ms-studio',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/oferta',
      name: 'oferta',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OfferView.vue'),
    },
    {
      path: '/dla-firm',
      name: 'dla-firm',
      component: () => import('../views/OfferCompaniesView.vue'),
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/sound-delivery',
      name: 'sound-delivery',
      component: () => import('../views/SoundDeliveryView.vue'),
    },
  ],
})

export default router
