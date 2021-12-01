import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Main, Characters, Locations, Episods, Favorites, NotFound } from '@/views'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: 'characters',
        name: 'characters',
        component: Characters
      },
      {
        path: 'locations',
        name: 'locations',
        component: Locations
      },
      {
        path: 'Episods',
        name: 'Episods',
        component: Episods
      }
    ]
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
