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
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import firebase from 'firebase'
// import firebaseui from 'firebaseui';
import {config} from './helpers/firebaseConfig'
import 'firebaseui/dist/firebaseui.css'

export default {
   created(){
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log('login');
        this.userinfo = user;
        this.signinstate = true;
      }else{
        console.log('logout');
        this.signinstate = false;
      }
    })
  },
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      signinstate : false,
      userinfo : {}
    }
  }
}
</script>
