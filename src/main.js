import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import {config} from './helpers/firebaseConfig'


Vue.config.productionTip = false


new Vue({
  created(){
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log('login');
      }else{
        console.log('logout');
      }
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')


