import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import axios from "axios"
import store from "./store/index.js";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$axios = axios
Vue.prototype.$store = store


require("@/store/subscriber");
axios.defaults.baseURL = "https://unitedapi/api/";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

store.dispatch("auth/attempt", localStorage.getItem("token"));

new Vue({
  vuetify,
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
