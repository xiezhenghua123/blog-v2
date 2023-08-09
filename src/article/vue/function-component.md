---
author: 菜鸡小谢
date: 2023-07-22
category: Vue
title: 函数式调用弹窗实现(vue版)
original: true
---

### demo实现

（项目vue版本为3，demo演示只能使用vue3）

<button @click="openDialogVue3">vue3打开弹窗</button>

<script setup>
const openDialogVue2 = ()=>{
}
</script>

<style></style>



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
