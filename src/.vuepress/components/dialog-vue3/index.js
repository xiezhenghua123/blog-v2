import templateVue from "./index.vue";
import { createVNode, render } from "vue";

export default (options) => {
  const div = document.createElement("div");
  const close = () => {
    render(null, div);
  };
  const vm = createVNode(templateVue, {
    ...options,
    close: close,
  });
  render(vm, div);
  document.querySelector("#app")?.appendChild(div);
};
