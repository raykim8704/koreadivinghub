<template>
<v-layout row justify-center>

   <!--<v-btn @click="dialog = width" v-bind:block = "width"  depressed color="blue" class="white--text">가입하기 </v-btn> !-->
  
    <v-dialog v-model="dialog" max-width="600px">
    <v-card>
        <v-card-title>
            <h2>Login Modal</h2>
             <div id="firebaseui-auth-container"></div>
        </v-card-title>
    </v-card>

    </v-dialog>
</v-layout>
</template>

<script>
// import firebase from 'firebase';
// import firebase from 'firebase';
import firebaseui from 'firebaseui'
// import {config} from '../../helpers/firebaseConfig';

export default{
        mounted() {
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
        props : {
            open : Boolean ,
        },
        
        data (){
            return {
                 dialog : this.open
            }
        },
        watch : {
            open : function (value){
                this.dialog = value ? value : !value
            }
        }, 
        

    }

</script>