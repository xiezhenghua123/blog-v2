---
author: 菜鸡小谢
date: 2024-10-29
category: typescript
title: ts常见类型报错
isOriginal: true
---
**1、类型“undefined”不能作为索引类型使用。ts(2538)**

![1734923022535](image/common-error/1734923022535.png)

解决方案：使用对象映射类型

![1734926060016](image/common-error/1734926060016.png)

**2、接口只能扩展使用静态已知成员的对象类型或对象类型的交集。ts(2312)**

![1734924039521](image/common-error/1734924039521.png)

解决方法：使用type类型

![1734924391141](image/common-error/1734924391141.png)
