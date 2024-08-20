const e=JSON.parse('{"key":"v-60f733d9","path":"/%E6%97%A5%E5%B8%B8%E5%BC%80%E5%8F%91%E8%B8%A9%E5%9D%91/remove-console.html","title":"记一次项目中自动去除console.log打印（非正常webpack、vite打包环境）","lang":"zh-CN","frontmatter":{"date":"2024-08-16T00:00:00.000Z","title":"记一次项目中自动去除console.log打印（非正常webpack、vite打包环境）","isOriginal":true,"category":["git","javascript"],"description":"前言 ​ 前不久接到一个需求，为了保证信息安全的问题，需要去除项目中所有的console.log打印。常见的通过webpack、vite打包编译的项目都有对应的插件，比如babel插件 babel-plugin-transform-remove-console、webpack插件terser-webpack-plugin等。但是我们的项目是属于php的前后端不分离项目，这应该怎么办呢？只能靠自己手搓nodejs脚本了。(需要支持node环境)","head":[["meta",{"property":"og:url","content":"https://xiezhenghua123.github.io/blog-v2/%E6%97%A5%E5%B8%B8%E5%BC%80%E5%8F%91%E8%B8%A9%E5%9D%91/remove-console.html"}],["meta",{"property":"og:title","content":"记一次项目中自动去除console.log打印（非正常webpack、vite打包环境）"}],["meta",{"property":"og:description","content":"前言 ​ 前不久接到一个需求，为了保证信息安全的问题，需要去除项目中所有的console.log打印。常见的通过webpack、vite打包编译的项目都有对应的插件，比如babel插件 babel-plugin-transform-remove-console、webpack插件terser-webpack-plugin等。但是我们的项目是属于php的前后端不分离项目，这应该怎么办呢？只能靠自己手搓nodejs脚本了。(需要支持node环境)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T12:57:20.000Z"}],["meta",{"property":"article:author","content":"菜鸡小谢"}],["meta",{"property":"article:published_time","content":"2024-08-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-20T12:57:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"记一次项目中自动去除console.log打印（非正常webpack、vite打包环境）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-20T12:57:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜鸡小谢\\"}]}"],["meta",{"name":"google-site-verification","content":"8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y"}]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":3,"title":"npm初始化","slug":"npm初始化","link":"#npm初始化","children":[]},{"level":3,"title":"nodejs脚本文件","slug":"nodejs脚本文件","link":"#nodejs脚本文件","children":[]},{"level":3,"title":"脚本自动化执行","slug":"脚本自动化执行","link":"#脚本自动化执行","children":[]},{"level":3,"title":"补充","slug":"补充","link":"#补充","children":[]}],"git":{"createdTime":1724158640000,"updatedTime":1724158640000,"contributors":[{"name":"xiezhenghua","email":"xiezhenghua@sailvan.com","commits":1}]},"readingTime":{"minutes":5.5,"words":1650},"filePathRelative":"日常开发踩坑/remove-console.md","localizedDate":"2024年8月16日","excerpt":"<h3> <strong>前言</strong></h3>\\n<p>​     前不久接到一个需求，为了保证信息安全的问题，需要去除项目中所有的console.log打印。常见的通过webpack、vite打包编译的项目都有对应的插件，比如babel插件 <a href=\\"https://www.npmjs.com/package/babel-plugin-transform-remove-console\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">babel-plugin-transform-remove-console</a>、webpack插件<a href=\\"https://www.npmjs.com/package/terser-webpack-plugin/v/1.4.5\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">terser-webpack-plugin</a>等。但是我们的项目是属于php的前后端不分离项目，这应该怎么办呢？只能靠自己手搓nodejs脚本了。(需要支持node环境)</p>","copyright":{"author":"菜鸡小谢"},"autoDesc":true}');export{e as data};
