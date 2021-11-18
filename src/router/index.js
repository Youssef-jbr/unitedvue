import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store/index.js";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "accueil",
            props: true,
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/accueil",
            name: "Accueil",
            props: true,
            meta: {
                requiresAuth: true,
            }
        }
    ]
})