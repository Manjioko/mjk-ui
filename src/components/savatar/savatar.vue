<template>
  <div class="s-avatar" :style="{ width: sWidth + 'px', height: sHeight + 'px' }">
    <div class="s-avatar-content">
      <img
        :src="sSrc"
        v-if="sSrc"
        alt=""
        class="s-avatar-img"
        :style="{ width: sWidth + 'px', height: sHeight + 'px' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "s-avatar",
  props: {
    sSrc: String,
    sWidth: {
      type: Number,
      default: 40,
    },
    sHeight: {
      type: Number,
      default: 40,
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
      
  },
};
</script>

<style>
/* .s-avatar {
  width: 40px;
  height: 40px;
} */
.s-avatar-img {
    border-radius: 4px;
}
</style>