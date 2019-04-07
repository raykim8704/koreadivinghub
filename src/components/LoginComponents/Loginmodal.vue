<template>
  <v-layout row justify-center>
    <!--<v-btn @click="dialog = width" v-bind:block = "width"  depressed color="blue" class="white--text">가입하기 </v-btn> !-->

    <v-dialog v-model="dialog"  max-width="600px">
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
   
    signInSuccessWithAuthResult: async function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
         firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL	)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });

      console.log('do something');
      console.log(authResult);
      console.log(redirectUrl);
      setUser(authResult);
      //  auth(authResult);
      // await this.$auth.login(this.login, this.password);
      // console.log(uiConfig.auth)
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
    { provider : firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    defaultCountry: 'KO'
    
    }
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
  },


};
function setUser(authResult){
  console.log('work?',authResult);
if(authResult.additionalUserInfo.isNewUser){
  var registInfo = authResult.additionalUserInfo.profile
   var d1 = new Date();
   var today = [d1.getFullYear(),d1.getMonth()+1,d1.getDate() ].join('-');
    var userData = {
        _dTimestamp : new Date(),
        _sEmail : registInfo.email,
        _sRegDate : today,
        _sUid : authResult.user.uid,
        _sUsername : registInfo.name,
        _nLevel : 1,
        // _sBirthday : registInfo.birthday,
        _nLike : 0,
        _nWriting : 0,
        _sProfileImagePath : registInfo.picture
      }
      console.log(userData);
      var db = firebase.firestore();
      db.collection('users').doc(authResult.user.uid).set(userData).then(function(){
        console.log('data saved')
      }).catch(function(error){
        console.log('error:',error)
      })

}


}
</script>

