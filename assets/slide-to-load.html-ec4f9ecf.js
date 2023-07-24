const e=JSON.parse('{"key":"v-784f9f6d","path":"/article/trap/slide-to-load.html","title":"关于上滑加载","lang":"zh-CN","frontmatter":{"author":"菜鸡小谢","date":"2023-07-17T00:00:00.000Z","category":"javascript","title":"关于上滑加载","isOriginal":true,"description":"实现原理 监听scroll事件，当scrollTop+clientHeight &gt;= scrollHeight时，即已经滚动到列表底部，可以加载下一页数据。 image-20230717135957727 响应式问题 当项目中使用rem或者vw来实现响应式布局时，不同屏幕下要小心px值转rem或者vw时的部分小数位丢失问题，因为这样会导致scrollHeight会一直比scrollTop + clientHeight的值小，无法触发下一页数据请求。目前我的解决办法为：在scrollTop + clientHeight的基础上加上一段距离，即不需要滚动底部时就触发数据加载，同时添加滚动防抖，防止多次触发滚动事件，重复请求。","head":[["meta",{"property":"og:url","content":"https://xiezhenghua123.github.io/blog-v2/article/trap/slide-to-load.html"}],["meta",{"property":"og:title","content":"关于上滑加载"}],["meta",{"property":"og:description","content":"实现原理 监听scroll事件，当scrollTop+clientHeight &gt;= scrollHeight时，即已经滚动到列表底部，可以加载下一页数据。 image-20230717135957727 响应式问题 当项目中使用rem或者vw来实现响应式布局时，不同屏幕下要小心px值转rem或者vw时的部分小数位丢失问题，因为这样会导致scrollHeight会一直比scrollTop + clientHeight的值小，无法触发下一页数据请求。目前我的解决办法为：在scrollTop + clientHeight的基础上加上一段距离，即不需要滚动底部时就触发数据加载，同时添加滚动防抖，防止多次触发滚动事件，重复请求。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T06:28:09.000Z"}],["meta",{"property":"article:author","content":"菜鸡小谢"}],["meta",{"property":"article:published_time","content":"2023-07-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T06:28:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关于上滑加载\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-24T06:28:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜鸡小谢\\"}]}"],["meta",{"name":"google-site-verification","content":"8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y"}]]},"headers":[{"level":3,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":3,"title":"响应式问题","slug":"响应式问题","link":"#响应式问题","children":[]},{"level":3,"title":"具体代码","slug":"具体代码","link":"#具体代码","children":[]}],"git":{"createdTime":1690180089000,"updatedTime":1690180089000,"contributors":[{"name":"xiezhenghua","email":"xiezhenghua@hikvision.com","commits":1}]},"readingTime":{"minutes":0.82,"words":245},"filePathRelative":"article/trap/slide-to-load.md","localizedDate":"2023年7月17日","excerpt":"<h3> 实现原理</h3>\\n<p>监听scroll事件，当scrollTop+clientHeight &gt;= scrollHeight时，即已经滚动到列表底部，可以加载下一页数据。</p>\\n<figure><figcaption>image-20230717135957727</figcaption></figure>\\n<h3> 响应式问题</h3>\\n<p>当项目中使用rem或者vw来实现响应式布局时，不同屏幕下要小心px值转rem或者vw时的部分小数位丢失问题，因为这样会导致scrollHeight会一直比scrollTop + clientHeight的值小，无法触发下一页数据请求。目前我的解决办法为：在scrollTop + clientHeight的基础上加上一段距离，即不需要滚动底部时就触发数据加载，同时添加滚动防抖，防止多次触发滚动事件，重复请求。</p>","copyright":{"author":"菜鸡小谢"},"autoDesc":true}');export{e as data};
