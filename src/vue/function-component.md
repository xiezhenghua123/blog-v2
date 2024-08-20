---
author: 菜鸡小谢
date: 2023-07-22
category: Vue
title: 函数式调用弹窗实现(vue版)
original: true
---

### demo实现

（项目vue版本为3，demo演示只能使用vue3）

<button @click="openDialog">vue3打开弹窗</button>

<script setup>
import openDialog from '@components/dialog-vue3/index.js'
// const openDialogVue3 = openDialog
</script>

::: details vue2代码

```javascript
import templateVue from './index.vue'

export default function openDialog(options) {
  const DialogConstructor = Vue.extend(templateVue)
  const instance = new DialogConstructor({
    propsData: options
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}

```

```vue
<template>
 <div class="video-play-dialog">
   <div class="dialog-mask"></div>
   <div class="close-btn" @click="closeDialog()"></div>
   <div class="dialog-wrapper">
     {{ props.title }}
   </div>
 </div>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
const { proxy: instance } = getCurrentInstance()

const props = defineProps({
 title: {
   type: String,
   default: '标题'
 }
})

// 卸载组件
const closeDialog = () => {
 instance && instance.$el && instance.$el.parentNode && instance.$el.parentNode.removeChild(instance.$el)
 instance && instance.$destroy()
}
</script>
<style lang="scss" scoped>
.video-play-dialog {
 position: absolute;
 z-index: 999;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 pointer-events: auto;
 .dialog-mask {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.5);
 }
 .close-btn {
   position: absolute;
   top: 56px;
   right: 50px;
   width: 48px;
   height: 48px;
   border-radius: 50%;
   background-color: #ccc;
   cursor: pointer;
 }

 .dialog-wrapper {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   margin: auto;
   width: 1183px;
   height: 665px;
   background-color: #fff;
   padding: 70px 60px 48px;
 }
}
</style>
```

:::

::: details vue3代码

```javascript
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
```

```vue
<template>
  <div class="video-play-dialog">
    <div class="dialog-mask"></div>
    <div class="close-btn" @click="props.close()">关闭</div>
    <div class="dialog-wrapper">
      {{ props.title }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  close: {
    type: Function,
    default: () => {},
  },
});
</script>
<style lang="scss" scoped>
.video-play-dialog {
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: auto;
  .dialog-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .close-btn {
    position: absolute;
    top: 56px;
    right: 50px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dialog-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 1183px;
    height: 665px;
    background-color: #fff;
    padding: 70px 60px 48px;
  }
}
</style>
```

:::

### api介绍

vue2中实现该弹窗利用vue.extend方法，卸载时利用$destroy进行组件卸载。[入口](https://v2.cn.vuejs.org/v2/api/#Vue-extend )

vue3中实现该弹窗采用createVNode和render方法进行组件挂载和卸载。[入口](https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes )

