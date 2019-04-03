<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-btn
          @click.stop="loginDialog = !loginDialog"
          depressed
          block
          outline
          color="white"
          class="blue--text v-btn--block"
        >로그아웃</v-btn>
        <Signoutmodal v-bind:open="loginDialog"/>
      </v-flex>
 
    </v-layout>

    
  </v-container>
</template>
<script>
import Signoutmodal from './Signoutmodal'
export default {
    components : {
      Signoutmodal
    },
    data (){
      return {
        loginDialog : false
      }
    }
}
</script>