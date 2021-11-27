<template>
  <div id="loading" v-if="sIsLoading ? sIsLoading : false">
      <div class="s-loading" :style="sStyle">
        <div class="anBox" v-if="sBoxShow !== undefined && sBoxShow !== null ? sBoxShow : true">
          <div class="anBoxChild" v-for="key in 4" :key="key"></div>
        </div>
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 's-loading',
  props: {
    sIsLoading:Boolean,
    sStyle: Object,
    sBoxShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  mounted() {
    // console.log('====================='+this.mBoxShow)
  }
}
</script>

<style>
body{
    padding: 0;
    margin: 0;
}
.s-loading {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(66, 66, 66, 0.7);
    width: 100%;
    height: 100%;
    /* opacity: 0.5; */
}
.anBox {
  position: absolute;
  height: 30px;
  width: 200px;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.anBox>div {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 10px;
  border-radius: 40px;
  background-color: white;
}

.anBoxChild:nth-child(1) {
  background-color: rgb(253, 253, 253);
  animation: 1s upspring linear infinite;
}
.anBoxChild:nth-child(2) {
  background-color: rgb(224, 223, 223);
  animation: 1s 0.2s  upspring linear infinite;
}
.anBoxChild:nth-child(3) {
  background-color: rgb(189, 188, 188);
  animation: 1s 0.4s  upspring linear infinite;
}
.anBoxChild:nth-child(4) {
  background-color: rgb(167, 167, 167);
  animation: 1s 0.6s upspring linear infinite;
}
@keyframes upspring {
  /* from {
    transform: translateY(0px);
  } */
  70% {
    transform: translateY(0px);
    
  }
  to {
    transform: translateY(-30px);
  }
}

</style>