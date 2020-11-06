<template>
  <v-app>
    <v-main  class="main">
<!--      <NavBar/>-->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import NavBar from "@/components/NavBar";
export default {
  name: 'App',

  components: {
    // NavBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .main{
    background: #ecf0f1;
  }
</style>
