import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import Login from "@/components/auth/Login.vue"
import Register from "@/components/auth/Register.vue"
//import store from "@/store/index.js";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
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
            component: Accueil,
            props: true,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/connexion",
            name: "Login",
            component: Login,
            props: true,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/inscription",
            name: "Register",
            component: Register,
            props: true,
            meta: {
                requiresAuth: true,
            }
        }
        
    ]
})
export default router