import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: '首页',
    link: '/',
    icon: 'home'
  },
  {
    text: 'vuepress',
    link: 'vuepress/firstStudy.md',
    icon: 'Vue'
  },
  {
    text: 'js高级程序设计',
    prefix: '/js高级程序设计/',
    icon: 'js',
    children: ['Array', 'fifteen']
  },
  {
    text: 'vue',
    prefix: '/vue/',
    icon: 'Vue',
    children: ['responsive', 'function-component', 'compositionApi']
  },
  {
    text: '面经',
    prefix: '/面经/',
    icon: 'interview',
    children: ['checkSelf', 'url']
  },
  {
    text: 'webpack相关',
    prefix: '/webpack相关/',
    icon: 'webpack',
    children: ['webpack']
  },
  {
    text: '日常开发踩坑',
    prefix: '/日常开发踩坑/',
    icon: 'goumaixianjing',
    children: [
      'el-menu',
      'forEachBad',
      'git',
      'uniapp',
      'webSocket',
      'flex',
      'slide-to-load',
      'visual-adaptive',
      'git-proxy',
      "video-audio",
      "human-machine-verification",
      'web-lighthouse',
      "remove-console",
      "uniapp-popup",
      "count-down"
    ]
  },
  {
    text: 'typescript',
    prefix: '/typescript/',
    icon: 'typescript',
    children: ['gymnastics-practice', 'common-error']
  }
])
