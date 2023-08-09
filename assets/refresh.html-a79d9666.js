const t=JSON.parse('{"key":"v-550c9664","path":"/article/trap/refresh.html","title":"常见搜索后，不同tab页展示不同信息的代码方案设计","lang":"zh-CN","frontmatter":{"author":"菜鸡小谢","date":"2021-09-15T00:00:00.000Z","category":"javascript","title":"常见搜索后，不同tab页展示不同信息的代码方案设计","isOriginal":true,"description":"前言 项目开发过程中，我遇到到了这样一个问题，当时有这样一个需求，上方搜索一个企业，下面的几个 tab 页展示对应的数据。 image-20210915162344520 我开始设计时，把每一个 tab 页当成一个路由，然后把这个企业的 eid 传到每个 tab 页中（每个 tab 页用 watch 进行监听），进行数据展示。这样就会存在一个问题，我只要一搜索企业，下面的每个 tab 页中的接口都会调用，很不友好。 所以，希望设计成这样：切换到每个 tab 页时，才调用对应的接口，并且同一家公司，tab 页切换过去一次后，第二次切换过去，不需要再调接口。","head":[["meta",{"property":"og:url","content":"https://xiezhenghua123.github.io/blog-v2/article/trap/refresh.html"}],["meta",{"property":"og:title","content":"常见搜索后，不同tab页展示不同信息的代码方案设计"}],["meta",{"property":"og:description","content":"前言 项目开发过程中，我遇到到了这样一个问题，当时有这样一个需求，上方搜索一个企业，下面的几个 tab 页展示对应的数据。 image-20210915162344520 我开始设计时，把每一个 tab 页当成一个路由，然后把这个企业的 eid 传到每个 tab 页中（每个 tab 页用 watch 进行监听），进行数据展示。这样就会存在一个问题，我只要一搜索企业，下面的每个 tab 页中的接口都会调用，很不友好。 所以，希望设计成这样：切换到每个 tab 页时，才调用对应的接口，并且同一家公司，tab 页切换过去一次后，第二次切换过去，不需要再调接口。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T06:28:09.000Z"}],["meta",{"property":"article:author","content":"菜鸡小谢"}],["meta",{"property":"article:published_time","content":"2021-09-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T06:28:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见搜索后，不同tab页展示不同信息的代码方案设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-24T06:28:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜鸡小谢\\"}]}"],["meta",{"name":"google-site-verification","content":"8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y"}]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"开发过程","slug":"开发过程","link":"#开发过程","children":[]},{"level":3,"title":"最终代码","slug":"最终代码","link":"#最终代码","children":[]}],"git":{"createdTime":1690180089000,"updatedTime":1690180089000,"contributors":[{"name":"xiezhenghua","email":"xiezhenghua@hikvision.com","commits":1}]},"readingTime":{"minutes":1.53,"words":460},"filePathRelative":"article/trap/refresh.md","localizedDate":"2021年9月15日","excerpt":"<h3> <strong>前言</strong></h3>\\n<p>项目开发过程中，我遇到到了这样一个问题，当时有这样一个需求，上方搜索一个企业，下面的几个 tab 页展示对应的数据。</p>\\n<figure><figcaption>image-20210915162344520</figcaption></figure>\\n<p>我开始设计时，把每一个 tab 页当成一个路由，然后把这个企业的 eid 传到每个 tab 页中（每个 tab 页用 watch 进行监听），进行数据展示。这样就会存在一个问题，我只要一搜索企业，下面的每个 tab 页中的接口都会调用，很不友好。</p>\\n<p>所以，希望设计成这样：切换到每个 tab 页时，才调用对应的接口，并且同一家公司，tab 页切换过去一次后，第二次切换过去，不需要再调接口。</p>","copyright":{"author":"菜鸡小谢"},"autoDesc":true}');export{t as data};