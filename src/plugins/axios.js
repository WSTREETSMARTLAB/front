import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:80', // change to .env
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    install: (app) => {
        app.config.globalProperties.$axios = apiClient; // Доступ через this.$axios
        app.provide('axios', apiClient); // Доступ через inject('axios')
    }
};
