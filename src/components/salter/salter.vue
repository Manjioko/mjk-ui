<template>
  <div>
    <div class="s-alter" :style="sStyle">
      <div class="s-alter-show-massage">
        <slot></slot>
        <div class="s-alter-msg-content">
          <span>{{ sMsg }}</span>
        </div>
        <div>
          <span
            ><button @click="cancelHandle" class="s-alter-btn-cancel">
              取消
            </button></span
          >
          <span
            ><button @click="successHandle" class="s-alter-btn-success">
              确定
            </button></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-alter",
  props: {
    sMsg: String,
    // sIsLoading:Boolean,
    sStyle: Object,
    // sBoxShow: {
    //   type: Boolean,
    //   default: true
    // }
  },
  data() {
    return {};
  },
  methods: {
    cancelHandle() {
      this.$emit("sNo", false);
    },
    successHandle() {
      this.$emit("sYes", true);
    },
  },
  mounted() {},
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
.s-alter {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(66, 66, 66, 0.7);
  width: 100%;
  height: 100%;
  z-index: 9999;
  /* opacity: 0.5; */
}
.s-alter-show-massage {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 55vw;
  height: 15vh;
  background: white;
  margin: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 1px #414f56;
}
.s-alter-msg-content {
  text-align: center;
  font-size: 20px;
  margin-top: 3vh;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px;
}
.s-alter-btn-cancel {
  width: 23vw;
  outline: none;
  border: none;
  height: 4vh;
  position: absolute;
  left: 10px;
  bottom: 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 2px 0px rgb(100 95 95);
  background: #f9f9f9;
  font-size: 18px;
}
.s-alter-btn-success {
  width: 23vw;
  outline: none;
  border: none;
  height: 4vh;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 2px 0px rgb(100 95 95);
  background: #f9f9f9;
  font-size: 18px;
}
.s-alter-btn-success:active {
    background: rgba(125, 211, 125, 0.678);
}
.s-alter-btn-cancel:active {
    background: rgba(224, 99, 99, 0.74);
}
</style>