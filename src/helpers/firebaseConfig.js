import store from './store'
import Firebase from 'firebase'
import { async } from 'q';

export const config = {
    apiKey: "AIzaSyAkxRH4sw2fm8b1-rdxnXGBWg1JFxQ2jKk",
    authDomain: "koreadivinghub.firebaseapp.com",
    databaseURL: "https://koreadivinghub.firebaseio.com",
    projectId: "koreadivinghub",
    storageBucket: "koreadivinghub.appspot.com",
    messagingSenderId: "789252938860"
  };

  export default {
    install: (Vue, options) => {
      const firebase = Firebase.initializeApp(config)
      const auth = firebase.auth()
      Vue.prototype.$auth = {
        login: async (username, pass) => {
          return await auth.signInWithEmailAndPassword(username, pass)
        },
        register : async (email, password) => {
          store.commit('LOADER',true);
     
          return await auth.createUserWithEmailAndPassword(email, password).then( ()=>{
            store.commit('LOADER',false);
          }).catch(function(error) {
            store.commit('LOADER',false);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        },
        logout: async () => {
          await auth.signOut()
        }
      }
      auth.onAuthStateChanged(user => {
        console.log(user)
        store.commit('updateUser',{ user })
      })
    }
  }