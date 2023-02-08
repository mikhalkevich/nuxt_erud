import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return { token: 'first'}
    },

    actions: {
        changeToken (state, value) {
            state.commit('updateToken', value)
        }
    },

    mutations: {
        updateToken(state) {
            // Check if the ID exists
            if(localStorage.getItem('token')) {
                return state.token = localStorage.getItem('token');
            }
        }
    },
});