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
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data () {
    return {
      //
    }
  }
}
</script>
