import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from '@/modules/Home/route.js';
import authRoutes from '@/modules/Auth/route.js';
import dashboardRoutes from '@/modules/Dashboard/route.js';

const routes = [
    ...homeRoutes,
    ...authRoutes,
    ...dashboardRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
