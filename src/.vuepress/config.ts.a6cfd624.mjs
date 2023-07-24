// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  {
    text: "\u9996\u9875",
    link: "/",
    icon: "home"
  },
  {
    text: "vuepress",
    link: "/article/vuepress/firstStudy",
    icon: "Vue"
  },
  {
    text: "js\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1",
    prefix: "/article/javascript/",
    icon: "js",
    children: ["Array", "fifteen"]
  },
  {
    text: "vue",
    prefix: "/article/vue/",
    icon: "Vue",
    children: ["responsive", "extend-and-createApp"]
  },
  {
    text: "\u9762\u7ECF",
    prefix: "/article/interview/",
    icon: "interview",
    children: ["checkSelf", "url"]
  },
  {
    text: "webpack\u76F8\u5173",
    prefix: "/article/webpack/",
    icon: "webpack",
    children: ["webpack"]
  },
  {
    text: "\u65E5\u5E38\u5F00\u53D1\u8E29\u5751",
    prefix: "/article/trap/",
    icon: "goumaixianjing",
    children: [
      "el-menu",
      "forEachBad",
      "refresh",
      "git",
      "uniapp",
      "webSocket",
      "compositionApi",
      "flex",
      "slide-to-load",
      "visual-adaptive"
    ]
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/": ["intro"],
  "/article/vuepress/": [
    {
      text: "vuepress",
      children: "structure"
    }
  ],
  "/article/javascript/": [
    {
      text: "js\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1",
      children: "structure"
    }
  ],
  "/article/vue/": [
    {
      text: "vue",
      children: "structure"
    }
  ],
  "/article/interview/": [
    {
      text: "\u9762\u7ECF",
      children: "structure"
    }
  ],
  "/article/webpack/": [
    {
      text: "webpack\u76F8\u5173",
      children: "structure"
    }
  ],
  "/article/trap/": [
    {
      text: "\u65E5\u5E38\u5F00\u53D1\u8E29\u5751",
      children: "structure"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://xiezhenghua123.github.io",
  author: {
    name: "\u83DC\u9E21\u5C0F\u8C22"
  },
  repo: "https://github.com/xiezhenghua123/blog-v2",
  iconAssets: "iconfont",
  logo: "/logo.jpg",
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  displayFooter: true,
  blog: {
    description: "\u524D\u7AEF\u65B0\u4EBA\u5C0F\u83DC\u9E21",
    intro: "/intro.html",
    medias: {
      QQ: "tencent://message/?uin=1803493121",
      Wechat: "https://weixin.qq.com/"
    },
    roundAvatar: true
  },
  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },
  // page meta
  metaLocales: {
    editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
  },
  plugins: {
    blog: true,
    copyright: true,
    // comment: {
    //   // You should generate and use your own comment service
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    },
    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png"
              }
            ]
          }
        ]
      }
    },
    seo: {
      customHead: (head) => {
        head.push([
          "meta",
          {
            name: "google-site-verification",
            content: "8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y"
          }
        ]);
      }
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/blog-v2/",
  lang: "zh-CN",
  // title: "博客演示",
  // description: "vuepress-theme-hope 的博客演示",
  theme: theme_default,
  // Enable it with pwa
  shouldPrefetch: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9ibG9nLXYyL2Jsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYmxvZy12MlxcXFxibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9ibG9nLXYyL2Jsb2cvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL2Jsb2ctdjIvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICAvLyB0aXRsZTogXCJcdTUzNUFcdTVCQTJcdTZGMTRcdTc5M0FcIixcbiAgLy8gZGVzY3JpcHRpb246IFwidnVlcHJlc3MtdGhlbWUtaG9wZSBcdTc2ODRcdTUzNUFcdTVCQTJcdTZGMTRcdTc5M0FcIixcblxuICB0aGVtZSxcblxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2Jsb2ctdjIvYmxvZy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxibG9nLXYyXFxcXGJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYmxvZy12Mi9ibG9nL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1ob3BlJ1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhci5qcydcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qcydcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6ICdodHRwczovL3hpZXpoZW5naHVhMTIzLmdpdGh1Yi5pbycsXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogJ1x1ODNEQ1x1OUUyMVx1NUMwRlx1OEMyMidcbiAgfSxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94aWV6aGVuZ2h1YTEyMy9ibG9nLXYyJyxcbiAgaWNvbkFzc2V0czogJ2ljb25mb250JyxcblxuICBsb2dvOiAnL2xvZ28uanBnJyxcblxuICBkb2NzRGlyOiAnc3JjJyxcblxuICAvLyBuYXZiYXJcbiAgbmF2YmFyLFxuXG4gIC8vIHNpZGViYXJcbiAgc2lkZWJhcixcblxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIGJsb2c6IHtcbiAgICBkZXNjcmlwdGlvbjogJ1x1NTI0RFx1N0FFRlx1NjVCMFx1NEVCQVx1NUMwRlx1ODNEQ1x1OUUyMScsXG4gICAgaW50cm86ICcvaW50cm8uaHRtbCcsXG4gICAgbWVkaWFzOiB7XG4gICAgICBRUTogXCJ0ZW5jZW50Oi8vbWVzc2FnZS8/dWluPTE4MDM0OTMxMjFcIixcbiAgICAgIFdlY2hhdDogXCJodHRwczovL3dlaXhpbi5xcS5jb20vXCIsXG4gICAgfSxcbiAgICByb3VuZEF2YXRhcjogdHJ1ZVxuICB9LFxuXG4gIC8vIGVuY3J5cHQ6IHtcbiAgLy8gICBjb25maWc6IHtcbiAgLy8gICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gIC8vICAgfSxcbiAgLy8gfSxcblxuICAvLyBwYWdlIG1ldGFcbiAgbWV0YUxvY2FsZXM6IHtcbiAgICBlZGl0TGluazogJ1x1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1J1xuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICBibG9nOiB0cnVlLFxuICAgIGNvcHlyaWdodDogdHJ1ZSxcblxuICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAvLyAgIC8vIFlvdSBzaG91bGQgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2VcbiAgICAvLyAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAgIC8vICAgc2VydmVyVVJMOiBcImh0dHBzOi8vd2FsaW5lLWNvbW1lbnQudnVlanMucHJlc3NcIixcbiAgICAvLyB9LFxuXG4gICAgLy8gYWxsIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjaGFydDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGVjaGFydHM6IHRydWUsXG4gICAgICBmaWd1cmU6IHRydWUsXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICBnZm06IHRydWUsXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIGltZ1NpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAga2F0ZXg6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgbWVybWFpZDogdHJ1ZSxcbiAgICAgIHBsYXlncm91bmQ6IHtcbiAgICAgICAgcHJlc2V0czogWyd0cycsICd2dWUnXVxuICAgICAgfSxcbiAgICAgIHByZXNlbnRhdGlvbjogWydoaWdobGlnaHQnLCAnbWF0aCcsICdzZWFyY2gnLCAnbm90ZXMnLCAnem9vbSddLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogJ1JlY29tbWVuZGVkJyxcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09ICdlbScpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnQmFkZ2UnLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6ICd0aXAnIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1JlY29tbWVuZGVkJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3ViOiB0cnVlLFxuICAgICAgc3VwOiB0cnVlLFxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIHZQcmU6IHRydWUsXG4gICAgICB2dWVQbGF5Z3JvdW5kOiB0cnVlXG4gICAgfSxcblxuICAgIC8vIHVuY29tbWVudCB0aGVzZSBpZiB5b3Ugd2FudCBhIFBXQVxuICAgIHB3YToge1xuICAgICAgZmF2aWNvbjogJy9mYXZpY29uLmljbycsXG4gICAgICBjYWNoZUhUTUw6IHRydWUsXG4gICAgICBjYWNoZVBpYzogdHJ1ZSxcbiAgICAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgICBhcHBsZToge1xuICAgICAgICBpY29uOiAnL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZycsXG4gICAgICAgIHN0YXR1c0JhckNvbG9yOiAnYmxhY2snXG4gICAgICB9LFxuICAgICAgbXNUaWxlOiB7XG4gICAgICAgIGltYWdlOiAnL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZycsXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZidcbiAgICAgIH0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNob3J0Y3V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEZW1vJyxcbiAgICAgICAgICAgIHNob3J0X25hbWU6ICdEZW1vJyxcbiAgICAgICAgICAgIHVybDogJy9kZW1vLycsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiAnL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZycsXG4gICAgICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNlbzoge1xuICAgICAgY3VzdG9tSGVhZDogaGVhZCA9PiB7XG4gICAgICAgIGhlYWQucHVzaChbXG4gICAgICAgICAgJ21ldGEnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnb29nbGUtc2l0ZS12ZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgY29udGVudDogJzhCUnJUOUk1ZmNhQmpwdzNROEk0OTE2MUZRdHpHZU4wcUlZRjU0ZHFGMFknXG4gICAgICAgICAgfVxuICAgICAgICBdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYmxvZy12Mi9ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGJsb2ctdjJcXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYmxvZy12Mi9ibG9nL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtaG9wZSdcblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyKFtcbiAge1xuICAgIHRleHQ6ICdcdTk5OTZcdTk4NzUnLFxuICAgIGxpbms6ICcvJyxcbiAgICBpY29uOiAnaG9tZSdcbiAgfSxcbiAge1xuICAgIHRleHQ6ICd2dWVwcmVzcycsXG4gICAgbGluazogJy9hcnRpY2xlL3Z1ZXByZXNzL2ZpcnN0U3R1ZHknLFxuICAgIGljb246ICdWdWUnXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnanNcdTlBRDhcdTdFQTdcdTdBMEJcdTVFOEZcdThCQkVcdThCQTEnLFxuICAgIHByZWZpeDogJy9hcnRpY2xlL2phdmFzY3JpcHQvJyxcbiAgICBpY29uOiAnanMnLFxuICAgIGNoaWxkcmVuOiBbJ0FycmF5JywgJ2ZpZnRlZW4nXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ3Z1ZScsXG4gICAgcHJlZml4OiAnL2FydGljbGUvdnVlLycsXG4gICAgaWNvbjogJ1Z1ZScsXG4gICAgY2hpbGRyZW46IFsncmVzcG9uc2l2ZScsICdleHRlbmQtYW5kLWNyZWF0ZUFwcCddXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnXHU5NzYyXHU3RUNGJyxcbiAgICBwcmVmaXg6ICcvYXJ0aWNsZS9pbnRlcnZpZXcvJyxcbiAgICBpY29uOiAnaW50ZXJ2aWV3JyxcbiAgICBjaGlsZHJlbjogWydjaGVja1NlbGYnLCAndXJsJ11cbiAgfSxcbiAge1xuICAgIHRleHQ6ICd3ZWJwYWNrXHU3NkY4XHU1MTczJyxcbiAgICBwcmVmaXg6ICcvYXJ0aWNsZS93ZWJwYWNrLycsXG4gICAgaWNvbjogJ3dlYnBhY2snLFxuICAgIGNoaWxkcmVuOiBbJ3dlYnBhY2snXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1NjVFNVx1NUUzOFx1NUYwMFx1NTNEMVx1OEUyOVx1NTc1MScsXG4gICAgcHJlZml4OiAnL2FydGljbGUvdHJhcC8nLFxuICAgIGljb246ICdnb3VtYWl4aWFuamluZycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICdlbC1tZW51JyxcbiAgICAgICdmb3JFYWNoQmFkJyxcbiAgICAgICdyZWZyZXNoJyxcbiAgICAgICdnaXQnLFxuICAgICAgJ3VuaWFwcCcsXG4gICAgICAnd2ViU29ja2V0JyxcbiAgICAgICdjb21wb3NpdGlvbkFwaScsXG4gICAgICAnZmxleCcsXG4gICAgICAnc2xpZGUtdG8tbG9hZCcsXG4gICAgICAndmlzdWFsLWFkYXB0aXZlJ1xuICAgIF1cbiAgfVxuXSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYmxvZy12Mi9ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGJsb2ctdjJcXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Jsb2ctdjIvYmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtaG9wZSdcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XG4gICcvJzogWydpbnRybyddLFxuICAnL2FydGljbGUvdnVlcHJlc3MvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICd2dWVwcmVzcycsXG4gICAgICBjaGlsZHJlbjogJ3N0cnVjdHVyZSdcbiAgICB9XG4gIF0sXG4gICcvYXJ0aWNsZS9qYXZhc2NyaXB0Lyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnanNcdTlBRDhcdTdFQTdcdTdBMEJcdTVFOEZcdThCQkVcdThCQTEnLFxuICAgICAgY2hpbGRyZW46ICdzdHJ1Y3R1cmUnXG4gICAgfVxuICBdLFxuICAnL2FydGljbGUvdnVlLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAndnVlJyxcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJ1xuICAgIH1cbiAgXSxcbiAgJy9hcnRpY2xlL2ludGVydmlldy8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1x1OTc2Mlx1N0VDRicsXG4gICAgICBjaGlsZHJlbjogJ3N0cnVjdHVyZSdcbiAgICB9XG4gIF0sXG4gICcvYXJ0aWNsZS93ZWJwYWNrLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnd2VicGFja1x1NzZGOFx1NTE3MycsXG4gICAgICBjaGlsZHJlbjogJ3N0cnVjdHVyZSdcbiAgICB9XG4gIF0sXG4gICcvYXJ0aWNsZS90cmFwLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2NUU1XHU1RTM4XHU1RjAwXHU1M0QxXHU4RTI5XHU1NzUxJyxcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJ1xuICAgIH1cbiAgXVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVEsU0FBUyx3QkFBd0I7OztBQ0FuQyxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUU1UixJQUFPLGlCQUFRLE9BQU87QUFBQSxFQUNwQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVUsQ0FBQyxTQUFTLFNBQVM7QUFBQSxFQUMvQjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVUsQ0FBQyxjQUFjLHNCQUFzQjtBQUFBLEVBQ2pEO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sVUFBVSxDQUFDLGFBQWEsS0FBSztBQUFBLEVBQy9CO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sVUFBVSxDQUFDLFNBQVM7QUFBQSxFQUN0QjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxN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
