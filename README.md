# signature_wall

> A electronic signature component by Vue.js

## Reference and Thanks

[signature_pad]("https://github.com/szimek/signature_pad") [vue-signature]("https://github.com/WangShayne/vue-signature")

## preview

![signature_wall show](https://i.postimg.cc/yYwpfQDB/1661421608548.jpg)



## API

#### Props

name|type|default|description
:-:|:--:|:--:|:-:
value|String|""|Signature Background Name
option|Object|{penColor: "rgb(0, 0, 0)",backgroundColor: "rgba(255,255,255,0)",minWidth: 3,maxWidth: 5,}|PenColor,backgroundColor,minWidth,maxWidth
disabled|Boolean|false|disabled
width|String|"100%"|parent container width
height|String|"50vh"|parent container height
size|String|"240px"|backgroundName Size

#### Methods

name|type|description
:-:|:--:|:-:
save |base64 |save image
clear | |clear canvas
isEmpty | |Returns true if canvas is empty, otherwise returns false
fromDataURL |base64 |Draws signature image from data URL.

## Usage

> npm install @kayt/signature_wall

**main.js**

```javascript
import signatureWall from "@okayt/signature_wall"
Vue.use(signatureWall);
```

**App.vue**

```vue
<template>
  <div id="app">
    <signature-wall
      ref="signature"
      :value="value"
      :option="option"
      size="100px"
      :disabled="disabled"
    ></signature-wall>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      value: "周杰伦",
      option: {
        penColor: "rgb(23, 92, 19)",
        backgroundColor: "rgba(0,0,0,0)",
        minWidth: 3,
        maxWidth: 5,
      },
      disabled: false,
    };
  },
};
</script>
```
