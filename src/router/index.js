import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from '@/modules/Home/route.js';

// сюда будут собираться модули
const routes = [
    ...homeRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
