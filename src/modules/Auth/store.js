import manager from "./manager.js";

export default {
    state: {
        username: '',
        email: '',
        token: '',
        message: '',
        error: ''
    },
    mutations: {
        setCredentials(state, credentials) {
            state.username = credentials.username;
            state.email = credentials.email
        },
        setToken(state, token){
            state.token = token;
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
            return manager.register(payload)
                .then((res) => {
                    commit('setMessage', res.data.message);
                    commit('setError', '');
                })
                .catch((err) => {
                    const error = err?.response?.data?.error;
                    commit('setError', error);
                });
        },

    },
    getters: {
        getEmail: state => state.email,
        getToken: state => state.token,
        getMessage: state => state.message,
        getError: state => state.error
    }
}
