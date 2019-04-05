

<template>
  <nav>
    <v-toolbar flat app class="blue lighen-1">
      <v-toolbar-side-icon class="hidden-sm-and-up white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">site</span>
        <span>Title</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="hidden-xs-only">
        <v-btn flat color="blue darken-4">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class>
      <v-container>
        <v-layout row wrap>
          <v-flex xs11 class="text-xs-center">
            <span class="font-weight-light blue--text">site</span>
            <span class="font-weight-bold blue--text">Title</span>
          </v-flex>
          <v-flex xs1>
            <v-icon class="blue--text" @click="drawer = !drawer">close</v-icon>
          </v-flex>
        </v-layout>
      </v-container>
      <component :is="signInOut" v-bind:userinfo="userinfoCheck"></component>
      <!-- <userProfileComponent :userinfo="userinfoCheck"/> -->
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <Signoutcomponent v-if="this.$store.state.user != null"/>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Signincomponent from "./LoginComponents/Signincomponent";
import Signoutcomponent from "./LoginComponents/Signoutcomponent";
import userProfileComponent from "./LoginComponents/userProfileComponent";
import {mapState} from 'vuex';

// import firebase from "firebase";

export default {
  props: ["userinfo", "isSignin"],
  created() {
    console.log('nav created!')
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     var displayName = user.displayName;
    //     var email = user.email;
    //     var emailVerified = user.emailVerified;
    //     var photoURL = user.photoURL;
    //     var isAnonymous = user.isAnonymous;
    //     var uid = user.uid;
    //     var providerData = user.providerData;
    //     console.log(user.displayName);
    //     this.userInfo;
    //   } else {
    //     // User is signed out.
    //     // ...
    //   }
    // });
  },

  components: {
    Signincomponent,
    Signoutcomponent,
    userProfileComponent
  },
  data() {
    return {
      userInfo: {},
      max: true,
      login: true,
      drawer: false,
      links: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "folder", text: "Magazine", route: "/magazine" },
        { icon: "person", text: "Team", route: "/team" }
      ]
    };
  },
  computed: {
    signInOut() {
      if (this.$store.state.user) {
        return "userProfileComponent";
      } else {
        return "Signincomponent";
      }
    },
    ...mapState(['user'])
    
  },
  methods: {
      userinfoCheck: function() {
        // console.log(this.isEmpty({}))
      if (!this.isEmpty(this.userinfo)){
         return this.userinfo
         }
      else{
        return {}
        }
    },
   
     isEmpty: function(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }
  }
};
</script>