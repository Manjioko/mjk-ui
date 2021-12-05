<template>
  <div class="s-input">
    <span class="s-input-span" v-if="sText">{{sText}}</span>
    <input
      :type="sType"
      class="s-input-content"
      :class="{ 's-input-password': !isText, 's-input-text': isText }"
      :placeholder="sPlaceholder"
      v-model="value"
    />
  </div>
</template>

<script>

export default {
  name: "s-input",
  props: {
    sType: {
      type: String,
      default: "password",
    },
    sText: {
        type: String,
        default: ''
    },
    sPlaceholder: {
        type: String,
        default:''
    },
    sValue: String
  },
  watch: {
      value: function() {
          console.log(this.value)
          this.$emit('sValue',this.value)
      }
  },
  computed: {
    isText() {
      return this.sType === "password" ? false : true;
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.s-input-content {
  width: 200px;
  height: 20px;
  outline: none;
  border-radius: 12px;
  border: 1px solid;
  color: rgb(109 140 179);
}
.s-input-password {
  font-size: 35px;
  padding: 5px;
  vertical-align: sub;
  letter-spacing: 8px;
}
.s-input-text {
  font-size: 18px;
  padding: 5px;
  
}
.s-input-span {
  font-size: 20px;
  color: rgb(66 91 139);
  margin-right: 10px;
}
</style>