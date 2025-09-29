import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import path from 'path'

export default defineUserConfig({
  base: '/',

  lang: 'zh-CN',
  // title: "博客演示",
  // description: "vuepress-theme-hope 的博客演示",
  alias: {
    '@public': path.resolve(__dirname, './public'),
    '@components': path.resolve(__dirname, './components')
  },
  theme,

  // Enable it with pwa
  shouldPrefetch: false
})
