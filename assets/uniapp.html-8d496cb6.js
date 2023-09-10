const e=JSON.parse('{"key":"v-cc0e5750","path":"/article/trap/uniapp.html","title":"uniapp样式穿透问题","lang":"zh-CN","frontmatter":{"author":"菜鸡小谢","date":"2022-03-31T00:00:00.000Z","category":"日常开发踩坑","title":"uniapp样式穿透问题","isOriginal":true,"description":"前言 我在使用uniapp开发微信小程序毕设时，使用::v-deep对子组件进行样式穿透时，微信小程序中总是不生效，h5却没问题。 原因 1、使用样式穿透时的页面必须要在pages.json中进行注册 补充 1、非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped 2、App.vue中引入的style默认未加scoped，全局样式可以从这里引入","head":[["meta",{"property":"og:url","content":"https://xiezhenghua123.github.io/blog-v2/article/trap/uniapp.html"}],["meta",{"property":"og:title","content":"uniapp样式穿透问题"}],["meta",{"property":"og:description","content":"前言 我在使用uniapp开发微信小程序毕设时，使用::v-deep对子组件进行样式穿透时，微信小程序中总是不生效，h5却没问题。 原因 1、使用样式穿透时的页面必须要在pages.json中进行注册 补充 1、非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped 2、App.vue中引入的style默认未加scoped，全局样式可以从这里引入"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T06:28:09.000Z"}],["meta",{"property":"article:author","content":"菜鸡小谢"}],["meta",{"property":"article:published_time","content":"2022-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T06:28:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uniapp样式穿透问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-24T06:28:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜鸡小谢\\"}]}"],["meta",{"name":"google-site-verification","content":"8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y"}]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":3,"title":"补充","slug":"补充","link":"#补充","children":[]}],"git":{"createdTime":1690180089000,"updatedTime":1690180089000,"contributors":[{"name":"xiezhenghua","email":"xiezhenghua@hikvision.com","commits":1}]},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"article/trap/uniapp.md","localizedDate":"2022年3月31日","excerpt":"<h3> <strong>前言</strong></h3>\\n<p>我在使用uniapp开发微信小程序毕设时，使用::v-deep对子组件进行样式穿透时，微信小程序中总是不生效，h5却没问题。</p>\\n<h3> <strong>原因</strong></h3>\\n<p>1、使用样式穿透时的页面必须要在pages.json中进行注册</p>\\n<h3> <strong>补充</strong></h3>\\n<p>1、非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped</p>\\n<p>2、App.vue中引入的style默认未加scoped，全局样式可以从这里引入</p>","copyright":{"author":"菜鸡小谢"},"autoDesc":true}');export{e as data};