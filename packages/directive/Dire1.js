export default {
  bind: () => {
    console.log("this is dir1 bind");
  },
  inserted: (el, binding) => {
    console.log("dir1 insert" + el);
  }
};
