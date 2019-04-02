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
        >로그인</v-btn>
        <Loginmodal v-bind:open="loginDialog"/>
      </v-flex>
      <v-flex xs12>
        <v-btn @click="dialog = !dialog" depressed block color="blue" class="white--text">가입하기</v-btn>
        <Joinmodal v-bind:open="dialog"/>
      </v-flex>
    </v-layout>

    
  </v-container>
</template>

<script>
// import firebase from 'firebase';
import Loginmodal from "./Loginmodal";
import Joinmodal from "./Joinmodal";
export default {
  components: {
    Loginmodal,
    Joinmodal
  },

  data() {
    return {
       loginDialog: false,
      dialog: false,
    };
  },
};
</script>