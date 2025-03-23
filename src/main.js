import { createApp } from 'vue'
import './style.css'
import App from '@/app/App.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'

createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app')
