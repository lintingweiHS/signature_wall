/**
 * 统一导出文件
 */
// 导入Vue组件
import signatureWall from "./components/signatureWall.vue";
import vueSignature from "vue-signature";
// 导入指令
import Dire1 from "./directive/Dire1";
import Dire2 from "./directive/Dire2";

// 存储组件列表
const components = [signatureWall, vueSignature];
// 存储指令列表
const directives = { Dire1, Dire2 };

// 定义install方法
const install = function(Vue) {
  // 遍历注册所有的组件
  components.map(com => {
    Vue.component(com.name, com);
  });

  // 遍历所有的指令
  Object.keys(directives).map(key => {
    Vue.directive(key, directives[key]);
  });
};

// 引入
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  // 组件列表
  ...components,
  // 指令列表
  ...directives
};
