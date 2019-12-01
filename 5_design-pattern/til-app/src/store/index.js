import Vue from 'vue';
import Vuex from 'vuex';
// import { loginUser } from '../api';
import {
    getAuthFromCookie, deleteCookie
} from '../utils/cookies';

Vue.use(Vuex);

// export default {
//     install()  {}
// }

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'production' ? false : true,
    state: {
        username: '',
        token: '',
    },
    getters: {
        isLogin(state) {
            return state.token !== '' ? true : false; 
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        },
        cleartoken(state,) {
            state.token = '';
        }
    },
    actions: {
        async LOGOUT({ commit}) {
            commit('clearUsername');
            commit('clearToken');
            deleteCookie('til_auth');
            deleteCookie('til_user');
        }
        // async LOGIN_USER({ commit }) {
        //     await loginUser();
        //     commit('setUsername');
        //     commit('setToken');
        // }
    }
})