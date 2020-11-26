<template>
  <div class="container">
    <div class="displayArea" style="margin-top: 150px">
      <div class="greet">
        <h1>Hello, {{ getUserDetails.name }} ....</h1>
        <br>
        <h2>Move your face to move the cursor <v-icon x-large color="#1abc9c" class="pl-4 pb-3 heading">mdi-face</v-icon> </h2>
        <h2>Lift right hand to choose <v-icon x-large color="#1abc9c" class="pl-4 pb-3 heading">mdi-hand-right</v-icon> </h2>
<!--        <h2>Point Right to Continue <v-icon x-large color="#1abc9c" class="pl-4 pb-3 heading">mdi-hand-pointing-right</v-icon> </h2>-->
<!--        <h2>Point Left to get back <v-icon x-large color="#1abc9c" class="pl-4 pb-3 heading">mdi-hand-pointing-left</v-icon> </h2>-->
      </div>
    </div>
    <v-row justify="center" style="margin-top: 50px">
      <v-col md="1">
        <v-btn color="#3498db" dark x-large width="300px" height="100px" style="margin-left: -270px" router to="/withdraw">
          Withdraw
        </v-btn>
      </v-col>
      <v-col md="1">
        <v-btn color="#3498db" dark x-large width="300px" height="100px" style="margin-left: 45px" router to="/about">
          Deposit
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="1">
        <v-btn color="#3498db" dark x-large width="300px" height="100px" style="margin-left: -270px">
          Transfer & Payment
        </v-btn>
      </v-col>
      <v-col md="1">
        <v-btn color="#3498db" dark x-large width="300px" height="100px" style="margin-left: 45px">
          Balance Inquiry
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  methods:{
    ...mapActions(["getUser"])
  },
  computed:{
    ...mapGetters(["getUserDetails"])
  },
  data(){
    return{
      name: 'A.D.S.Gunasekara'
    }
  },
  created() {
    this.getUser()
  }
}
</script>

<style>
  .displayArea{
    background: #fff;
    border-radius: 10px;
    height: 350px;
    width: 62%;
    margin: auto;
  }
  .greet{
    text-align: left;
    margin-left:-200px;
    padding-top: 50px;
    padding-left: 300px;
  }
</style>
