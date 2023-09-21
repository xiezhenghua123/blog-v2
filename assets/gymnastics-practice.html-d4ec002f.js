const n=JSON.parse('{"key":"v-284fc1b3","path":"/article/typescript/gymnastics-practice.html","title":"ts体操练习","lang":"zh-CN","frontmatter":{"author":"菜鸡小谢","date":"2023-09-10T00:00:00.000Z","category":"typescript","title":"ts体操练习","isOriginal":true,"description":"前言 typescript类型体操练习，用于学习ts。 题目 get-return-type const fn = (v: boolean,a:string) =&gt; { if (v) return 1 else return 2 } // inter关键字，表示在extends条件语句中待推断的类型变量 type MyReturnType&lt;T extends Function&gt; = T extends (...arg: any) =&gt; infer p ? p :never type a = MyReturnType&lt;typeof fn&gt;","head":[["meta",{"property":"og:url","content":"https://xiezhenghua123.github.io/blog-v2/article/typescript/gymnastics-practice.html"}],["meta",{"property":"og:title","content":"ts体操练习"}],["meta",{"property":"og:description","content":"前言 typescript类型体操练习，用于学习ts。 题目 get-return-type const fn = (v: boolean,a:string) =&gt; { if (v) return 1 else return 2 } // inter关键字，表示在extends条件语句中待推断的类型变量 type MyReturnType&lt;T extends Function&gt; = T extends (...arg: any) =&gt; infer p ? p :never type a = MyReturnType&lt;typeof fn&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T01:35:06.000Z"}],["meta",{"property":"article:author","content":"菜鸡小谢"}],["meta",{"property":"article:published_time","content":"2023-09-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T01:35:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ts体操练习\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-21T01:35:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜鸡小谢\\"}]}"],["meta",{"name":"google-site-verification","content":"8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y"}]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"题目","slug":"题目","link":"#题目","children":[]}],"git":{"createdTime":1694357554000,"updatedTime":1695260106000,"contributors":[{"name":"xiezhenghua","email":"xiezhenghua@hikvision.com","commits":7},{"name":"谢正华“","email":"1803493121@qq.com","commits":2}]},"readingTime":{"minutes":3.54,"words":1061},"filePathRelative":"article/typescript/gymnastics-practice.md","localizedDate":"2023年9月10日","excerpt":"<h3> 前言</h3>\\n<p>typescript类型体操练习，用于学习ts。</p>\\n<h3> 题目</h3>\\n<p><strong>get-return-type</strong></p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">fn</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>v<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">boolean</span><span class=\\"token punctuation\\">,</span>a<span class=\\"token operator\\">:</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>v<span class=\\"token punctuation\\">)</span>\\n   <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">1</span>\\n <span class=\\"token keyword\\">else</span>\\n   <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">2</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// inter关键字，表示在extends条件语句中待推断的类型变量</span>\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">MyReturnType<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token builtin\\">Function</span><span class=\\"token operator\\">&gt;</span></span> <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">T</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span>arg<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">infer</span> p <span class=\\"token operator\\">?</span> p <span class=\\"token operator\\">:</span><span class=\\"token builtin\\">never</span>\\n\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">a</span> <span class=\\"token operator\\">=</span> MyReturnType<span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">typeof</span> fn<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"菜鸡小谢"},"autoDesc":true}');export{n as data};
