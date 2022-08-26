export default {
  bind: () => {
    console.log("this is dir2 bind");
  },
  inserted: (el, binding) => {
    console.log("dir2 insert" + el);
  }
};
