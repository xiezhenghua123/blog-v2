import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme'
import path from 'path'

export default defineUserConfig({
  base: '/blog-v2/',

  lang: 'zh-CN',
  // title: "博客演示",
  // description: "vuepress-theme-hope 的博客演示",
  alias: {
    '@public': path.resolve(__dirname, './public'),
    '@components': path.resolve(__dirname, './components')
  },
  theme,

  // 使用 Vite bundler（版本匹配）
  bundler: viteBundler({
    viteOptions: {
      // 基本的 Vite 配置
    }
  }),

  // Enable it with pwa
  shouldPrefetch: false
})
