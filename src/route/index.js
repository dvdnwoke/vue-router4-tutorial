import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Profile from '../pages/Profile.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: Home, name: 'home', alias: '/home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/profile/:username', component: Profile, name: 'profile' }
  ]
})

export default router