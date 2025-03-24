import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from '@/modules/Home/route.js';
import authRoutes from '@/modules/Auth/route.js';

// сюда будут собираться модули
const routes = [
    ...homeRoutes,
    ...authRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
