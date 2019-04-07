<template>
  <v-layout row justify-center>
    <!--<v-btn @click="dialog = width" v-bind:block = "width"  depressed color="blue" class="white--text">가입하기 </v-btn> !-->

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <h2>Signout Modal</h2>
           <v-btn @click="firebaseSignout" depressed block color="blue" class="white--text">예</v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
// import firebase from 'firebase';
import firebase from "firebase";
import { config } from "../../helpers/firebaseConfig";

export default {
  props: {
    open: Boolean
  },

  data() {
    return {
      dialog: this.open
    };
  },
  methods : {
      firebaseSignout :async function(){
          await this.$auth.logout()
          this.dialog = false
      }
  },
  watch: {
    open: function(value) {
      this.dialog = value ? value : !value;
    }
  }
};
</script>