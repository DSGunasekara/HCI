<template>
  <div class="container">
    <div class="displayArea">
      <div class="greet">
        <h1>Hello, {{ name }} ....</h1>
        <br>
        <h1>{{ amount.join('') }}</h1>
      </div>
    </div>
    <v-row>
      <v-col>
        <v-btn @click="addValue(i)" v-for="i in numberList" :key="i" class="ma-2">
          {{ i }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="delNumber">
          del
        </v-btn>
        <v-btn @click="amount = []">
          clear
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "Withdraw",
  data(){
  return {
    name: 'A.D.S.Gunasekara',
    amount: [],
    numberList : [0,1,2,3,4,5,6,7,8,9]
  }
  },
  methods:{
  addValue(i){
    this.amount.push(i)
  },
    delNumber(){
      this.amount.pop()
    }
  }
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
