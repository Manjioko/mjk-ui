<template>
  <div id="app">
    <s-loading :sIsLoading="false" />
    <s-chatbox sContent="hello the world" :sSelf="true" :sAnimation="true"/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Mloading from './components/mloading/mloading.vue'
// import schatbox from "./components/schatbox/schatbox.vue";


export default {
  name: "App",
  components: {},
  methods: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
