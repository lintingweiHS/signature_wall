<template>
  <div class="signature-wall" :style="{ width, height }">
    <vueSignature
      ref="signature"
      class="sign-wrap"
      :sigOption="option"
      :disabled="disabled"
    ></vueSignature>
    <div
      class="nameBg"
      :style="{
        'font-size': size,
        textAlignLast: value.length > 1 ? 'justify' : ''
      }"
    >
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  name: "signatureWall",
  props: {
    value: {
      type: String,
      default: () => {
        return "";
      }
    },
    option: {
      type: Object,
      default: () => {
        return {
          penColor: "rgb(0, 0, 0)",
          backgroundColor: "rgba(255,255,255,0)",
          minWidth: 3,
          maxWidth: 5
        };
      }
    },
    disabled: Boolean,
    width: String,
    height: String,
    size: String
  },
  data() {
    return {};
  },
  methods: {
    isEmpty() {
      return this.$refs.signature.isEmpty();
    },
    save() {
      return this.$refs.signature.save();
    },
    clear() {
      return this.$refs.signature.clear();
    },
    fromDataURL(url) {
      return this.$refs.signature.fromDataURL(url);
    }
  }
};
</script>
<style scoped lang="scss">
.signature-wall {
  height: 50vh;
  position: relative;
  overflow: hidden;
  .sign-wrap {
    width: 100%;
    height: 100%;
    background-image: url("https://i.postimg.cc/CL7J4nMS/oBG.png");
    background-size: 100% 100%;
    background-position: center;
    position: absolute;
    top: 0;
    z-index: 10;
  }
  .nameBg {
    width: 100%;
    font-size: 240px;
    color: #999;
    text-align: center;
    box-sizing: border-box;
    padding: 0 10%;
    position: absolute;
    white-space: nowrap;
    top: 50%;
    transform: translateY(-50%);
  }
  .img-wrap {
    position: absolute;
    width: 94%;
    height: 53vh;
    text-align: center;
    img {
      width: 300px;
      margin-top: 20vh;
    }
  }
}
</style>
