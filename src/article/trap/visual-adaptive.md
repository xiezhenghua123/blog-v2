---
author: 菜鸡小谢
date: 2023-07-22
category: 大屏可视化
title: 可视化大屏自适应的理解
isOriginal: true
---

### 前言

在工作中，我们或多或少会接触到大屏可视化的项目，对于大屏可视化的适配，是一大技术点。

### 可视化适配方案

通过市面上多种方案的对比，最常见也就三种方案，（vh、vw）方案、rem方案以及scale方案。接下来将分别介绍三种方案。

| 方案       | 原理                                                         | 优点                                                         | 缺点                                                         |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| vh、vw方案 | 配合[postcss-px-to-viewport](https://www.npmjs.com/package/postcss-px-to-viewport)插件，将设计稿的px值自动转换为vw或者vh。 | ①灵活性高，只需要将插件的viewportWidth属性配置成设计稿即可。<br />②不会出现留白。<br /> | ①项目中使用echarts图标时，echarts图表中的px值需要根据屏幕宽度动态设置。所以需要手写一个计算比例的函数。<br />②行内样式的px值需要自己手动转换。 |
| rem方案    | 配合[postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem)插件，将设计稿的px值自动转换为rem，然后再根据屏幕宽度自动设置根html的font-size的大小。 | ①将postcss-pxtorem的rootValue配置和设计稿一样的即可<br />②不会出现留白 | ①项目中使用echarts图标时，echarts图表中的px值需要根据屏幕宽度动态设置。所以需要手写一个计算比例的函数。<br />②行内样式的px值需要自己手动转换。<br />③需要手动写一个函数自动设置根html的font-size的值。 |
| scale方案  | 根据屏幕宽度或者高度，动态设置scale的值                      | ①不用转换px值。<br />②不用动态设置echarts中的px值。          | ①当屏幕宽高比例与设计稿比例不一致时，两侧可能出现留白。      |

经过实践，

### 相关代码

```javascript
import { onMounted, onUnmounted, ref } from 'vue'
// 将px值自动转换为rem值
export function px2rem(px: number, designRem = 16) {
  return px / designRem + 'rem'
}

// 根据宽度缩放比例，将px值自动转换为vw值
export function px2vw(px: number, designWidth = 1920) {
  return (px / designWidth) * 100 + 'vw'
}

// 根据宽度缩放比例，自动计算echarts的px值
export function getEchartsPx(px: number, designWidth = 1920) {
  const html = document.documentElement
  const width = html.clientWidth
  const scale = width / designWidth
  return px * scale
}

// 根据宽度缩放比例，自动设置font-size
export function setFontSize(designWidth = 1920) {
  const html = document.documentElement
  const width = html.clientWidth
  // 缩放比例
  const scale = width / designWidth
  html.style.fontSize = Number(getComputedStyle(html).fontSize.replace('px', '')) * scale + 'px'
}

// 根据宽度和高度，自动计算scale
export function getScale(designWidth = 1920, designHeight = 1080) {
  const scale = ref<number>(1)
  const html = document.documentElement
  const width = html.clientWidth
  const height = html.clientHeight
  scale.value = Math.min(width / designWidth, height / designHeight)
  return scale
}

// 大小变化时，监听resize方法
export function useResize(fn: () => void) {
  onMounted(() => {
    fn()
    window.addEventListener('resize', fn)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', fn)
  })
}

```



### 注意点

①使用scale缩放方法时，请使用绝对定位或者将body元素overflow:hideen，否则会出现滚动条。

②使用scale缩放方式时，如果使用了gis地图，会存在点击偏差的情况，这种可以嵌入iframe或者将地图板块和其他数据面板分隔开，动态计算地图板块的宽高。

