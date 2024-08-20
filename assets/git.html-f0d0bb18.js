const t=JSON.parse('{"key":"v-727851b9","path":"/%E6%97%A5%E5%B8%B8%E5%BC%80%E5%8F%91%E8%B8%A9%E5%9D%91/git.html","title":"代码回滚的不同方式及其区别","lang":"zh-CN","frontmatter":{"author":"菜鸡小谢","date":"2021-11-24T00:00:00.000Z","category":"git","title":"代码回滚的不同方式及其区别","isOriginal":true,"description":"前言 日常开发中，git 是多人协作开发中必不可少的代码管理工具，有时候，我们难免会遇到提交了错误代码的情况需要 git 回滚。下面我就总结一下： git reset git reset 是回退到某一次 commit，并且把这个 commit 后面的所有 commit 全部删除。 git reset 包括 git reset --hard 和 git reset --soft，两者区别：--hard 会将强制回退到某个提交，会将你当前写的还未提交的代码删除；--soft 则只会回退到某个提交，不会删除当前未提交的代码。","head":[["meta",{"property":"og:url","content":"https://xiezhenghua123.github.io/blog-v2/%E6%97%A5%E5%B8%B8%E5%BC%80%E5%8F%91%E8%B8%A9%E5%9D%91/git.html"}],["meta",{"property":"og:title","content":"代码回滚的不同方式及其区别"}],["meta",{"property":"og:description","content":"前言 日常开发中，git 是多人协作开发中必不可少的代码管理工具，有时候，我们难免会遇到提交了错误代码的情况需要 git 回滚。下面我就总结一下： git reset git reset 是回退到某一次 commit，并且把这个 commit 后面的所有 commit 全部删除。 git reset 包括 git reset --hard 和 git reset --soft，两者区别：--hard 会将强制回退到某个提交，会将你当前写的还未提交的代码删除；--soft 则只会回退到某个提交，不会删除当前未提交的代码。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T12:57:20.000Z"}],["meta",{"property":"article:author","content":"菜鸡小谢"}],["meta",{"property":"article:published_time","content":"2021-11-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-20T12:57:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码回滚的不同方式及其区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-20T12:57:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜鸡小谢\\"}]}"],["meta",{"name":"google-site-verification","content":"8BRrT9I5fcaBjpw3Q8I49161FQtzGeN0qIYF54dqF0Y"}]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"git reset","slug":"git-reset","link":"#git-reset","children":[]},{"level":3,"title":"git revert","slug":"git-revert","link":"#git-revert","children":[]}],"git":{"createdTime":1724158640000,"updatedTime":1724158640000,"contributors":[{"name":"xiezhenghua","email":"xiezhenghua@sailvan.com","commits":1}]},"readingTime":{"minutes":2.01,"words":603},"filePathRelative":"日常开发踩坑/git.md","localizedDate":"2021年11月24日","excerpt":"<h3> <strong>前言</strong></h3>\\n<p>日常开发中，git 是多人协作开发中必不可少的代码管理工具，有时候，我们难免会遇到提交了错误代码的情况需要 git 回滚。下面我就总结一下：</p>\\n<h3> <strong>git reset</strong></h3>\\n<p>git reset 是回退到某一次 commit，并且把这个 commit 后面的所有 commit 全部删除。</p>\\n<p>git reset 包括 git reset --hard 和 git reset --soft，两者区别：--hard 会将强制回退到某个提交，会将你当前写的还未提交的代码删除；--soft 则只会回退到某个提交，不会删除当前未提交的代码。</p>","copyright":{"author":"菜鸡小谢"},"autoDesc":true}');export{t as data};
