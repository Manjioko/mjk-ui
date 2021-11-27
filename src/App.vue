<template>
  <div id="app">
    <s-loading :sIsLoading="false" />
    <div>
      <schatbox :sSelf="true">
        <p>
          请二位认为温热认为人情味若角件你爱我人eternal和摇篮遥㐱留个脚印换二恶烷抮的五七二作拖欠
          㐱销售的
        </p>
      </schatbox>
    </div>
    <div>
      <schatbox :sSelf="false">
        <p>
          请二位认为温热认为人情味若角件你爱我人eternal和摇篮遥㐱留个脚印换二恶烷抮的五七二作拖欠
          㐱销售的
        </p>
      </schatbox>
    </div>
    <div>
      <schatbox :sSelf="true">
        <p>
          请二位认为温热认为人情味若角件你爱我人eternal和摇篮遥㐱留个脚印换二恶烷抮的五七二作拖欠
          㐱销售的
        </p>
      </schatbox>
    </div>
    <div>
      <schatbox :sSelf="true">
        <p>
          请二位认为温热认为人情味若角件你爱我人eternal和摇篮遥㐱留个脚印换二恶烷抮的五七二作拖欠
          㐱销售的
        </p>
      </schatbox>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Mloading from './components/mloading/mloading.vue'
import schatbox from "./components/schatbox/schatbox.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Mloading
    schatbox,
  },
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
