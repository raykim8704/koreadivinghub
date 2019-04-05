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
        return await loader(auth.signInWithEmailAndPassword(username, pass));
      },
      register: async (email, password) => {
        const signInWithFirestore = await function(email,password){
          return auth.createUserWithEmailAndPassword(email, password).then((user) => {
       
            saveToFirestore();
          })
        }
        // return await loader(auth.createUserWithEmailAndPassword(email, password)); 
        return loader(signInWithFirestore(email, password));
      },
      registerWithGoogle : function(registInfo) {
        console.log('registinfo', registInfo)
        var today =  getToday();
        var userData = {
          _dTimestamp : new Date(),
          _sEmail : registInfo.additionalUserInfo.profile.email,
          _sRegDate : today,
          _sUid : registInfo.user.uid,
          _sUsername : registInfo.additionalUserInfo.profile.name,
          _nLevel : 1,
          _sBirthday : "",
          _nLike : 0,
          _nWriting : 0,
          _sProfileImagePath : registInfo.additionalUserInfo.profile.picture
        }
        console.log("userData : ",userData)
      },
      logout: async () => {
        await loader(auth.signOut())
      }
    }
    auth.onAuthStateChanged(user => {
      console.log(user)
      store.commit('updateUser', { user })
    })

    var saveToFirestore = async (coll,doc,data) => {
      console.log(user)
      console.log('save firestore')

    }
    var loader = async(f) => {
      
      return new Promise((resolve,reject) => {
        store.commit('LOADER', true)
        f
        .then((response) => {
          store.commit('LOADER', false)
          resolve(response)
          
        })
        .catch((error) => {
          store.commit('LOADER',false)
          reject(error)
        })
      })
     
   
    }

    function getToday(){
      var d1 = new Date();
      return [d1.getFullYear(),d1.getMonth()+1,d1.getDate() ].join('-');
    }
  }
}