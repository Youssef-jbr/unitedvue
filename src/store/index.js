/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import auth from "../store/auth"

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true,
    state: {},
    mutations: {},
    actions: {

    },
    modules: {
        auth,
    },
})

export default store