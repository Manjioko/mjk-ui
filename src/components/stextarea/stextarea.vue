<template>
  <div
    class="s-textarea"
    @mousedown="handleDrage"
    :style="{
      width: '200px',
      height: '200px',
      position: 'fixed',
      left: left,
      top: top,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-avatar",
  props: {},
  data() {
    return {
      left: 0,
      top: 0,
      beforeLeft: 0,
      beforeTop: 0,
      afterLeft: 0,
      afterTop: 0,
    };
  },
  methods: {
    handleDrage(event) {
      this.dragable = true;
      this.beforeLeft = event.pageX;
      this.beforeTop = event.pageY;
    },
  },
  mounted() {
    document.addEventListener("mouseup", () => {
      if (this.dragable) {
        this.afterLeft = this.left;
        this.afterTop = this.top;
        this.dragable = !this.dragable;
      }
    });

    document.addEventListener("mousemove", (event) => {
      if (this.dragable) {
        let textarea = this.$refs.s_textarea;
        this.top =
          parseInt(this.afterTop) + event.pageY - this.beforeTop + "px";
        this.left =
          parseInt(this.afterLeft) + event.pageX - this.beforeLeft + "px";
      }
    });
  },
};
</script>

<style>
.s-textarea {
  /* width: 400px;
  height: 400px; */
  background: red;
  /* position: fixed;
  top: 300px;
  left: 500px; */
}

.s-textarea-top {
  width: 100%;
  height: 5px;
  background-color: aqua;
  position: absolute;
  top: 0;
  cursor: n-resize;
}
.s-textarea-right {
  width: 2px;
  height: 100%;
  background-color: rgb(0, 255, 128);
  position: absolute;
  right: 0;
  cursor: e-resize;
}
.s-textarea-bottom {
  width: 100%;
  height: 2px;
  background-color: rgb(179, 255, 0);
  /* margin-top: 100%; */
  position: absolute;
  bottom: 0;
  cursor: s-resize;
}

.s-textarea-left {
  /* width: 2%; */
  width: 2px;
  height: 100%;
  background-color: rgb(0, 174, 255);
  position: absolute;
  left: 0;
  cursor: w-resize;
}
</style>