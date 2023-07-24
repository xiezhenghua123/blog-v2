import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': ['intro'],
  '/article/vuepress/': [
    {
      text: 'vuepress',
      children: 'structure'
    }
  ],
  '/article/javascript/': [
    {
      text: 'js高级程序设计',
      children: 'structure'
    }
  ],
  '/article/vue/': [
    {
      text: 'vue',
      children: 'structure'
    }
  ],
  '/article/interview/': [
    {
      text: '面经',
      children: 'structure'
    }
  ],
  '/article/webpack/': [
    {
      text: 'webpack相关',
      children: 'structure'
    }
  ],
  '/article/trap/': [
    {
      text: '日常开发踩坑',
      children: 'structure'
    }
  ]
})
