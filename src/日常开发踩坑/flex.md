---
author: 菜鸡小谢
date: 2023-07-02
category: flex
title: 关于使用flex布局的一些思考
isOriginal: true
---
### Flex布局是什么？

Flex是Flexible Box的缩写，意为弹性布局，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局。

相关知识参考:   https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

### Flex布局常用场景

**1、居中**

传统的居中方法比较麻烦，比如position + margin、margin:auto等等，这些方法都有一定的局限性。

flex布局中设置居中非常的简单。盒子只要设置为flex盒子（display: flex）,主轴居中：justify-content:center;纵轴居中：align-items：center;

**2、均分**

父盒子使用flex布局，每个子盒子使用flex:1即可均分父盒子（原理为flex-grow:1）。

**3、圣杯布局**

传统实现圣杯布局需要利用浮动布局，比较麻烦。利用flex布局只需要将左右两个盒子固定宽度，中间盒子设置flex-grow:1; 就可以撑满剩余空间。

### Flex布局使用注意点

1、兼容性

以前使用flex布局需要考虑兼容性，现在基本都兼容了，不需要考虑。

2、子盒子使用flex-grow:1时，宽度或者高度**自动撑开**时超出剩余最大空间，需要将该盒子设置为width:0或者height:0（**ios有兼容性，用min-height或者min-width**）才能正常显示。

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title>
</head>
<style>
.father {
 height: 200px;
 width: 500px;
 background-color: red;
 display: flex;
 flex-direction: column;
}
.son-1 {
 height: 150px;
 background-color: blue;
}
.son-2 {
 flex: 1;
 height: 0; /* 重点 */
 background-color: green;

}

</style>
<body>
 <div class="father">
  <div class="son-1"></div>
  <div class="son-2">
   测试超出文本溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出
  </div>
 </div>
</body>
</html>
```
