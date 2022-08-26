<template>
  <div id="app">
    <signature-wall
      ref="signature"
      :value="value"
      :option="option"
      size="10px"
      :disabled="disabled"
    ></signature-wall>
    <button @click="clear">取消</button>
    <button @click="confirm">保存</button>
    <button @click="back">回滚</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      value: "林林林",
      option: {
        penColor: "rgb(23, 92, 19)",
        backgroundColor: "rgba(0,0,0,0)",
        minWidth: 3,
        maxWidth: 5
      },
      disabled: false,
      png: null
    };
  },
  methods: {
    clear() {
      this.$refs.signature.clear();
    },
    confirm() {
      this.png = this.$refs.signature.save();
    },
    back() {
      this.$refs.signature.fromDataURL(this.png);
    }
  }
};
</script>

<style lang="scss"></style>
