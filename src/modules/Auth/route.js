import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Verify from "./views/Verify.vue";
import Success from "./views/Success.vue";

export default [
    {
        path: '/login',
        component: Login,
        meta: { layout: 'auth' }
    },
    {
        path: '/register',
        component: Register,
        meta: { layout: 'auth' }
    },
    {
        path: '/verify',
        component: Verify,
        meta: { layout: 'auth' }
    },
    {
        path: '/register_success',
        component: Success,
        meta: { layout: 'auth' }
    }
]
