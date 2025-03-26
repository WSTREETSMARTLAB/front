import manager from "./manager.js";

export default {
    namespaced: true,
    state: {
        username: '',
        email: '',
        isAuthenticated: false,
        message: '',
        error: ''
    },
    mutations: {
        setCredentials(state, credentials) {
            state.username = credentials.username;
            state.email = credentials.email
        },
        setAuthStatus(state, status){
            state.isAuthenticated = status;
        },
        setMessage(state, message){
            state.message = message;
        },
        setError(state, error){
            state.error = error;
        }
    },
    actions: {
        register({commit}, payload) {
            commit('setLoading', true, { root: true });
            return manager.register(payload)
                .then((res) => {
                    commit('setCredentials', payload);
                    commit('setMessage', res.data.message);
                    commit('setError', '');
                    commit('setLoading', false, { root: true });
                })
                .catch((err) => {
                    const error = err?.response?.data?.error;
                    commit('setError', error);
                });
        },
        login({commit}, payload) {
            commit('setLoading', true);
            return manager.login(payload)
                .then((res) => {
                    localStorage.setItem('auth_token', res.data.data.auth_token);
                    commit('setAuthStatus', true);
                    commit('setLoading', false);
                })
                .catch((err) => {
                    const error = err?.response?.data?.error;
                    commit('setError', error);
                });
        },
        verify({commit}, payload) {
            console.log('verify')
            console.log(payload)
            commit('setLoading', true);
            return manager.verify(payload)
                .then((res) => {
                    localStorage.setItem('auth_token', res.data.data.auth_token);
                    commit('setLoading', false);
                })
                .catch((err) => {
                    const error = err?.response?.data?.error;
                    commit('setError', error);
                })
        },
        logout({commit}) {
            commit('setLoading', true);
            return manager.logout();
        }
    },
    getters: {
        getEmail: state => state.email,
        getAuthStatus: state => state.isAuthenticated,
        getMessage: state => state.message,
        getError: state => state.error
    }
}
