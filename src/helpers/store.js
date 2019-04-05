import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null,
  loader:false,
  popup:false,
  message:''
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
  }
}
const getters = {
  user: state => state.user
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