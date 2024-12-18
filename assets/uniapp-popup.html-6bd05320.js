const e=JSON.parse('{"key":"v-26d63297","path":"/%E6%97%A5%E5%B8%B8%E5%BC%80%E5%8F%91%E8%B8%A9%E5%9D%91/uniapp-popup.html","title":"uniapp函数式弹窗","lang":"zh-CN","frontmatter":{"author":"菜鸡小谢","date":"2024-12-18T00:00:00.000Z","category":"uniapp","title":"uniapp函数式弹窗","isOriginal":true,"description":"开发公司某个uniapp项目时，有个电商营销的需求，涉及到许多页面公共弹窗，比如在首页存在多个不同的弹窗，需要在不同的时机弹，分类详情页也有多个弹窗、裂变页也要有相同的弹窗等等。项目中原来的做法是写公共组件，然后在需要的页面引入，这种做法既存在很多冗余代码，还会导致弹窗乱弹等等情况。 那既然上面这种做法有缺点，那有更好的办法吗？ 那必然有，就是函数式弹窗啦，参照这篇文章函数式调用弹窗实现(vue版) 但是，上方的函数式弹窗只能用在H5上，在app上面用不了，因为在uniapp开发中，Vue.extend不可作为组件使用，并且vm.$mount()在APP当中也无法使用。","head":[["meta",{"property":"og:url","content":"https://xiezhenghua123.github.io/blog-v2/%E6%97%A5%E5%B8%B8%E5%BC%80%E5%8F%91%E8%B8%A9%E5%9D%91/uniapp-popup.html"}],["meta",{"property":"og:title","content":"uniapp函数式弹窗"}],["meta",{"property":"og:description","content":"开发公司某个uniapp项目时，有个电商营销的需求，涉及到许多页面公共弹窗，比如在首页存在多个不同的弹窗，需要在不同的时机弹，分类详情页也有多个弹窗、裂变页也要有相同的弹窗等等。项目中原来的做法是写公共组件，然后在需要的页面引入，这种做法既存在很多冗余代码，还会导致弹窗乱弹等等情况。 那既然上面这种做法有缺点，那有更好的办法吗？ 那必然有，就是函数式弹窗啦，参照这篇文章函数式调用弹窗实现(vue版) 但是，上方的函数式弹窗只能用在H5上，在app上面用不了，因为在uniapp开发中，Vue.extend不可作为组件使用，并且vm.$mount()在APP当中也无法使用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T08:17:36.000Z"}],["meta",{"property":"article:author","content":"菜鸡小谢"}],["meta",{"property":"article:published_time","content":"2024-12-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T08:17:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uniapp函数式弹窗\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-18T08:17:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜鸡小谢\\"}]}"],["meta",{"name":"google-site-verification","content":"8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y"}]]},"headers":[],"git":{"createdTime":1734508246000,"updatedTime":1734509856000,"contributors":[{"name":"xiezhenghua","email":"xiezhenghua@sailvan.com","commits":2}]},"readingTime":{"minutes":2.01,"words":602},"filePathRelative":"日常开发踩坑/uniapp-popup.md","localizedDate":"2024年12月18日","excerpt":"<p>开发公司某个uniapp项目时，有个电商营销的需求，涉及到许多页面公共弹窗，比如在首页存在多个不同的弹窗，需要在不同的时机弹，分类详情页也有多个弹窗、裂变页也要有相同的弹窗等等。项目中原来的做法是写公共组件，然后在需要的页面引入，这种做法既存在很多冗余代码，还会导致弹窗乱弹等等情况。</p>\\n<p>那既然上面这种做法有缺点，那有更好的办法吗？</p>\\n<p>那必然有，就是函数式弹窗啦，参照这篇文章<a href=\\"/blog-v2/vue/function-component.html\\" target=\\"blank\\">函数式调用弹窗实现(vue版)</a></p>\\n<p>但是，上方的函数式弹窗只能用在H5上，在app上面用不了，因为在uniapp开发中，Vue.extend不可作为组件使用，并且vm.$mount()在APP当中也无法使用。</p>","copyright":{"author":"菜鸡小谢"},"autoDesc":true}');export{e as data};