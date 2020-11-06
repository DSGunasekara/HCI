import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    withdrawAmount: null,
  },
  getters: {
    getAmount: (state) => state.withdrawAmount,
  },
  mutations: {
    setAmount: (state, amount) => (state.withdrawAmount = amount),
  },
  actions: {},
  modules: {},
});
