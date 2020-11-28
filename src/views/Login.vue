<template>
  <div class="container">
    <div class="displayArea" style="margin-top: 50px">
      <div class="greet">
        <h1 style="color: #e53935">{{ errMsg }}</h1>
        <h1>Hello, {{ getUserDetails.name }} ...</h1>
        <br>
        <h2>Enter your pin: {{ pinArr.join("") }}</h2>
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
        <v-btn x-large text style="width: 300px;margin-left: 220px; height: 65px" class="red darken-1" dark router to="/">Back</v-btn>
      </v-col>
      <v-col>
        <v-btn
            x-large
            text
            class="green darken-1"
            dark
            style="width: 300px; margin-left: 50px; height: 65px"
            @click="login"
        >
         Login
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
name: "Login",
  data() {
    return {
      name: "",
      balance: '',
      amount: [],
      numberList: [7, 8, 9, 4, 5, 6, 1, 2, 3],
      loading: false,
      pinArr: [],
      errMsg : ""
    };
  },
  methods:{
    ...mapActions(["getUser"]),
    addValue(i) {
      this.errMsg = "";
      this.amount.push(i);
      this.pinArr.push('*')
    },
    delNumber() {
      this.amount.pop();
      this.pinArr.pop();
    },
    clearValue(){
      this.amount = []
      this.pinArr = []
      this.errMsg = ''
    },
    login(){
      if(this.amount.join("") === "3160"){
        this.$router.push("/home")
      }else{
       this.errMsg = "Invalid Pin"
      }
    }
  },
  computed:{
    ...mapGetters(["getUserDetails"])
  },
  created() {
    this.getUser()
  }
}
</script>

<style scoped>

</style>