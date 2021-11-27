<template>
  <div :class="{ 's-chatbox': true, 's-chatbox-animation': sAnimation }">
    <div class="s-chatbox-start" v-if="!sSelf"></div>
    <div
      :class="{
        's-chatbox-content': true,
        's-chatbox-other': !sSelf,
        's-chatbox-self': sSelf,
      }"
    >
      {{ sContent }}
      <slot></slot>
    </div>
    <div class="s-chatbox-end" v-if="sSelf"></div>
  </div>
</template>

<script>
export default {
  name: "s-chatbox",
  props: {
    sAnimation: {
      type: Boolean,
      default: false,
    },
    sContent: String,
    sSelf: {
      typeof: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
.s-chatbox {
  position: relative;
}
.s-chatbox-animation:active {
  animation: 1s s-chatboxkeyframe linear 1;
}
@keyframes s-chatboxkeyframe {
  from {
    transform: scale(1.3) rotate(00deg);
  }
  20% {
    transform: scale(1) rotate(30deg);
  }
  40% {
    transform: scale(1) rotate(0deg);
  }
  80% {
    transform: scale(0.7) rotate(-30deg);
  }
  to {
    transform: scale(1) rotate(0deg);
  }
}

.s-chatbox-other {
  position: absolute;
  left: 12px;
  background-color: #f7f7f7;
}
.s-chatbox-self {
  position: absolute;
  right: 12px;
  background-color: aquamarine;
}
.s-chatbox-content {
  /* background-color: aquamarine; */
  min-width: 20px;
  min-height: 27px;
  max-width: 230px;
  word-break: break-all;
  text-align: start;
  padding: 8px;
  border-radius: 5px;
}
.s-chatbox > div {
  display: inline-block;
}
.s-chatbox-end {
  width: 0;
  height: 0;
  position: absolute;
  top: 12px;
  right: 0;
  border-top: 10px solid transparent;
  border-left: 12px solid aquamarine;
  border-bottom: 10px solid transparent;
}
.s-chatbox-start {
  position: absolute;
  top: 12px;
  left: 0;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 12px solid #f7f7f7;
  border-bottom: 10px solid transparent;
}
</style>