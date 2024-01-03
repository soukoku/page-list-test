import { createRouter, createWebHistory } from 'vue-router'
import PagesView from '../views/PagesView.vue'
import IdleView from '../views/IdleView.vue'
import IdleView2 from '../views/IdleNestedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pages',
      component: PagesView
    },
    {
      path: '/idle',
      name: 'idle',
      component: IdleView
    },
    {
      path: '/idle2',
      name: 'idle2',
      component: IdleView2
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
