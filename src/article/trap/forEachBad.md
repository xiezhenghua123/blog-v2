---
author: 菜鸡小谢
date: 2021-08-16
category: javascript
title: forEach中return失效
isOriginal: true
---

### **问题描述**

今天开发过程中遇到了一个关于 forEach 问题，在forEach中使用return无法中断forEach的循环。代码如下：

```javascript
function handleMoney(code, monObjArr, range) {
      if (Object.keys(range).length !== 0) {
        return [parseInt(range.min), parseInt(range.max)]
      }
      let arr
      monObjArr.forEach(item => {
        if (item.code === code) {
          arr = [item.min, item.max]
          return
        }
      })
      return arr
    },
```

上面这段代码执行时，总是返回 undefind。

### **解决办法**

经过查找网上资料发现，forEach 方法使用 return 的作用是中断当前循环，不会中断forEach的循环，而且 使用 break 和 contuine 关键字也没用。如果要中断循环，做法只能是抛出错误或者使用其他数组方法。

正确代码如下：

```javascript
function handleMoney(code, monObjArr, range) {
  if (Object.keys(range).length !== 0) {
    return [parseInt(range.min), parseInt(range.max)]
  }
  let arr
  try {
    monObjArr.forEach((item, index) => {
      if (item.code === code) {
       arr = [item.min, item.max]
        throw 'error'
      }
    })
  } catch (e) {
    console.log(e)
  }
  return arr
}
```

以上函数实现最好的做法是使用find函数

```javascript
function handleMoney(code, monObjArr, range) {
  if (Object.keys(range).length !== 0) {
    return [parseInt(range.min), parseInt(range.max)]
  }
  const getMoneyArr = monObjArr.find(item=>item.code === code)
  return getMoneyArr ? [item.min, item.max] : undefined
}
```

