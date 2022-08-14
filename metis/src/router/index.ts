import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import dashboard from '../views/dashboard/dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard,
    meta: {
      displayHeader: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: {
      displayHeader: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register.vue'),
    meta: {
      displayHeader: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const token  = localStorage.getItem('token')
  if (!token && to.name !== 'login') {
    return {name: 'login'}
  }
})

export default router
