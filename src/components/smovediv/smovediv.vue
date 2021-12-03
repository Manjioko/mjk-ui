<template>
  <div
    class="s-movediv"
    @mousedown="handleDrage"
    :style="{
      width: sWidth,
      height: sHeight,
      position: 'fixed',
      left: left,
      top: top,
    }"
    :id="'s_move_div_box_default' + getTime"
    ref="s_move_div_box"
  >
    <div
      class="s-movediv-top"
      :id="'s_move_div_box_top_' + getTime"
      ref="s_move_div_box_top"
    ></div>
    <div
      class="s-movediv-right"
      :id="'s_move_div_box_right_' + getTime"
      ref="s_move_div_box_right"
    ></div>
    <div
      class="s-movediv-bottom"
      :id="'s_move_div_box_bottom_' + getTime"
      ref="s_move_div_box_bottom"
    ></div>
    <div
      class="s-movediv-left"
      :id="'s_move_div_box_left_' + getTime"
      ref="s_move_div_box_left"
    ></div>
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
      default: true,
    },
    sWidth: {
      type: String,
      default: "200px",
    },
    sHeight: {
      type: String,
      default: "200px",
    },
    sTop: Number,
    sLeft: Number,
  },
  data() {
    return {
      // 用于定位的坐标
      left: 0,
      top: 0,

      // 鼠标点击时的坐标
      beforeLeft: 0,
      beforeTop: 0,

      //鼠标松开后的坐标
      afterLeft: 0,
      afterTop: 0,

      // id
      id: "",

      // 元素初始化宽高
      originWidth: 400,
      originHeight: 400,

      // 时间戳
      getTime: new Date().getTime() + Math.floor(Math.random() * 99999),

      initLeft: 0,
      initTop: 0
    };
  },
  methods: {
    handleId(tg) {
      if (!tg.id || !tg.id.includes(this.getTime)) {
        if (tg.parentNode) {
          if (tg.parentNode.id && tg.parentNode.id.includes(this.getTime))
            return tg.parentNode.id;
          this.handleId(tg.parentNode);
        }
      }
      return tg.id
    },
    // 点击鼠标
    handleDrage(event) {
      event.preventDefault();
      // 获取id
      this.id = this.handleId(event.target)

      // 获取id相应的父节点,主要的作用就是要找 id="s_move_div_box_default" 这个元素
      this.target = event.currentTarget.parentNode;

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
      // 元素当前的坐标
      let topHeight = this.initTop + parseInt(this.afterTop) + event.pageY - this.beforeTop;
      let leftWidth = this.initLeft + parseInt(this.afterLeft) + event.pageX - this.beforeLeft;

      //有初始化top
      // if(this.initTop) {
      //   topHeight = this.initTop;
      //   this.initTop = null;
      // } else {
      //   topHeight = parseInt(this.afterTop) + event.pageY - this.beforeTop;
      // }

      // // 有初始化left
      // if(this.initLeft) {
      //   leftWidth = this.initLeft;
      //   this.initLeft = null;
      // } else {
      //   leftWidth = parseInt(this.afterLeft) + event.pageX - this.beforeLeft;
      // }

      // console.log(topHeight)
      // console.log(this.beforeTop)
      

      // 元素的父级宽高
      let parentHeight = this.target.offsetHeight;
      let parentWidth = this.target.offsetWidth;

      // 初始化时元素的本身的x y轴坐标
      let offsetTop = this.target.offsetTop;
      let offsetLeft = this.target.offsetLeft;

      // 元素本身的宽高
      let elHeight = document.getElementById(this.id).offsetHeight;
      let elWidth = document.getElementById(this.id).offsetWidth;

      // 元素可以移动的最大范围
      let refsLeft = this.$refs.s_move_div_box.parentNode.offsetLeft;
      let refsTop = this.$refs.s_move_div_box.parentNode.offsetTop;
      let maxHeight = this.sLimit? parentHeight - elHeight + refsTop : parentHeight - elHeight;
      let maxWidth = this.sLimit ? parentHeight - elHeight + refsLeft : parentHeight - elHeight;

      // 父元素是否存在大小并且大小超过元素本身的大小
      let isHasSize =
        parentHeight &&
        parentWidth &&
        parentHeight >= elHeight &&
        parentWidth >= elWidth;
      // 如果父级元素position 设置为 relative,则将move_box的移动范围限制在其父级元素的宽高范围之内

      if (this.sLimit) {
        // 父级元素如果没有move_div大,move_div就不会移动
        if (isHasSize) {
          if (topHeight > maxHeight) {
            this.top = maxHeight + "px";
          } else if (topHeight < offsetTop) {
            this.top = 0 + offsetTop + "px";
          } else {
            this.top = topHeight  + "px";
          }

          if (leftWidth > maxWidth) {
            this.left = maxWidth+ "px";
          } else if (leftWidth < offsetLeft) {
            this.left = 0 + offsetLeft + "px" 
          } else {
            this.left = leftWidth + "px";
          }
          this.$emit("sCoor",{top: parseInt(this.top), left: parseInt(this.left)})
        }
      } else {
        // 如果默认情况下,move_box移动范围不受限制
        this.top = topHeight + "px";
        this.left = leftWidth + "px";
        this.$emit("sCoor",{top: parseInt(this.top), left: parseInt(this.left)})
      }
    },
    handleMove_box_top(event) {
      let el = this.$refs.s_move_div_box;
      let addHeight = this.beforeTop - event.pageY;
      let finalHeight = this.originHeight + addHeight;
      let settedHeight = parseInt(this.sHeight);
      if (finalHeight > settedHeight) {
        // 开始向上拉高
        el.style.height = finalHeight + "px";
        // move_div被拉长后更新Y轴坐标
        this.top = parseInt(this.afterTop) - addHeight + "px";
      }
    },
    handleMove_box_right(event) {
      let el = this.$refs.s_move_div_box;
      let addWidth = event.pageX - this.beforeLeft;
      let finalWidth = this.originWidth + addWidth;
      let settedWidth = parseInt(this.sWidth);
      if (finalWidth > settedWidth) {
        // 开始向右拉长
        el.style.width = finalWidth + "px";
      }
    },
    handleMove_box_bottom(event) {
      let el = this.$refs.s_move_div_box;
      let addHeight = event.pageY - this.beforeTop;
      let finalHeight = this.originHeight + addHeight;
      let settedHeight = parseInt(this.sHeight);
      if (finalHeight > settedHeight) {
        // 开始向下拉高
        el.style.height = finalHeight + "px";
      }
    },
    handleMove_box_left(event) {
      let el = this.$refs.s_move_div_box;
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
      // move_div设置成和父级坐标轴一致
      this.top = this.$refs.s_move_div_box.parentNode.offsetTop + "px";
      this.left = this.$refs.s_move_div_box.parentNode.offsetLeft + "px";
      // 父级元素的偏移量要加入after中,主要作用在于帮助move_div定位父级元素的大小和坐标
      this.afterLeft = this.$refs.s_move_div_box.parentNode.offsetLeft;
      this.afterTop = this.$refs.s_move_div_box.parentNode.offsetTop;
    }
    // 设置border
    if (!this.sBorder) {
      this.$refs.s_move_div_box.style.border = "none";
    }
    // 设置top
    if(this.sTop) {
      this.top = this.sTop + 'px';
      this.initTop = this.sTop;
    }
    // 设置left
    if(this.sLeft) {
      this.left = this.sLeft + 'px';
      this.initLeft = this.sLeft;
    }

    // 组件挂载后也要发送一次坐标
    this.$emit("sCoor",{top: parseInt(this.top), left: parseInt(this.left)})

    // 松开鼠标
    document.addEventListener("mouseup", (event) => {
      event.preventDefault();
      if (this.dragable) {
        // 更新移动后的 X Y轴坐标
        this.afterLeft = this.left;
        this.afterTop = this.top;
        // 锁定移动处理事件
        this.dragable = !this.dragable;
        //清除初始化top left
        this.initLeft = 0;
        this.initTop = 0;
      }
      // 更新宽高
      this.originWidth = parseInt(this.target?.style?.width ?? this.sWidth);
      this.originHeight = parseInt(this.target?.style?.width ?? this.sHeight);
    });

    // 移动鼠标
    document.addEventListener("mousemove", (event) => {
      if (this.dragable) {
        // 主体move_div,只负责移动
        if (this.id?.includes("s_move_div_box_default")) {
          this.handleDefault(event);
        } else if (this.id?.includes("s_move_div_box_top")) {
          // move_div的顶部栏
          this.handleMove_box_top(event);
        } else if (this.id?.includes("s_move_div_box_right")) {
          // move_div的右侧边栏
          this.handleMove_box_right(event);
        } else if (this.id?.includes("s_move_div_box_bottom")) {
          // move_div的底部栏
          this.handleMove_box_bottom(event);
        } else if (this.id?.includes("s_move_div_box_left")) {
          // move_div 的左侧边栏
          this.handleMove_box_left(event);
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