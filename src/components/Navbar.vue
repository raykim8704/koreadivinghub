

<template>
  <nav>
    <v-toolbar flat app class="blue lighen-1">
      <v-toolbar-side-icon class="hidden-md-and-up white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text text-md-center" style="margin-left:10%;">
        <span class="font-weight-light">korea</span>
        <span>DivingHub</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="hidden-sm-and-down" style="margin-right:10%;">
      <Topsignoutcomponent v-if="signInOut" :userinfo="this.$store.state.userinfo"/>
      <Topsignincomponent v-else/>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" >
      <v-container>
        <v-layout row wrap>
          <v-flex xs11 class="text-xs-center">
            <span class="font-weight-light blue--text">korea</span>
            <span class="font-weight-bold blue--text">DivingHub</span>
          </v-flex>
          <v-flex xs1>
            <v-icon class="blue--text" @click="drawer = !drawer">close</v-icon>
          </v-flex>
        </v-layout>
      </v-container>
      <userProfileComponent v-if="signInOut"></userProfileComponent>
      <Signincomponent v-else></Signincomponent>
      <!-- <component :is="signInOut" v-bind:userinfo="userinfoCheck"></component> -->
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
import Topsignincomponent from "./LoginComponents/Topsignincomponent";
import Topsignoutcomponent from "./LoginComponents/Topsignoutcomponent";
import { mapState } from "vuex";

// import firebase from "firebase";

export default {
  props: ["userinfo", "isSignin"],
  created() {
    console.log("nav created!");
  
  },

  components: {
    Signincomponent,
    Signoutcomponent,
    userProfileComponent,
    Topsignincomponent,
    Topsignoutcomponent
  },
  data() {
    return {
      userInfo: this.$store.state.user,
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
        return true;
      } else {
        return false;
      }
    },
    ...mapState(["user"])
  },
  methods: {
    userinfoCheck: function() {
      // console.log(this.isEmpty({}))
      if (!this.isEmpty(this.userinfo)) {
        return this.userinfo;
      } else {
        return {};
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