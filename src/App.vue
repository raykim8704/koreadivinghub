<template>
  <v-app class="grey lighten-3">
   <Navbar/>

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
    <Message/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Loader from './components/partials/_loader'
import Message from './components/partials/_message'
import axios from 'axios'

// import firebase from 'firebase'
// import firebaseui from 'firebaseui';
// import {config} from './helpers/firebaseConfig'
import 'firebaseui/dist/firebaseui.css'
// import { resolve } from 'dns';
// import { reject } from 'q';

export default {
   created(){
  },
  name: 'App',
  components: {
    Navbar,
    Loader,
    Message
  },
  data () {
    return {

    }
  }
}
</script>
