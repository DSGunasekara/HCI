import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    withdrawAmount: null,
  },
  getters: {
    getAmount: (state) => state.withdrawAmount,
    getUserDetails: (state => state.user),
  },
  mutations: {
    setUser: (state, user) => (state.user = user),
    setAmount: (state, amount) => (state.withdrawAmount = amount),
  },
  actions: {
    async getUser({ commit }){
      try {
        const response = await axios.get('http://localhost:5000/api/user')
        commit("setUser", response.data)
      }catch (error){
        console.log(error)
      }
    },
    async updateBalance({ dispatch }, balance){
      try {
        console.log(balance)
        await axios.patch('http://localhost:5000/api/user/withdraw', {balance});
        dispatch("getUser")
      }catch (error){
        console.log(error)
      }
    }
  },
  modules: {},
});
