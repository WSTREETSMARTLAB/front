import axios from "../../plugins/axios.js";

const URL = '/api/v1/auth'

export default {
    register (payload) {
        return axios.post(`${URL}/register`, payload);
    },
    login(payload) {
        return axios.post(`${URL}/login`, payload)
    },
    verify(payload) {
        return axios.post(`${URL}/verify`, payload)
    },
    resendCode(email) {
        return axios.get(`${URL}/resend-email-verification?email=` + email)
    },
    logout() {
        return axios.get(`${URL}/logout`);
    }
}
