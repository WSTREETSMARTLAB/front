import { createRouter, createWebHistory } from 'vue-router'
import Default from "../layouts/Default.vue";
import HomePage from "@/modules/Home/views/HelloWorld.vue"

// сюда будут собираться модули
const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {layout: Default}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
