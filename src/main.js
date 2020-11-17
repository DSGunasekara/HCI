import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "firebase";

Vue.config.productionTip = false
firebase.initializeApp({
  apiKey: "AIzaSyD-VQgebQlxuvKw3le8dm0s8IX02d-KIZI",
  authDomain: "sjp-hci.firebaseapp.com",
  databaseURL: "https://sjp-hci.firebaseio.com",
  projectId: "sjp-hci",
  storageBucket: "sjp-hci.appspot.com",
  messagingSenderId: "761898307464",
  appId: "1:761898307464:web:56bdc5c14eb4f6a2f3343d"
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
