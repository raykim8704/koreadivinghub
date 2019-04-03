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
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../../helpers/firebaseConfig';

export default{
        mounted() {
    var uiConfig = {
    //   signInSuccessUrl: '/',
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
