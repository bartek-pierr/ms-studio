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
      path: '/klient-indywidualny',
      name: 'klient-indywidualny',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClientIndividualView.vue'),
    },
    {
      path: '/oferta-dla-firm',
      name: 'oferta-dla-firm',
      component: () => import('../views/OfferCompaniesView.vue'),
    },
    {
      path: '/o-firmie',
      name: 'o-firmie',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
