<template>
  <div class="container">
    <v-row justify="center">
      <v-col md="1">
        <v-btn x-large text class="red darken-1" dark router to="/">Back</v-btn>
      </v-col>
      <v-col md="1">
        <v-btn
          x-large
          text
          class="green darken-1"
          dark
          @click="submitValue"
          :loading="loading"
          >Next</v-btn
        >
      </v-col>
    </v-row>
    <div class="displayArea">
      <div class="greet">
        <h1 style="color: #e53935">{{ errMsg }}</h1>
        <h1>Hello, {{ getUserDetails.name }} ....</h1>
        <h1 class="grey--text">Available Balance: {{ getUserDetails.balance }}</h1>
        <h1 class="grey--text">Enter the amount to withdraw</h1>
        <br />
        <h1>Rs: {{ amount.join("") }}</h1>
      </div>
    </div>
    <v-row style="margin-left: 200px">
      <v-col v-for="i in numberList" :key="i" class="ma-2" md="3">
        <v-btn
          @click="addValue(i)"
          color="#3498db"
          dark
          x-large
          width="200px"
          height="65px"
        >
          {{ i }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-left: 200px">
      <v-col class="ma-2" md="3">
        <v-btn
          @click="delNumber"
          color="error"
          dark
          x-large
          width="200px"
          height="65px"
        >
          del
        </v-btn>
      </v-col>
      <v-col class="ma-2" md="3">
        <v-btn
          @click="addValue(0)"
          color="#3498db"
          dark
          x-large
          width="200px"
          height="65px"
        >
          0
        </v-btn>
      </v-col>
      <v-col class="ma-2" md="3">
        <v-btn
          @click="clearValue"
          color="error"
          dark
          x-large
          width="200px"
          height="65px"
        >
          clear
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import NavBar from "@/components/NavBar";
export default {
  name: "Withdraw",
  components: {
    // NavBar
  },
  data() {
    return {
      name: "",
      balance: '',
      amount: [],
      numberList: [7, 8, 9, 4, 5, 6, 1, 2, 3],
      loading: false,
      errMsg: "",
    };
  },
  methods: {
    ...mapActions(['updateBalance']),
    addValue(i) {
      this.errMsg = "";
      this.amount.push(i);
    },
    delNumber() {
      this.amount.pop();
    },
    clearValue(){
      this.amount = []
      this.errMsg = ''
    },
    async submitValue() {
      this.loading = true;
      const amount = this.amount.join("");
      if(amount > this.getUserDetails.balance || !amount){
        this.loading = false;
        this.errMsg = "Please enter a valid amount and try again";
      }else if (amount) {
        let balance = this.getUserDetails.balance - amount;
        console.log(balance);
        await this.updateBalance(balance)
        this.loading = false;
        this.$store.commit("setAmount", amount);
        await this.$router.push("/complete");
      }

    },
  },
  computed:{
    ...mapGetters(["getUserDetails"])
  }
};
</script>

<style scoped>
.displayArea {
  background: #fff;
  border-radius: 10px;
  height: 450px;
  width: 80%;
  margin: auto;
}
</style>
