---
author: 菜鸡小谢
date: 2025-02-12
category: js
title: 精准倒计时实现
isOriginal: true
---
### **为什么使用setTimeout、setInterval做倒计时不准？**

1、主要原因与JavaScript的执行机制有关。JavaScript是单线程的，这意味着它一次只能执行一个任务。当你设置一个计时器时，计时器的回调函数会被放入任务队列中，等待事件循环来处理。然而，如果在计时器到期时，调用栈中有其他任务正在执行，计时器的回调函数就会被延迟执行。这种延迟会导致计时器不准确。

2、此外，浏览器对 `setTimeout` 和 `setInterval` 的最小时间间隔有一定的限制，通常在4毫秒或更高，这也会影响计时的精度。系统资源的限制，如CPU负载过高，也可能导致计时器的回调函数被延迟执行。

知道了原因，问题就比较好解决了。

既然由于js是单线程机制，那我们就专门开一个线程来进行倒计时不就行了，[web worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) 登场。

### **web worker 方案**

```typescript
import { ref } from 'vue'

let countDownWorker: Worker | null = null
export default function useCountDownWorker(defaultTime: number) {
  const seconds = ref(defaultTime)
  function initCountDownWorker() {
    if (!countDownWorker) {
      countDownWorker = new Worker(
        new URL('./count-down.work.js', import.meta.url),
        { type: 'module' }
      )
      countDownWorker.postMessage({ type: 'ready', data: defaultTime })
      countDownWorker.addEventListener('message', function (event) {
        const { type, data } = event.data
        switch (type) {
          case 'ready':
            console.log(data)
            break
          case 'data':
            seconds.value = data
            break
          case 'stop':
            break
          case 'end':
            countDownWorker?.terminate()
            countDownWorker = null
            break
          case 'reset':
            seconds.value = data
            break
        }
      })
      countDownWorker.addEventListener('error', function (event) {
        console.log(event)
      })
    }
  }
  function startCountDown() {
    if (!countDownWorker) {
      initCountDownWorker()
    }
    countDownWorker?.postMessage({ type: 'start' })
  }
  function stopCountDown() {
    countDownWorker?.postMessage({ type: 'stop' })
  }
  function resetCountDown() {
    countDownWorker?.postMessage({ type: 'reset', data: defaultTime })
  }
  return { seconds, startCountDown, stopCountDown, resetCountDown }
}
```

count-down.work.js

```javascript
let seconds = 0
let interval = null

function countDown() {
  if (interval) {
    clearInterval(interval)
  }
  interval = setInterval(() => {
    if (seconds <= 0) {
      postMessage({ type: 'end' })
      return
    }
    seconds--
    postMessage({ type: 'data', data: seconds })
  }, 1000)
}

function stop() {
  clearInterval(interval)
  postMessage({ type: 'stop' })
}

function reset(data) {
  clearInterval(interval)
  seconds = data
  postMessage({ type: 'reset', data: seconds })
}

function ready() {
  postMessage({ type: 'ready', data: 'it is ready' })
}

addEventListener('message', function (event) {
  const { type, data } = event.data
  switch (type) {
    case 'ready':
      seconds = data
      ready()
      break
    case 'start':
      countDown()
      break
    case 'stop':
      stop()
      break
    case 'reset':
      reset(data)
      break
  }
})

```

### **requestAnimationFrame方案**

除了单开一个线程外，还有另外一种方案，就是[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)方案，因为requestAnimationFrame对回调函数的调用频率通常与显示器的刷新率相匹配，最大限度地减少了阻塞和性能问题。具体实现如下

```typescript
import { ref, type Ref } from 'vue'
let requestAnimationFrameId: number | null = null
export default function useCountDownRAF(defaultTime: number) {
  const seconds = ref(defaultTime)
  function countDown(seconds: Ref<number>) {
    const end = performance.now() + seconds.value * 1000
    const step = () => {
      const now = performance.now()
      const remaining = Math.max(0, end - now)
      seconds.value = Math.round(remaining / 1000)
      if (remaining > 0) {
        requestAnimationFrameId = requestAnimationFrame(step)
      } else {
        seconds.value = 0
        if (requestAnimationFrameId) {
          cancelAnimationFrame(requestAnimationFrameId)
          requestAnimationFrameId = null
        }
      }
    }
    requestAnimationFrame(step)
  }
  function startCountDown() {
    if (seconds.value <= 0) {
      seconds.value = defaultTime
    }
    countDown(seconds)
  }
  function stopCountDown() {
    if (requestAnimationFrameId) {
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null
    }
  }
  function resetCountDown() {
    seconds.value = defaultTime
    stopCountDown()
  }
  return { seconds, startCountDown, stopCountDown, resetCountDown }
}

```

**注意**：使用requestAnimationFrame方案时，当页面置于后台时，requestAnimationFrame回调会暂停执行以节省性能，所以需要依托performance.now()（**这个更好，Date会存在系统时间被篡改的风险**）或者Date.now()来修正倒计时时间。