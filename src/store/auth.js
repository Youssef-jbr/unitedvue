/* eslint-disable */
import axios from 'axios'
export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
        role: null,
        load: false,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, data) {
            state.user = data
        },
        SET_ROLE(state, data) {
            state.role = data
        },
        SET_DATALOAD(state, data) {
            state.load = data
        },
    },
    getters: {
        authenticated(state) {
            if (state.token) {
                return true
            } else {
                return false
            }
        },
        user(state) {
            return state.user
        },
        dataLoad(state) {
            return state.load
        },
        role(state) {
            return state.role
        }
    },
    actions: {
        setUser({ commit }, data) {
            commit("SET_USER", data)
        },
        async login({
            dispatch
        }, credentials) {
            let response = await axios.post('auth/login', credentials)
            if (response.data.messageError || response.data.code == 498) {
                return response
            } else {
                return dispatch('attempt', response.data[0].token)

            }
        },
        async register({
            dispatch
        }, credentials) {
            let response = await axios.post('auth/register', credentials)
            if (response.data.messageError) {
                return response.data.messageError
            }
            return dispatch('attempt', response.data[0].token)
        },
        async attempt({
            commit,
            state
        }, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }
            if (!state.token) {
                return
            }
            try {
                await axios.get('auth/me').then((response) => {
                    commit('SET_DATALOAD', true)
                    commit('SET_USER', response.data)
                    commit('SET_ROLE', response.data.role)
                })

            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        logout({
            commit
        }) {
            return axios.post('auth/logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
                document.location.reload()
            })
        }
    }
}