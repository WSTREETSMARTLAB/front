import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axiosPlugin from './plugins/axios';
import vuetify from './plugins/vuetify';

createApp(App)
    .use(store)
    .use(router)
    .use(axiosPlugin)
    .use(vuetify)
    .mount('#app');
