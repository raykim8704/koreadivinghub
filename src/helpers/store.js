import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null,
  loader:false,
  popup:false,
  message:'',
  userinfo : null
}

const mutations = {
  updateUser (state, { user }) {
    Vue.set(state, 'user', user)
  },
  LOADER(state,payload) {
      state.loader = payload;
  },
  popup(state,payload){
    state.popup = payload
  },
  message(state,payload){
    state.message = payload
  },
  updateUserinfo(state, userinfo ){
    Vue.set(state,'userinfo', userinfo)
  }
}
const getters = {
  user: state => state.user,
  userinfo : state => state.userinfo
}
const actions = {
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store