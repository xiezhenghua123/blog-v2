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
