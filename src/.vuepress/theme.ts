import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.ts'

export default hopeTheme({
  hostname: 'https://xiezhenghua123.github.io',

  author: {
    name: '菜鸡小谢'
  },
  repo: 'https://github.com/xiezhenghua123/blog-v2',

  logo: '/logo.jpg',

  docsDir: 'src',

  // navbar
  navbar,

  // sidebar
  sidebar: 'structure',

  displayFooter: true,

  blog: {
    description: '前端新人小菜鸡',
    intro: '/intro.html',
    medias: {
      QQ: 'tencent://message/?uin=1803493121',
      Wechat: 'https://weixin.qq.com/'
    }
    // roundAvatar: true // 此属性在新版本中已被移除，头像默认为圆形
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  metaLocales: {
    editLink: '在 GitHub 上编辑此页'
  },

  // 新的 markdown 配置方式
  markdown: {
    align: true,
    attrs: true,
    chartjs: true,
    codeTabs: true,
    demo: true,
    echarts: true,
    figure: true,
    flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    math: true, // 替代 katex
    mark: true,
    mermaid: true,
    playground: {
      presets: ['ts', 'vue']
    },
    stylize: [
      {
        matcher: 'Recommended',
        replacer: ({ tag }) => {
          if (tag === 'em')
            return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommended'
            }
        }
      }
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
    vuePlayground: true
  },

  plugins: {
    blog: true,
    copyright: true,
    components: {
     components: [
      "VidStack"
     ]
    },

    // 禁用图标资源以避免识别错误
    // icon: {
    //   assets: 'fontawesome'
    // },

    // comment: {
    //   // You should generate and use your own comment service
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // uncomment these if you want a PWA
    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      // cachePic: true, // 此属性在新版本中已被移除
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black'
      },
      // msTile: { // 此属性在新版本中已被移除
      //   image: '/assets/icon/ms-icon-144.png',
      //   color: '#ffffff'
      // },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ],
        shortcuts: [
          {
            name: 'Demo',
            short_name: 'Demo',
            url: '/demo/',
            icons: [
              {
                src: '/assets/icon/guide-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png'
              }
            ]
          }
        ]
      }
    },
    seo: {
      customHead: head => {
        head.push([
          'meta',
          {
            name: 'google-site-verification',
            content: '8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y'
          }
        ])
      }
    }
  }
})
