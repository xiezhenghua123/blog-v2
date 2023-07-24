import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: '首页',
    link: '/',
    icon: 'home'
  },
  {
    text: 'vuepress',
    link: '/article/vuepress/firstStudy',
    icon: 'Vue'
  },
  {
    text: 'js高级程序设计',
    prefix: '/article/javascript/',
    icon: 'js',
    children: ['Array', 'fifteen']
  },
  {
    text: 'vue',
    prefix: '/article/vue/',
    icon: 'Vue',
    children: ['responsive', 'extend-and-createApp']
  },
  {
    text: '面经',
    prefix: '/article/interview/',
    icon: 'interview',
    children: ['checkSelf', 'url']
  },
  {
    text: 'webpack相关',
    prefix: '/article/webpack/',
    icon: 'webpack',
    children: ['webpack']
  },
  {
    text: '日常开发踩坑',
    prefix: '/article/trap/',
    icon: 'goumaixianjing',
    children: [
      'el-menu',
      'forEachBad',
      'refresh',
      'git',
      'uniapp',
      'webSocket',
      'compositionApi',
      'flex',
      'slide-to-load',
      'visual-adaptive'
    ]
  }
])
