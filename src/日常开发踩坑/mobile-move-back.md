---
author: 菜鸡小谢
date: 2025-11-03
category: 日常开发踩坑
title: 移动端侧滑关闭弹窗实践（History 路由 & uni-popup）
isOriginal: true
---

### 背景描述

为了提升移动端弹窗的交互一致性，需要在 H5 与 uni-app 两端实现“侧滑优先关闭弹窗”的体验：

- 当用户在 H5 页面触发左滑返回手势时，应优先关闭当前弹窗，而非直接离开页面。
- 同一业务还运行在 uni-app 宿主中，要求以统一的方式维护弹窗栈，暴露入栈 / 出栈能力。
- 方案需要记录弹窗数量，方便业务查询与埋点统计。
- iOS App 端受限于原生手势体系，本方案暂无法覆盖，需要额外提示。

### H5 方案：History + IntersectionObserver

#### 核心思路

1. **压栈时写入虚拟路由**：调用 `history.pushState` 写入一个占位路由，拦截浏览器的返回手势。
2. **出栈时清理路由**：在关闭弹窗后调用 `history.back` 或 `history.replaceState`，恢复原始路由。
3. **结合 IntersectionObserver**：监听弹窗节点，可及时感知手势触发导致的可见性变化，兜底同步状态。
4. **全局弹窗栈**：记录弹窗数量、元数据与监听器，暴露 `pushPopup`、`popPopup` 供业务调用。

#### 代码示例

```javascript
// 全局弹窗栈，避免重复注册
const popupStack = [];

// 统一存储弹窗数量与监听器，便于调试与清理
const popupStore = {
  count: 0,
  observers: new Map(),
};

function pushPopup(popupId, element) {
  // 已存在相同弹窗则忽略，防止重复压栈
  if (popupStack.includes(popupId)) return;
  popupStack.push(popupId);
  popupStore.count = popupStack.length;

  // 写入虚拟路由，拦截浏览器回退手势
  history.pushState({ popupId }, document.title, location.href);

  // 监听弹窗可见性，辅助兜底同步
  const observer = new IntersectionObserver((entries) => {
    const isVisible = entries[0]?.isIntersecting;
    if (!isVisible) {
      // 当弹窗不可见时触发出栈流程
      popPopup(popupId);
    }
  });

  observer.observe(element);
  popupStore.observers.set(popupId, observer);
}

function popPopup(popupId) {
  const index = popupStack.indexOf(popupId);
  if (index === -1) return;

  // 先关闭 UI 层弹窗，实际逻辑按框架自行实现
  closePopupUI(popupId);

  // 清理 Observer，更新栈内数据
  popupStore.observers.get(popupId)?.disconnect();
  popupStore.observers.delete(popupId);
  popupStack.splice(index, 1);
  popupStore.count = popupStack.length;

  // 所有弹窗关闭后回退历史记录
  if (popupStack.length === 0) {
    history.back();
  }
}

// 全局监听 popstate，优先关闭栈顶弹窗
window.addEventListener('popstate', () => {
  const lastPopupId = popupStack.at(-1);
  if (lastPopupId) {
    popPopup(lastPopupId);
  }
});

function closePopupUI(popupId) {
  // 这里填充框架内的关闭逻辑（Vue/React 等）
}

export { pushPopup, popPopup };
```

#### 开发注意事项

- **多弹窗叠加**：栈结构保证“后开先关”，避免一次手势触发多个弹窗关闭。
- **历史记录清理**：在 `beforeunload` 或路由切换时清理所有 `observer`，防止内存泄漏。
- **异常兜底**：若业务主动调用 `history.go(-N)`，`IntersectionObserver` 会感知弹窗不可见并自动出栈。
- **SEO 安全**：虚拟路由与原 URL 一致，不会产生额外可索引页面。

### App 方案：uni-popup + backpress

#### 核心思路

1. **监听 `uni-popup` 的 `change` 事件**：在弹窗打开 / 关闭时同步维护 Vuex 弹窗栈。
2. **拦截 `onBackPress` 生命周期**：捕获 Android 返回键与侧滑手势，优先关闭当前弹窗。
3. **Vuex 全局状态**：统一维护弹窗 `id`、附加数据，方便跨页面调用。
4. **iOS 限制说明**：iOS 原生侧滑不会触发 `onBackPress`，需在交互上给予补充提示。

#### Vuex 模块示例

```javascript
// store/modules/popup.js
export default {
  namespaced: true,
  state: () => ({
    stack: [],
  }),
  mutations: {
    PUSH(state, payload) {
      const exists = state.stack.find((item) => item.id === payload.id);
      if (!exists) {
        state.stack.push(payload);
      }
    },
    POP(state, popupId) {
      state.stack = state.stack.filter((item) => item.id !== popupId);
    },
  },
  getters: {
    top: (state) => state.stack[state.stack.length - 1],
    count: (state) => state.stack.length,
  },
};
```

#### 组件接入示例

```vue
<template>
  <uni-popup ref="popup" type="center" @change="handleChange">
    <!-- 弹窗内容 -->
  </uni-popup>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('popup', ['top']),
  },
  onBackPress() {
    // Android 侧滑或返回键触发
    if (this.top) {
      this.closePopup(this.top.id);
      return true; // 阻止默认返回
    }
    return false;
  },
  methods: {
    ...mapMutations('popup', ['PUSH', 'POP']),
    openPopup(id, extra) {
      // 记录当前弹窗，并打开 uni-popup
      this.PUSH({ id, extra });
      this.$refs.popup.open();
    },
    closePopup(id) {
      this.$refs.popup.close();
      this.POP(id);
    },
    handleChange(e) {
      const { show } = e.detail;
      if (!show) {
        // 弹窗关闭时自动出栈，防止遗漏
        const current = this.top;
        if (current) {
          this.POP(current.id);
        }
      }
    },
  },
};
</script>
```

#### iOS 兼容策略

- `onBackPress` 无法捕获 iOS 侧滑返回，当前方案对 iOS 不生效。
- 建议在交互层提供显性的关闭按钮或提示文案，确保用户可理解操作。
- 若业务强依赖，可评估定制原生插件或在规划中说明限制。

### 统一弹窗栈能力

- H5 与 App 端统一暴露 `pushPopup`、`popPopup` 方法，保持一致的调用语义。
- 约定 `id` 为必填字段，`extra` 用于承载业务数据（如关闭回调、埋点参数）。
- 进入页面时主动登记弹窗，离开页面前主动清理，避免栈信息残留。

### 常见坑位与排查

- **手势与动画冲突**：关闭动画过长会导致页面残留遮罩，需要控制动画时长。
- **history 堆积**：异常退出页面时，可在路由钩子中执行 `history.go(-popupStack.length)` 兜底。
- **Android 虚拟键**：`backpress` 同时响应虚拟键与手势，需防止重复触发关闭逻辑。
- **埋点与统计**：统一栈数据可作为弹窗曝光、关闭等事件的埋点入口。

### 总结

通过“History 路由 + IntersectionObserver”与“uni-popup + backpress”两套定制方案，并辅以统一的弹窗栈管理，可以在大多数移动端场景中实现“侧滑优先关闭弹窗”的一致体验。后续如果接入更多宿主（例如小程序），只需延伸弹窗栈的入栈 / 出栈能力，并根据宿主能力补齐监听机制即可。

