---
author: 菜鸡小谢
date: 2023-11-30
category: 音视频
title: 安卓APP音视频录制与播放
isOriginal: true
---

### 前言

​    本项目是一个基于hatom平台开发的安卓app（H5内嵌webview），本文总结归纳了其中音视频录制与播放开发业务的一些经验。

### 音频录制

​       由于处在安卓webview环境，录制音频需要调起硬件设备，并且因为网页浏览器有安全机制，它只允许https和localhost访问麦克风摄像头等硬件，通过H5录制音频（MediaDevices.getUserMedia()）的方式不太友好。固采用hatom平台提供的原生音频录制插件进行录制，但是原生录制插件无法提供录制时间，所以这里采用手动计时，相关代码如下：

##### **长按开始录制**

```javascript
startVoice() {
   this.timeOutEvent && clearTimeout(this.timeOutEvent)
   this.timeOutEvent = setTimeout(() => {
     this.$hatom.native('VideoRecordPlugin.startAudioRecord', res => {
       // 开始计算录音时间,只记录到秒
       if (res.code === 0) {
         this.startRecord = true
         this.recordTime = 0
         this.startTime = dayjs()
         this.updateTime()
       }
     })
  }, 500)
}
```

##### 记录时间

```javascript
 updateTime() {
      if (this.startRecord) {
        this.recordTime = dayjs().diff(this.startTime, 's')
        if (this.recordTime >= 30) {
          this.stopVoice()
          return
        }
        requestAnimationFrame(this.updateTime)
      }
  }
```

##### 结束录制

```javascript
stopVoice() {
      this.startRecord &&
        this.$hatom.native('VideoRecordPlugin.stopAudioRecord', async res => {
          if(this.recordTime < 1) {
            Toast.fail('录音时间太短')
            this.init()
            return
          }
          const filePath = await API.upload([JSON.parse(res.message).filePath], {}, '录音保存中', '保存成功', '保存失败')
          this.$emit('stopVoice', {
            filePath: filePath[0].src?.includes('http') ? filePath[0]?.src : `${this.GLOBAL?.address}${filePath[0].src}`,
            time: this.recordTime
          })
          this.showPopup = false
        })
      this.startRecord = false
      clearTimeout(this.timeOutEvent)
 },
```

### 音频播放

​      语音播放采用H5的audio标签进行播放，不需要利用原生的能力。

##### 开始播放

​      调用audio的play方法进行播放，由于存在倒计时，所以需要等待语音文件加载完成后才能进行播放，否则会存在网络延迟问题，导致时间对应不上。

```javascript
playVoice() {
      this.needFirstPlay = true  //点击时正在加载中，加载完成自动播放的标志
      if (!this.$refs.audio.src) {
        this.$refs.audio.src = this.voiceFile
      }
      if (this.isError) {
        Toast.fail('语音加载失败')
        return
      }
      if (!this.isReady) {
        this.firstPlayLoading = Toast.loading({
          message: '语音加载中',
          forbidClick: true,
          duration: 0
        })
        return
      }
      //正在播放，点击时就停止播放，否则就开始播放
      if (this.isPlayVoice) {
        this.stopPlayVoice()
      } else {
        this.isPlayVoice = true
        // 显示倒计时
        this.currentTime = Date.now() + this.voiceTime * 1000
        this.countDown()
        if (this.isOnlineFile) {
          this.$refs.audio.play()
        }
      }
    }
```

​    判断语音是否加载完成可以监听audio的canplaythrough的回调方法。

```javascript
    audioReady() {
      this.isReady = true
      if (this.needFirstPlay) {
        this.firstPlayLoading && this.firstPlayLoading.clear()
        this.playVoice()
      }
    }
```

##### 倒计时

```javascript
    countDown() {
      const remainingTime = this.currentTime - Date.now()
      this.playTime = Math.ceil(remainingTime / 1000)
      if (this.playTime <= 0) {
        this.stopPlayVoice()
      } else {
        this.animationId = requestAnimationFrame(this.countDown)
      }
    }
```

##### 停止播放

​    调用audio的pause方法

```javascript
    stopPlayVoice() {
      this.isPlayVoice  = false
      this.needFirstPlay = false
      this.playTime = this.voiceTime
      cancelAnimationFrame(this.animationId)
      this.$refs.audio.pause()
      this.$refs.audio.currentTime = 0
    },
```

### 视频录制

​      视频录制同样可以利用hatom平台提供的原生插件能力，本项目app暂时没有视频录制需求，使用请看[官方插件文档](https://hitom.hikyun.com/appdev/plugindetail?id=hatom_video_record_202107130352_7805&platformType=1)

### **视频播放**

​      视频播放可以采用H5的video标签进行播放，这里推荐一个十分好用的第三方库[video.js](https://docs.videojs.com/)，[中文文档](https://videojs.moyutime.cn/2022/02/12/course/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/)。可以自定义video播放器样式等等。

##### **QA**

**1、视频播放器配置 language: 'zh-CN'无法生效**

```javascript
//引入中文json文件，并配置语言
import lang_zhCn from 'video.js/dist/lang/zh-CN.json'
videoJs.addLanguage('zh-CN', lang_zhCn)
```

**2、关于播放器controlBar自定义配置（官方文档缺少）**

[推荐文档](https://juejin.cn/post/6988479071474679844)

**3、显示首帧**

有两种方案。

一是通过canvas截取首帧，并输出为url，这种方案需要服务器支持，需要解决canvas[跨域CORS问题](https://www.zhangxinxu.com/wordpress/2018/02/crossorigin-canvas-getimagedata-cors/)

```javascript
    getFirstImage() {
      const canvas = document.createElement('canvas')
      canvas.width = this.videoInstance.currentWidth()
      canvas.height = this.videoInstance.currentHeight()
      const context = canvas.getContext('2d')
      const el = this.videoInstance.el().querySelector('video')
      context.drawImage(el, 0, 0, canvas.width, canvas.height)
      this.imageSrc = canvas.toDataURL('image/jpeg')
    },
```

二是监听视频的loadeddata（视频加载完首帧）的回调。执行play方法，同时立马pause视频

```javascript
      // 获取首帧
      this.videoInstance.on('loadeddata', async () => {
        await this.videoInstance.play()
        await this.videoInstance.pause()
      })
```

**4、进度条无法拖动**

视频拖动进度条需要视频服务器支持返回头

```
Accept-Ranges: bytes
Content-Length: xxx
Content-Range: bytes xxxx
```

[206 Partial Content](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206)   [基于 HTTP Range 实现文件分片并发下载！](https://mp.weixin.qq.com/s?__biz=Mzg3OTYzMDkzMg==&amp;mid=2247495472&amp;idx=1&amp;sn=bc73cba1c6a4075dddddc88fe270772b&amp;chksm=cf03200bf874a91d3b652f3094bff907220aeb49018f4576f53bd917c48dfd44f55dc4737c58&amp;token=1511906647&amp;lang=zh_CN&amp;scene=21#wechat_redirect)

