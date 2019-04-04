<template>
  <v-app class="grey lighten-3">
   <Navbar :isSignin = "signinstate" :userinfo = "userinfo"/>

    <v-content>
      <v-container grid-list-xl>
        <v-layout row wrap>
           <v-flex xs10 offset-xs1>
          <router-view></router-view>
           </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Loader></Loader>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Loader from './components/partials/_loader'
import axios from 'axios'

// import firebase from 'firebase'
// import firebaseui from 'firebaseui';
// import {config} from './helpers/firebaseConfig'
import 'firebaseui/dist/firebaseui.css'
// import { resolve } from 'dns';
// import { reject } from 'q';

export default {
   created(){
     axios.interceptors.request.use( (config) => {
     console.log('axios request')
       this.$store.commmit('LOADER',true);
       return config;
     }, (error) => {
       this.$store.commit('LOADER',false);
       return Promise.reject(error);
     });

  axios.interceptors.response.use( (response) => {
    console.log(response);
       this.$store.commmit('LOADER',true);
       return response;
     }, (error) => {
       return new Promise( (resolve,reject) => {
         this.$store.dispatch('logout').then( () => {
           this.$router.push('./login')
         })
         throw error;
       })
     });

   
  },
  name: 'App',
  components: {
    Navbar,
    Loader
  },
  data () {
    return {
      signinstate : false,
      userinfo : {}
    }
  }
}
</script>
