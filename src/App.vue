<template>
  <div id="app">
    <!-- <s-loading :sIsLoading="false" /> -->
    <!-- <s-chatbox sContent="hello the world" :sSelf="true" :sAnimation="true" id="simg" /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <savatar sSrc='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' /> -->
    <div :style="{width:'500px',height:'400px',marginLeft:'100px'}">
      <stextarea :sLimit="true">
        <div :style="{width:'100%',height:'100%',background:'blue'}">
            <schatbox :sSelf="true">
              <div>
                悲喜李昌奎唱歌在声明中撒娇的疯狂练级啊撒旦看风景考虑到实际付款杨万里卡萨丁金风科技撒地方看见电视里开发撒大负荷计算
              </div>
            </schatbox>
        </div>
      </stextarea>
    </div>
    <div >
      <stextarea :sTop="400" :sLeft="400"><div :style="{width:'100%',height:'100%',background:'gray'}"></div></stextarea>
    </div>
    
    
    <!-- <stextarea :sLimit="true"><div>hello world</div></stextarea>
    <stextarea><div :style="{width:'100%',height:'100%',background:'green'}"></div> </stextarea>
    <stextarea><div id="hello" :style="{width:'100%',height:'100%',background:'gray'}"></div> </stextarea> -->
    <!-- <div :style="{width:'600px',height:'600px',background:'blue'}"></div> -->
  </div>
</template>
<script>
import schatbox from './components/schatbox/schatbox.vue';

import stextarea from "./components/smovediv/smovediv.vue";

export default {
  name: "App",
  components: {
    stextarea,
    schatbox,
  },
  methods: {
    handleCor(e) {
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
