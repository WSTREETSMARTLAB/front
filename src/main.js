import { createApp } from 'vue'
import App from '@/app/App.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'
import '@/app/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app')
