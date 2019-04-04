import Vue from 'vue'

import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './helpers/store'
import firebaseConfig from './helpers/firebaseConfig'
import { sync } from 'glob';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(firebaseConfig)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


