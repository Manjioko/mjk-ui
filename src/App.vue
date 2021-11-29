<template>
  <div id="app">
    <!-- <s-loading :sIsLoading="false" /> -->
    <!-- <s-chatbox sContent="hello the world" :sSelf="true" :sAnimation="true" id="simg" /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <savatar sSrc='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' /> -->
    <stextarea />
    <stextarea />
  </div>
</template>
<script>

import stextarea from "./components/stextarea/stextarea.vue";

export default {
  name: "App",
  components: {
    stextarea,
  },
  methods: {},
  mounted() {},
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
