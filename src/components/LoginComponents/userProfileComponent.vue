<template>
  <v-container grid-list-md grey lighten-3 text-xs-center>
    <v-layout  row wrap align-center>
      <v-flex xs2  class="text-xs-left">
              <v-avatar
                size="42px"
              >
                <img
                  v-if="this.user._sProfileImagePath"
                  v-bind:src="user._sProfileImagePath"
                  alt="Avatar"
                >
              </v-avatar>

            <v-spacer></v-spacer>
      </v-flex>
      <v-flex xs10 class="text-xs-left" style="padding-left:20px;">
          <strong>{{this.user._sUsername}}</strong>
          <p style="margin:0">프로필 보기</p>
        <!-- <v-card  tile flat>
          <v-card-text class="px-0">
              <v-avatar
          :size="36"
          color="grey lighten-4"
        >
          <img v-model="" alt="avatar">
        </v-avatar>
          </v-card-text>
        </v-card> -->
      </v-flex>
    
    </v-layout>
  </v-container>
</template>



<script>
// import firebase from 'firebase';
export default {
  created() {
    console.log("user profile component created");
  
    this.objUser = this.$store.state.user;
    this.user = this.$store.state.userinfo;
    console.log(this.user);
  },
  props: ["userinfo"],
  components: {},

  data() {
    return {
      objUser: {},
      user : {}
      

      // username = userinfo
    };
  }
};
</script>