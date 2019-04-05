<template>
  <v-layout row justify-center>

    <v-dialog
    persistent
     v-model="$store.state.popup"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">{{$store.state.message}}</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="close"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="close"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import store from '../../helpers/store'

export default {

    methods :  {
        close() {
            store.commit('popup',false)
        }
    }

}
</script>