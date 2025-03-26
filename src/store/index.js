import { createStore } from 'vuex';
import auth from '@/modules/Auth/store';

const store = createStore({
    state: {
        loading: false,
        globalError: null,
        globalMessage: null,
    },
    mutations: {
        setLoading(state, status) {
            state.loading = status;
        },
        setGlobalError(state, error) {
            state.globalError = error;
        }
    },
    actions: {
        setLoading({ commit }, status) {
            commit('setLoading', status);
        },
        setGlobalError({ commit }, error){
            commit('setGlobalError', error);
        }
    },
    getters: {
        isLoading: state => state.loading,
        globalError: state => state.globalError,
    },
    modules: {
        auth
    }
})

export default store
