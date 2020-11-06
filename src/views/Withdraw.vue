<template>
  <div class="container">
    <v-row justify="center">
      <v-col md="1">
        <v-btn x-large text class="red darken-1" dark>Back</v-btn>
      </v-col>
      <v-col md="1">
        <v-btn x-large text class="green darken-1" dark @click="submitValue" :loading="loading">Next</v-btn>
      </v-col>
    </v-row>
    <div class="displayArea">
      <div class="greet">
        <h1>Hello, {{ name }} ....</h1>
        <h1 class="grey--text">Enter the amount to withdraw</h1>
        <br>
        <h1>Rs: {{ amount.join('') }}</h1>
      </div>
    </div>
    <v-row style="margin-left: 300px">
      <v-col v-for="i in numberList" :key="i" class="ma-2" md="3">
        <v-btn @click="addValue(i)" color="#3498db" dark x-large width="300px" height="65px">
          {{ i }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-left: 300px">
      <v-col class="ma-2" md="3">
        <v-btn @click="delNumber" color="error" dark x-large width="300px" height="65px">
          del
        </v-btn>
      </v-col>
      <v-col class="ma-2" md="3">
        <v-btn @click="addValue(0)" color="#3498db" dark x-large width="300px" height="65px">
          0
        </v-btn>
      </v-col>
      <v-col class="ma-2" md="3">
        <v-btn @click="amount = []" color="error" dark x-large width="300px" height="65px">
          clear
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar";
export default {
name: "Withdraw",
  components:{
    // NavBar
  },
  data(){
  return {
    name: 'A.D.S.Gunasekara',
    amount: [],
    numberList : [7,8,9,4,5,6,1,2,3],
    loading: false
  }
  },
  methods:{
  addValue(i){
    this.amount.push(i)
  },
    delNumber(){
      this.amount.pop()
    },
    async submitValue(){
      this.loading = true
      const amount = this.amount.join('')
      console.log(amount)
      await new Promise(r => setTimeout(r, 2000));
      this.loading = false
      await this.$router.push('/complete')
    }
  },
}
</script>

<style scoped>
.displayArea{
  background: #fff;
  border-radius: 10px;
  height: 450px;
  width: 80%;
  margin: auto;
}
</style>
