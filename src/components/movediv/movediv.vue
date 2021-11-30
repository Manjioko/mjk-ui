<template>
  <div
    class="s-movediv"
    @mousedown="handleDrage"
    :style="{
      width: sWidth,
      height: sHeight,
      position: 'absolute',
      left: left,
      top: top,
    }"
    :id="'s_move_div_box_default' + getTime"
    ref="s_move_div_box"
  >
    <div class="s-movediv-top" :id="'s_move_div_box_top_' + getTime"></div>
    <div class="s-movediv-right" :id="'s_move_div_box_right_' + getTime"></div>
    <div class="s-movediv-bottom" :id="'s_move_div_box_bottom_' + getTime"></div>
    <div class="s-movediv-left" :id="'s_move_div_box_left_' + getTime"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-movediv",
  props: {
    sLimit: {
      type: Boolean,
      default: false,
    },
    sBorder: {
      type: Boolean,
      default: true
    },
    sWidth: {
      type: String,
      default: '200px'
    },
    sHeight: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      left: 0,
      top: 0,
      beforeLeft: 0,
      beforeTop: 0,
      afterLeft: 0,
      afterTop: 0,
      id: "",
      originWidth: 400,
      originHeight: 400,
      getTime: new Date().getTime() + Math.floor(Math.random() * 9999),
    };
  },
  methods: {
    // 点击鼠标
    handleDrage(event) {
      event.preventDefault();
      // 获取id
      this.id = event.target.id;
      // 获取id相应的父节点,主要的作用就是要找 id="s_move_div_box_default" 这个元素
      this.target = event.target.parentNode;

      // 设置move_div的相对宽高
      this.originWidth = parseInt(event.target.parentNode.offsetWidth);
      this.originHeight = parseInt(event.target.parentNode.offsetHeight);

      // 释放移动事件
      this.dragable = true;

      // 保存开始移动前的 X Y轴坐标,主要作用是后面的事件可以根据移动前的坐标
      // 判断出目标移动的距离
      this.beforeLeft = event.pageX;
      this.beforeTop = event.pageY;
    },
    handleDefault(event) {
      let topHeight = parseInt(this.afterTop) + event.pageY - this.beforeTop;
      let leftWidth = parseInt(this.afterLeft) + event.pageX - this.beforeLeft;
      let maxHeight =
        this.target.offsetHeight -
        document.getElementById(this.id).offsetHeight;
      let maxWidth =
        this.target.offsetWidth - document.getElementById(this.id).offsetWidth;
      let isFixed = this.target?.style?.position ?? "static";
      // 如果父级元素position 设置为 relative,则将move_box的移动范围限制在其父级元素的宽高范围之内
      if (isFixed === "relative") {
        if (topHeight > maxHeight) {
          this.top = maxHeight + "px";
        } else if (topHeight < 0) {
          this.top = 0 + "px";
        } else {
          this.top = topHeight + "px";
        }

        if (leftWidth > maxWidth) {
          this.left = maxWidth;
        } else if (leftWidth < 0) {
          this.left = 0 + "px";
        } else {
          this.left = leftWidth + "px";
        }
      } else {
        // 如果默认情况下,move_box移动范围不受限制
        this.top = topHeight + "px";
        this.left = leftWidth + "px";
      }
    },
    handleMove_box_top(event) {
      let el = this.target;
      let addHeight = this.beforeTop - event.pageY;
      let finalHeight = this.originHeight + addHeight;
      let settedHeight = parseInt(this.sHeight);
      // console.log(settedHeight)
      if (finalHeight > settedHeight) {
        // 开始向上拉高
        el.style.height = finalHeight + "px";
        // move_div被拉长后更新Y轴坐标
        this.top = parseInt(this.afterTop) - addHeight + "px";
      }
    },
    handleMove_box_right(event) {
      let el = this.target;
      let addWidth = event.pageX - this.beforeLeft;
      let finalWidth = this.originWidth + addWidth;
      let settedWidth = parseInt(this.sWidth);
      if (finalWidth > settedWidth) {
        // 开始向右拉长
        el.style.width = finalWidth + "px";
      }
    },
    handleMove_box_bottom(event) {
      let el = this.target;
      let addHeight = event.pageY - this.beforeTop;
      let finalHeight = this.originHeight + addHeight;
      let settedHeight = parseInt(this.sHeight);
      if (finalHeight > settedHeight) {
        // 开始向下拉高
        el.style.height = finalHeight + "px";
      }
    },
    handleMove_box_left(event) {
      let el = this.target;
      let addWidth = this.beforeLeft - event.pageX;
      let finalWidth = this.originWidth + addWidth;
      let settedWidth = parseInt(this.sWidth);
      if (finalWidth > settedWidth) {
        // 开始向右拉长
        el.style.width = finalWidth + "px";
        this.left = parseInt(this.afterLeft) - addWidth + "px";
      }
    },
  },
  mounted() {
    // move_box 移动范围限制在其父级之内
    if (this.sLimit) {
      this.$refs.s_move_div_box.parentNode.style.position = "relative";
    }
    if(!this.sBorder) {
      this.$refs.s_move_div_box.style.border = 'none'
    }

    // 松开鼠标
    document.addEventListener("mouseup", (event) => {
      event.preventDefault();
      if (this.dragable) {
        // 更新移动后的 X Y轴坐标
        this.afterLeft = this.left;
        this.afterTop = this.top;
        // 锁定移动处理事件
        this.dragable = !this.dragable;
      }
      // 更新宽高
      this.originWidth = parseInt(this.target?.style?.width ?? this.sWidth);
      this.originHeight = parseInt(this.target?.style?.width ?? this.sHeight);
    });

    // 移动鼠标
    document.addEventListener("mousemove", (event) => {
      if (this.dragable) {
        // 主体move_div,只负责移动
        if (this.id.includes("s_move_div_box_default")) {
          this.handleDefault(event);
        } else if (this.id.includes("s_move_div_box_top")) {
          // move_div的顶部栏
          this.handleMove_box_top(event);
        } else if (this.id.includes("s_move_div_box_right")) {
          // move_div的右侧边栏
          this.handleMove_box_right(event);
        } else if(this.id.includes("s_move_div_box_bottom")) {
          // move_div的底部栏
          this.handleMove_box_bottom(event)
        } else if(this.id.includes("s_move_div_box_left")) {
          // move_div 的左侧边栏
          this.handleMove_box_left(event)
        }
      }
    });
  },
};
</script>

<style>
.s-movediv {
  /* width: 400px;
  height: 400px; */
  /* background: red; */
  /* position: fixed;
  top: 300px;
  left: 500px; */
  border: 1px dashed rgb(153, 128, 124);
  z-index: 9999;
}

.s-movediv-top {
  width: 100%;
  height: 5px;
  /* background-color: aqua; */
  position: absolute;
  top: 0;
  cursor: n-resize;
}
.s-movediv-right {
  width: 5px;
  height: 100%;
  /* background-color: rgb(0, 255, 128); */
  position: absolute;
  right: 0;
  cursor: e-resize;
}
.s-movediv-bottom {
  width: 100%;
  height: 5px;
  /* background-color: rgb(179, 255, 0); */
  /* margin-top: 100%; */
  position: absolute;
  bottom: 0;
  cursor: s-resize;
}

.s-movediv-left {
  /* width: 2%; */
  width: 5px;
  height: 100%;
  /* background-color: rgb(0, 174, 255); */
  position: absolute;
  left: 0;
  cursor: w-resize;
}
</style>