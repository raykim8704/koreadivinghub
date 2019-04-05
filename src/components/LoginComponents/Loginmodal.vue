<template>
  <v-layout row justify-center>
    <!--<v-btn @click="dialog = width" v-bind:block = "width"  depressed color="blue" class="white--text">가입하기 </v-btn> !-->

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h2>Login Modal</h2>
          <div id="firebaseui-auth-container"></div>
          <div id="loader">Loading...</div>
          <form>
            <v-text-field v-model="login" type="text"></v-text-field>
            <v-text-field v-model="password" type="password"></v-text-field>
          </form>
          <v-btn @click="onSubmit">Login</v-btn>
          <v-btn @click="onRegister">regist</v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
// import firebase from 'firebase';
import firebase from 'firebase';
import firebaseui from "firebaseui";
import {config} from '../../helpers/firebaseConfig';
import { mapGetters } from "vuex";
import { async } from "q";
export default {
  mounted() {
    var uiConfig = {
  callbacks: {
     auth : this.$auth.registerWithGoogle,
    signInSuccessWithAuthResult:  function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log('do something');
      console.log(authResult);
      console.log(redirectUrl);
       auth(authResult);
      return true
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  // signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  // tosUrl: '<your-tos-url>',
  // // Privacy policy url.
  // privacyPolicyUrl: '<your-privacy-policy-url>'
};
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    ui.start('#firebaseui-auth-container', uiConfig)

  },
  props: {
    open: Boolean
  },

  data() {
    return {
      dialog: this.open,
      login: "",
      password: ""
    };
  },
  watch: {
    open: function(value) {
      this.dialog = value ? value : !value;
    },
    user(auth) {
      if (!auth) {
        this.$router.replace(this.nextRoute);
      }
    }
  },
  methods: {
    async onSubmit() {
      const auth = await this.$auth.login(this.login, this.password);
    },
    async onRegister() {
      const auth = await this.$auth.register(this.login, this.password);
    }
  }
};
</script>
// [2019. 4. 3. 오후 5:20:51] 이기섭(LDCC-솔루션연구팀 서비스연구담당): let ui = firebaseui.auth.AuthUI.getInstance();
//     if (!ui) {
//       ui = new firebaseui.auth.AuthUI(window.firebase.auth());
//     }
//     ui.start('#firebaseui-auth-container', uiConfig);
// [2019. 4. 3. 오후 5:21:00] 이기섭(LDCC-솔루션연구팀 서비스연구담당): 요 로직도 해보셨나요?
// [2019. 4. 3. 오후 5:21:15] 김광훈(LDCC-솔루션연구팀 플랫폼연구담당): 이걸로 해보게썰
// [2019. 4. 3. 오후 5:21:34] 이기섭(LDCC-솔루션연구팀 서비스연구담당): 아 window 객체
// [2019. 4. 3. 오후 5:21:38] 이기섭(LDCC-솔루션연구팀 서비스연구담당): let ui = firebaseui.auth.AuthUI.getInstance()
//     if (!ui) {
//       ui = new firebaseui.auth.AuthUI(firebase.auth())
//     }
//     ui.start('#firebaseui-auth-container', uiConfig)
