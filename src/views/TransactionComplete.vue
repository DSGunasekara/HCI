<template>
  <div class="container">
    <div class="displayArea">
      <div class="greet">
        <h1>Transaction was complete</h1>
        <!-- <h1 class="grey--text">Enter the amount to withdraw</h1> -->
        <br />
        <h1>Amount Rs: {{ getAmount }}</h1>
        <h1>Date: {{ new Date().toISOString().substr(0, 10) }}</h1>
        <br>
        <v-btn text dark class="green darken-1" @click="goHome">Go Home</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TransactionComplete",
  computed: {
    ...mapGetters(["getAmount"]),
  },
  methods:{
    goHome(){
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
</style>
