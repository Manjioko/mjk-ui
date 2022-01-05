<template>
  <div id="app">
    <!-- <s-loading :sIsLoading="false" /> -->
    <!-- <s-chatbox sContent="hello the world" :sSelf="true" :sAnimation="true" id="simg" /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <savatar sSrc='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' /> -->

    <!-- <sinput sType="text" @sValue="e => value = e" sText="用户名" /> -->
    <!-- <h1>{{value}}</h1> -->
    <salter sMsg="删除我吗??" @sNo="cancelHandle" @sYes="successHandle"/>
    
    
    <!-- <stextarea :sLimit="true"><div>hello world</div></stextarea>
    <stextarea><div :style="{width:'100%',height:'100%',background:'green'}"></div> </stextarea>
    <stextarea><div id="hello" :style="{width:'100%',height:'100%',background:'gray'}"></div> </stextarea> -->
    <!-- <div :style="{width:'600px',height:'600px',background:'blue'}"></div> -->
  </div>
</template>
<script>
import sinput from './components/sinput/sinput.vue'
import salter from './components/salter/salter.vue'

export default {
  name: "App",
  components: {
    sinput,
    salter
  },
  methods: {},
  data() {
    return {
      value: ''
    }
  },
  methods:{
    cancelHandle(e) {
      console.log(e)
    },
    successHandle(e) {
      console.log(e)
    }
  },
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
