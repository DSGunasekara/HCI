<template>
  <div class="container">
    <div class="displayArea">
      <div class="greet">
        <h1 style="color: #e53935">{{ errMsg }}</h1>
        <h1>Hello, {{ getUserDetails.name }} ...</h1>
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
    <v-row justify="center">
      <v-col>
        <v-btn x-large text style="width: 300px;margin-left: 220px; height: 65px" class="red darken-1" dark router to="/home">Back</v-btn>
      </v-col>
      <v-col>
        <v-dialog
            v-model="dialog"
            persistent
            max-width="800"
        >
          <template v-slot:activator="{ attrs }">
            <v-btn
                x-large
                text
                class="green darken-1"
                dark
                style="width: 300px; margin-left: 50px; height: 65px"
                v-bind="attrs"
                @click="submitValue"
            >
              Withdraw
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">
              Confirm Withdraw <br><br>Are you sure you want withdraw <br> Rs: {{ amount.join("") }}.00/=
            </v-card-title>
<!--            <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>-->
            <v-card-actions style="padding-bottom: 50px; padding-top: 50px">
<!--              <v-spacer></v-spacer>-->
              <v-btn
                  x-large
                  dark
                  style="width: 300px; margin-left: 50px; height: 65px; background-color: #E53935"
                  text
                  @click="dialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  x-large
                  dark
                  style="width: 300px; margin-left: 50px; height: 65px; background-color: #43A047"
                  text
                  :loading="loading"
                  @click="confirm"
              >
                Confirm
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      dialog:false,
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
    submitValue() {
      const amount = this.amount.join("");
      if(amount > this.getUserDetails.balance || !amount){
        this.errMsg = "Please enter a valid amount and try again";
      }else if (amount) {
        this.dialog = true;
      }
    },
    async confirm(){
      this.loading = true;
      const amount = this.amount.join("");
      let balance = this.getUserDetails.balance - amount;
      console.log(balance);
      await this.updateBalance(balance)
      this.$store.commit("setAmount", amount);
      this.loading = false
      await this.$router.push("/complete");
    }
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
  height: 350px;
  width: 62%;
  margin: auto;
}
.greet{
  margin-left:-200px;
  text-align: left;
}
</style>
