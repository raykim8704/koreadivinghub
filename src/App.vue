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
import 'firebaseui/dist/firebaseui.css'


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
  },

}
</script>
